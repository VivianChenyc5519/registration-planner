import { Link } from "react-router-dom";
import type { CourseCategory } from "../../types/Course";
import style from "./Course.module.css";

interface CourseCardProps {
  id: string;
  code: string;
  title: string;
  category: CourseCategory;
}

export default function CourseCard({ id, code, title, category }: CourseCardProps) {
  return (
    <div className={style["course-card"]}>
      <Link className={style["course-card-content"]} to={`/courses/${id}/reviews`}>
          <span className={style["course-card-title"]}>
            {code} {title}
          </span>
      </Link>
      <div className={style["course-card-category"]} data-category={category}>
        {category}
      </div>
    </div>
  );
}
