
import type { Course } from "../types/Course";

export const mockCourses: Course[] = [
  {
    id: "1",
    code: "CSC-IG01-TP",
    title: "Intro to Computer Graphics",
    period: "2",
    category: "Graphics",
    campus: "TP",
    instructor: "Alice Martin",
    schedule: {
      type: "recurring",
      startDate: "2027-01-18",
      endDate: "2027-05-07",
      weeklyMeetings: [
        {
          weekday: 1,
          startTime: "09:00",
          endTime: "10:30",
        },
        {
          weekday: 3,
          startTime: "14:00",
          endTime: "15:30",
        },
      ],
      excludeDates: ["2027-03-15"]
    },
  },
  {
    id: "2",
    code: "MAT-201-CM",
    title: "Linear Algebra THIS IS JUST AN EXTRA LONG TITLE FOR TESTING PUPOSE DON'T CARE ABOUT IT OK IT HAS TO BE EVEN LONGER ACTUALLY AND THIS IS STILL NOT ENOUGH I'M GOING TO ADD MORE",
    period: "2",
    category: "Project",
    campus: "TP",
    instructor: "Thomas Bernard",
    schedule: {
      type: "recurring",
      startDate: "2027-01-18",
      endDate: "2027-05-07",
      weeklyMeetings: [
        {
          weekday: 2,
          startTime: "10:00",
          endTime: "12:00",
        },
      ]
    },
  },
  {
    id: "3",
    code: "PHY-102-TD",
    title: "Physics II",
    period: "2",
    category: "Programming",
    campus: "X",
    instructor: "David Chen",
    schedule: {
      type: "recurring",
      startDate: "2027-01-18",
      endDate: "2027-05-07",
      weeklyMeetings: [
        {
          weekday: 4,
          startTime: "13:00",
          endTime: "15:00",
        },
      ],
      excludeDates: ["2027-04-01"],
      additionalDates: [
        {
          date: "2027-04-02",
          startTime: "10:00",
          endTime: "12:00",
        },
      ],
    },
  },
  {
    id: "4",
    code: "ART-305-TP",
    title: "Digital Media Workshop",
    period: "2",
    category: "Design",
    campus: "PS",
    instructor: "Emily Wilson",
    schedule: {
      type: "specific",
      meetings: [
        {
          date: "2027-02-05",
          startTime: "09:00",
          endTime: "12:00",
        },
        {
          date: "2027-02-19",
          startTime: "13:00",
          endTime: "16:00",
        },
      ],
    },
  },
  {
    id: "5",
    code: "CSC-301-CM",
    title: "Machine Learning",
    period: "2",
    category: "Interaction",
    campus: "X",
    instructor: "Sarah Zhang",
    schedule: {
      type: "recurring",
      startDate: "2027-01-18",
      endDate: "2027-05-07",
      weeklyMeetings: [
        {
          weekday: 5,
          startTime: "10:00",
          endTime: "12:00",
        },
      ]
    },
  },
];
