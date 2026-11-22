type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | null;
type TimeOfDay = "Morning" | "Afternoon" | "AllDay" | null;

export default interface DayFilterItem {
    day: Day;
    time: TimeOfDay;
}