import { Button } from "../../components/Button/Button";
import style from "./Course.module.css";
import { ReturnButton } from "../../components/SpecialButton";

interface CourseFilterProps {
  allPeriods: number[];
  onClose: () => void;
  className?: string;
}

export default function CourseFilter({
  allPeriods,
  className,
  onClose,
}: CourseFilterProps) {
  return (
    <div className={`${style["course-filter"]} ${className ?? ""}`}>
      <div className={style["course-filter-header"]}>
        <ReturnButton onClick={onClose} />
      </div>
      <div className={style["course-filter-item"]}>
        <PeriodFilter allPeriods={allPeriods} />
      </div>
    </div>
  );
}

interface PeriodFilterProps {
  allPeriods: number[];
}

function PeriodFilter({ allPeriods }: PeriodFilterProps) {
  return (
    <>
      <h3 className={style["course-filter-title"]}>Period</h3>
      <div className={style["course-filter-round-buttons"]}>
        {allPeriods.map((period) => (
          <Button key={period} size="s" shape="circle">
            {period}
          </Button>
        ))}
      </div>
    </>
  );
}
