import type { Course } from "../types/Course";

export async function fetchCourses(): Promise<Course[]> {
  const response = await fetch("/api/courses");

  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }

  return response.json();
}
