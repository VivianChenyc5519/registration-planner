import { Button } from "../../components/Button/Button";
import style from "./Course.module.css";
import ButtonStyle from "../../components/Button/Button.module.css";
import { CircleMinus, CirclePlus, Undo2 } from "lucide-react";
import { IconButton } from "../../components/SpecialButtons/SpecialButton";
import type DayFilterItem from "../../types/DayFilterItem";
import type { Period, CourseCategory, KnownCampus } from "../../types/Course";

interface CourseFilterProps {
  allPeriods: string[];
  allCampus: string[];
  allCategory: string[];
  selectedDays: DayFilterItem[];
  selectedPeriods: Period[];
  selectedCampus: KnownCampus[];
  selectedCategory: CourseCategory[];
  onUpdateDay: (index: number, update: Partial<DayFilterItem>) => void;
  onAddDay: (day: DayFilterItem) => void;
  onDeleteDay: (index: number) => void;
  onChangePeriod: (period: Period) => void;
  onChangeCampus: (campus: KnownCampus) => void;
  onChangeCategory: (category: CourseCategory) => void;
  onClose: () => void;
  className?: string;
}

export default function CourseFilter({
  allPeriods,
  allCampus,
  allCategory,
  selectedDays,
  selectedPeriods,
  selectedCampus,
  selectedCategory,
  onUpdateDay,
  onAddDay,
  onDeleteDay,
  onChangeCampus,
  onChangeCategory,
  onChangePeriod,
  className,
  onClose,
}: CourseFilterProps) {
  return (
    <div className={`${style["course-filter"]} ${className ?? ""}`}>
      <div className={style["course-filter-header"]}>
        <IconButton icon={Undo2} label="Close filters" onClick={onClose} />
      </div>
      <div className={style["course-filter-item"]}>
        <PeriodFilter allPeriods={allPeriods} selectedPeriods={selectedPeriods} onTogglePeriod={onChangePeriod}/>
      </div>
      <div className={style["course-filter-item"]}>
        <CampusFilter allCampus={allCampus} selectedCampus={selectedCampus} onToggleCampus={onChangeCampus}/>
      </div>
      <div className={style["course-filter-item"]}>
        <CategoryFilter allCategory={allCategory} selectedCategory={selectedCategory} onToggleCategory={onChangeCategory}/>
      </div>
      <div className={style["course-filter-item"]}>
        <DayFilter
          days={selectedDays}
          onUpdateDay={onUpdateDay}
          onAddDay={onAddDay}
          onDeleteDay={onDeleteDay}
        />
      </div>
    </div>
  );
}

interface PeriodFilterProps {
  allPeriods: readonly string[];
  selectedPeriods: Period[];
  onTogglePeriod: (period: Period) => void
}

function PeriodFilter({ allPeriods, selectedPeriods, onTogglePeriod }: PeriodFilterProps) {
  return (
    <>
      <h3 className={style["course-filter-title"]}>Period</h3>
      <div className={style["course-filter-round-buttons"]}>
        {allPeriods.map((period) => (
          <Button key={period} size="s" shape="circle" selected={selectedPeriods.includes(period)} onClick={() => onTogglePeriod(period)}>
            {period}
          </Button>
        ))}
      </div>
    </>
  );
}

interface CampusFilterProps {
  allCampus: readonly string[];
  selectedCampus: KnownCampus[];
  onToggleCampus: (campus: KnownCampus) => void
}

function CampusFilter({ allCampus, selectedCampus, onToggleCampus }: CampusFilterProps) {
  return (
    <>
      <h3 className={style["course-filter-title"]}>Campus</h3>
      <div className={style["course-filter-round-buttons"]}>
        {allCampus.map((campus) => (
          <Button key={campus} size="m" shape="circle" selected={selectedCampus.includes(campus)} onClick={() => onToggleCampus(campus)}>
            {campus}
          </Button>
        ))}
      </div>
    </>
  );
}

interface CategoryFilterProps {
  allCategory: readonly string[];
  selectedCategory: CourseCategory[];
  onToggleCategory: (category: CourseCategory) => void;
}

function CategoryFilter({ allCategory, selectedCategory, onToggleCategory }: CategoryFilterProps) {
  return (
    <>
      <h3 className={style["course-filter-title"]}>Category</h3>
      <div className={style["course-filter-rectangle-buttons"]}>
        {allCategory.map((cat) => (
          <Button key={cat} size="l" shape="rounded" selected={selectedCategory.includes(cat)} onClick={() => onToggleCategory(cat)}>
            {cat}
          </Button>
        ))}
      </div>
    </>
  );
}

interface DayFilterProps {
  days: DayFilterItem[];
  onUpdateDay: (index: number, update: Partial<DayFilterItem>) => void;
  onAddDay: (day: DayFilterItem) => void;
  onDeleteDay: (index: number) => void;
}

function DayFilter({
  days,
  onUpdateDay,
  onAddDay,
  onDeleteDay,
}: DayFilterProps) {
  return (
    <>
      <div className={style["course-filter-day-header"]}>
        <h3 className={style["course-filter-title"]}>Day</h3>
        <IconButton
          icon={CirclePlus}
          label="Add day filter"
          onClick={() => onAddDay({ day: null, time: null })}
        />
      </div>
      <DayFilterDropDown
        days={days}
        onUpdateDay={onUpdateDay}
        onDeleteDay={onDeleteDay}
      />
    </>
  );
}

interface DayFilterDropDownProps {
  days: DayFilterItem[];
  onUpdateDay: (index: number, update: Partial<DayFilterItem>) => void;
  onDeleteDay: (index: number) => void;
}

function DayFilterDropDown({
  days,
  onUpdateDay,
  onDeleteDay,
}: DayFilterDropDownProps) {
  // void onAddDay;
  // void onDeleteDay;

  return (
    <div className={style["course-filter-day-dropdown"]}>
      {days.map((item, index) => (
        <div key={index} className={style["course-filter-day-dropdown-row"]}>
          <select
            className={`${ButtonStyle.btn} ${ButtonStyle.l} ${ButtonStyle.rounded}`}
            name="selectedDay"
            value={item.day ?? ""}
            onChange={(event) => {
              const day = event.target.value as DayFilterItem["day"];
              onUpdateDay(index, { day });
            }}
          >
            <option value="" disabled>Select day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>

          <select
            className={`${ButtonStyle.btn} ${ButtonStyle.l} ${ButtonStyle.rounded}`}
            name="timeOfDay"
            value={item.time ?? ""}
            onChange={(event) => {
              const time = event.target.value as DayFilterItem["time"];
              onUpdateDay(index, { time });
            }}
          >
            <option value="" disabled>Select time</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="AllDay">All Day</option>
          </select>
          <IconButton
            icon={CircleMinus}
            label={`Remove day filter ${index + 1}`}
            onClick={() => onDeleteDay(index)}
          />
        </div>
      ))}
    </div>
  );
}
