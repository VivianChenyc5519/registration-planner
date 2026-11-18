import type { Course, CourseCategory } from "../../types/Course"
import style from './Course.module.css'

interface CourseCardProps {
    code: string;
    title: string;
    category: CourseCategory
}

export default function CourseCard({code, title, category} : CourseCardProps) {
    console.log("The category of this card is ", category);
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