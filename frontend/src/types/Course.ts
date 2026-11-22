import {
  ALL_PERIODS,
  ALL_CAMPUSES,
  ALL_CATEGORIES,
} from '../constants/constants';

export type Period = (typeof ALL_PERIODS)[number];
export type KnownCampus = (typeof ALL_CAMPUSES)[number];
export type CourseCategory = (typeof ALL_CATEGORIES)[number];
type Weekday = 1 | 2 | 3 | 4 | 5;

interface RecurringSchedule {
    type: "recurring";
    startDate: string;
    endDate: string;
    weeklyMeetings: WeeklyMeeting[];
    excludeDates?: string[];
    additionalDates?: Meeting[];
}

interface NonRecurringSchedule {
    type: "specific";
    meetings: Meeting[];
}

interface ClassTime {
    startTime: string;
    endTime: string;
}

interface Meeting extends ClassTime {
    date: string
}

interface WeeklyMeeting extends ClassTime {
    weekday: Weekday;
}

type CourseSchedule = RecurringSchedule | NonRecurringSchedule;


export interface Course {
    id: string;
    code: string;
    title: string;
    period: Period;
    campus: string;
    instructor: string;
    category: CourseCategory; // single category or multiple ?
    schedule: CourseSchedule;
}