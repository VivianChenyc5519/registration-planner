export type Period = '1' | '2' | '3' | '4';
export type KnownCampus = 'PS' | "TP" | 'X' | 'TSP' | 'ENSTA';
export type CourseCategory = 'Interaction' | 'Graphics' | 'Design' | 'Mixed Reality' | 'Multimodal/Robotics/Learning' | 'Programming' | 'Project';
type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

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