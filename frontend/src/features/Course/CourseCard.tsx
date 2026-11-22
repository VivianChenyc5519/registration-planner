import type { CourseCategory } from "../../types/Course"
import style from './Course.module.css'

interface CourseCardProps {
    code: string;
    title: string;
    category: CourseCategory
}

export default function CourseCard({code, title, category} : CourseCardProps) {
    return (
        <div className={style['course-card']}>
            <div className={style['course-card-content']}>
                <span className={style['course-card-title']}>
                    {code} {title}
                </span>
            </div>
            <div className={style['course-card-category']} data-category={category}>
                {category}
            </div>
        </div>
    )
}