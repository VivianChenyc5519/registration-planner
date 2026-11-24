import { CourseBanner } from "./CourseBanner";
import {
  type KnownCampus,
  type Course,
  type Period,
  type CourseCategory,
} from "../../types/Course";
import { useState } from "react";
import { mockCourses } from "../../mockData/mockCourses";
import style from "./Course.module.css";
import CourseList from "./CourseList";
import CourseFilter from "./CourseFilter";
import {
  ALL_CAMPUSES,
  ALL_CATEGORIES,
  ALL_PERIODS,
} from "../../constants/constants";
import type DayFilterItem from "../../types/DayFilterItem";

type SelectedWeekday = Exclude<DayFilterItem["day"], null>;

const WEEKDAY_NUMBERS: Record<SelectedWeekday, number> = {
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
};

function courseHasWeekday(course: Course, weekday: number): boolean {
  if (course.schedule.type === "recurring") {
    return (
      course.schedule.weeklyMeetings.some(
        (meeting) => meeting.weekday === weekday,
      ) ||
      (course.schedule.additionalDates?.some(
        (meeting) =>
          new Date(`${meeting.date}T00:00:00`).getDay() === weekday,
      ) ??
        false)
    );
  }

  return course.schedule.meetings.some(
    (meeting) => new Date(`${meeting.date}T00:00:00`).getDay() === weekday,
  );
}

function timeToMinutes(time: string): number | null {
  const [hours, minutes] = time.split(":").map(Number);
  if (
    !Number.isInteger(hours) ||
    !Number.isInteger(minutes) ||
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59
  ) {
    return null;
  }

  return hours * 60 + minutes;
}

function matchesTimeOfDay(
  startTime: string,
  endTime: string,
  timeOfDay: Exclude<NonNullable<DayFilterItem["time"]>, "AllDay">,
): boolean {
  const start = timeToMinutes(startTime);
  const end = timeToMinutes(endTime);
  if (start === null || end === null) {
    return false;
  }

  const isMorning = start < 12 * 60 && end < 16 * 60;
  const isAfternoon = start > 12 * 60;

  if (timeOfDay === "Morning") {
    return isMorning;
  }
  return isAfternoon;
}

function CheckTimeOfDay(
  course: Course,
  selectedDay: DayFilterItem,
): boolean {
  const timeOfDay = selectedDay.time;
  if (timeOfDay === null) {
    return true;
  }

  const selectedWeekday =
    selectedDay.day === null ? null : WEEKDAY_NUMBERS[selectedDay.day];
  if (timeOfDay === "AllDay") {
    return (
      selectedWeekday === null || courseHasWeekday(course, selectedWeekday)
    );
  }

  const matchesDate = (date: string) =>
    selectedWeekday === null ||
    new Date(`${date}T00:00:00`).getDay() === selectedWeekday;

  if (course.schedule.type === "recurring") {
    return (
      course.schedule.weeklyMeetings.some(
        (meeting) =>
          (selectedWeekday === null ||
            meeting.weekday === selectedWeekday) &&
          matchesTimeOfDay(meeting.startTime, meeting.endTime, timeOfDay),
      ) ||
      (course.schedule.additionalDates?.some(
        (meeting) =>
          matchesDate(meeting.date) &&
          matchesTimeOfDay(meeting.startTime, meeting.endTime, timeOfDay),
      ) ??
        false)
    );
  }

  return course.schedule.meetings.some(
    (meeting) =>
      matchesDate(meeting.date) &&
      matchesTimeOfDay(meeting.startTime, meeting.endTime, timeOfDay),
  );
}

