import style from "./Course.module.css";
import type { Course } from "../../types/Course";
import CourseCard from "./CourseCard";

interface CourseListProps {
    courses: Course[];
}

export default function CourseList({courses}: CourseListProps) {
  return (
    <div className={style["course-list"]}>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          code={course.code}
          title={course.title}
          category={course.category}
        />
      ))}
    </div>
  );
}
