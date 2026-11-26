import { Routes, Route } from "react-router-dom";

import CoursePage from "../features/Course/CoursePage";
import CourseReviewPage from "../features/Review/ReviewPage";
import SchedulePage from "../features/Schedule/SchedulePage";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<CoursePage />} />
            <Route path="courses" element={<CoursePage />} />
            <Route path="/courses/:courseId/reviews" element={<CourseReviewPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
        </Routes>
    )
}