export function CoursePage() {
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [filterOpen, setFilterOpen] = useState<Boolean>(false);
  const [selectedDays, setSelectedDays] = useState<DayFilterItem[]>([
    { day: null, time: null },
  ]);
  const [selectedPeriods, setSelectedPeriods] = useState<Period[]>([]);
  const [selectedCampus, setSelectedCampus] = useState<KnownCampus[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory[]>(
    [],
  );
  const [searchTerms, setSearchTerms] = useState<string>('');
  // const [courses, setCourses] = useState<Course[]>([]);

  const updateDay = (index: number, update: Partial<DayFilterItem>) => {
    setSelectedDays((currentDays) => {
      const newDays = currentDays.map((item, itemIndex) =>
        itemIndex === index ? { ...item, ...update } : item,
      );
      return newDays;
    });
  };

  const addDay = (newDay: DayFilterItem) => {
    setSelectedDays((prev) => {
      const newDays = [...prev, newDay];
      return newDays;
    });
  };

  const deleteDay = (_index: number) => {
    setSelectedDays((prev) => {
      const newDays = prev.filter((_, i) => i !== _index);
      const remainingDays =
        newDays.length > 0 ? newDays : [{ day: null, time: null }];
      return remainingDays;
    });
  };

  const updatePeriod = (update: Period) => {
    setSelectedPeriods((prev) => {
      const newPeriods = prev.includes(update)
        ? prev.filter((p) => p !== update)
        : [...prev, update];
      return newPeriods;
    });
  };

  const updateCampus = (update: KnownCampus) => {
    setSelectedCampus((prev) => {
      const newCampus = prev.includes(update)
        ? prev.filter((campus) => campus !== update)
        : [...prev, update];
      return newCampus;
    });
  };

  const updateCategory = (update: CourseCategory) => {
    setSelectedCategory((prev) => {
      const newCategory = prev.includes(update)
        ? prev.filter((cat) => cat !== update)
        : [...prev, update];
      return newCategory;
    });
  };

  const filterCourses = courses.filter((course) => {
    const matchesSearch = searchTerms.trim() === "" || 
    [
      course.code,
      course.title,
      course.category,
      course.campus,
      course.period,
      course.instructor,
    ].some((value) => value.toLowerCase().includes(searchTerms.trim().toLowerCase()));
    const matchesPeriod =
      selectedPeriods.length === 0 || selectedPeriods.includes(course.period);
    const matchesCampus =
      selectedCampus.length === 0 || selectedCampus.includes(course.campus);
    const matchesCategory =
      selectedCategory.length === 0 ||
      selectedCategory.includes(course.category);
    const matchesDays =
      selectedDays.length === 0 ||
      selectedDays.every(
        (item) => item.day === null && item.time === null,
      ) ||
      selectedDays.some((item) => {
        if (item.day === null) {
          return item.time === null ? true : CheckTimeOfDay(course, item);
        }

        const weekday = WEEKDAY_NUMBERS[item.day];
        const matchesWeekday = courseHasWeekday(course, weekday);

        if (item.time === null) {
          return matchesWeekday;
        }

        return matchesWeekday && CheckTimeOfDay(course, item);
      });

    return matchesSearch && matchesPeriod && matchesCampus && matchesCategory && matchesDays;
  });
  // console.debug("filterCourses:", filterCourses);

  return (
    <main
      className={`${style["course-page"]} ${filterOpen ? style["filter-open"] : ""}`}
    >
      <CourseBanner
        className={style["course-page-banner"]}
        filterOpen={filterOpen}
        onClickFilterButton={() => setFilterOpen(true)}
        handleSearch={(term: string) => {setSearchTerms(term);}}
      />
      {filterOpen && (
        <CourseFilter
          className={style["course-page-filter"]}
          allCategory={ALL_CATEGORIES}
          allCampus={ALL_CAMPUSES} // [...ALL_CAMPUSES, "Other"] if there are other campuses
          allPeriods={ALL_PERIODS}
          selectedDays={selectedDays}
          selectedCampus={selectedCampus}
          selectedCategory={selectedCategory}
          selectedPeriods={selectedPeriods}
          onUpdateDay={updateDay}
          onAddDay={addDay}
          onDeleteDay={deleteDay}
          onChangeCampus={updateCampus}
          onChangeCategory={updateCategory}
          onChangePeriod={updatePeriod}
          onClose={() => setFilterOpen(false)}
        />
      )}
      <CourseList className={style["course-page-list"]} courses={filterCourses} />
    </main>
  );
}
