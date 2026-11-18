import { CourseBanner } from "./CourseBanner";
import type { Course } from "../../types/Course";
import { useState } from "react";
import { mockCourses } from "../../mockData/mockCourses";
import style from "./Course.module.css";
import CourseList from "./CourseList";

export function CoursePage() {
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  // const [courses, setCourses] = useState<Course[]>([]);

  return (
    <div className={style["course-page"]}>
      <CourseBanner />
      <CourseList courses={courses}/>
    </div>
  );
}
