import { CourseBanner } from "./CourseBanner";
import type { Course } from "../../types/Course";
import { useState } from "react";
import { mockCourses } from "../../mockData/mockCourses";
import style from "./Course.module.css";
import CourseList from "./CourseList";
import CourseFilter from "./CourseFilter";
import { ALL_PERIODS } from "../../constants/constants";

export function CoursePage() {
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [filterOpen, setFilterOpen] = useState<Boolean>(false);
  // const [courses, setCourses] = useState<Course[]>([]);

  return (
    // <div className={style["course-page"]}>
      <main className={`${style['course-page']} ${filterOpen ? style['filter-open'] : ''}`}>
        <CourseBanner
          className={style['course-page-banner']}
          filterOpen={filterOpen}
          onClickFilterButton={() => setFilterOpen(true)}
        />
        {filterOpen && (
          <CourseFilter className={style['course-page-filter']} allPeriods={ALL_PERIODS} onClose={() => setFilterOpen(false)}/>
        )}
        <CourseList className={style['course-page-list']} courses={courses}/>
    </main>
  );
}
