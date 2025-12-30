
export interface Unit {
  title: string;
  content: string;
}

export interface Course {
  code: string;
  title: string;
  ltp: string;
  credits: number | string;
  type: 'core' | 'lab' | 'elective' | 'other';
  units?: Unit[];
  grade?: string;
  points?: number;
  faculty?: string;
}

export interface Semester {
  id: number;
  courses: Course[];
  sgpa?: number;
  status: 'published' | 'ongoing' | 'upcoming';
}

export interface Curriculum {
  semesters: Semester[];
  coreElectives: Course[];
  openElectives: Course[];
}

export interface TimetableEntry {
  day: string;
  slots: {
    time: string;
    course: string;
    room: string;
    type: 'Lecture' | 'Lab' | 'Seminar';
    faculty?: string;
  }[];
}

export interface CalendarEvent {
  date: string; // YYYY-MM-DD
  day: string;
  particulars: string;
  type: 'holiday' | 'exam' | 'commencement' | 'timetable' | 'event' | 'working-day';
  targetGroup?: 'M.Sc' | 'B.Tech' | 'All' | 'Higher Semesters' | 'Int.M.Sc';
}
