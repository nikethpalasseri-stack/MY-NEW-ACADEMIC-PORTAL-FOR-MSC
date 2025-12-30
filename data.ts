
import { Curriculum, TimetableEntry, CalendarEvent } from './types';

export const STUDENT_INFO = {
  name: "NIKETH P",
  regNo: "CB.PS.P2CHM25009",
  program: "M.Sc. Chemistry",
  institution: "Amrita Vishwa Vidyapeetham",
  campus: "Coimbatore Campus",
  school: "School of Physical Sciences",
  batch: "2025 - 2027",
  currentCgpa: 7.33,
  standing: "GOOD"
};

export const ACADEMIC_CALENDAR_EVENTS: CalendarEvent[] = [
  // --- JUNE 2025 ---
  { date: '2025-06-01', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-06-05', day: 'Thu', particulars: 'Environment Day', type: 'event', targetGroup: 'All' },
  { date: '2025-06-07', day: 'Sat', particulars: 'Holiday - Bakrid', type: 'holiday', targetGroup: 'All' },
  { date: '2025-06-08', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-06-12', day: 'Thu', particulars: "Teacher's Camp - Sadgamaya", type: 'event', targetGroup: 'All' },
  { date: '2025-06-13', day: 'Fri', particulars: "Teacher's Camp - Sadgamaya", type: 'event', targetGroup: 'All' },
  { date: '2025-06-14', day: 'Sat', particulars: "Teacher's Camp - Sadgamaya", type: 'event', targetGroup: 'All' },
  { date: '2025-06-15', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-06-18', day: 'Wed', particulars: 'Commencement of classes for Higher semesters', type: 'commencement', targetGroup: 'Higher Semesters' },
  { date: '2025-06-21', day: 'Sat', particulars: "Monday's Time Table / International Yoga Day", type: 'timetable', targetGroup: 'All' },
  { date: '2025-06-22', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-06-28', day: 'Sat', particulars: "Tuesday's Time Table", type: 'timetable', targetGroup: 'All' },
  { date: '2025-06-29', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },

  // --- JULY 2025 ---
  { date: '2025-07-05', day: 'Sat', particulars: "Wednesday's Time Table", type: 'timetable', targetGroup: 'All' },
  { date: '2025-07-06', day: 'Sun', particulars: 'Muharam - Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-07-12', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-07-13', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-07-16', day: 'Wed', particulars: 'Commencement of Classes for First Semester - M.Tech / MSc', type: 'commencement', targetGroup: 'M.Sc' },
  { date: '2025-07-19', day: 'Sat', particulars: "Thursday's Time Table", type: 'timetable', targetGroup: 'All' },
  { date: '2025-07-20', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-07-26', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-07-27', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-07-31', day: 'Thu', particulars: 'Commencement of Classes for First Semester - Int. MSc', type: 'commencement', targetGroup: 'Int.M.Sc' },

  // --- AUGUST 2025 ---
  { date: '2025-08-02', day: 'Sat', particulars: "Friday's Time Table", type: 'timetable', targetGroup: 'All' },
  { date: '2025-08-03', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-08-09', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-08-10', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-08-15', day: 'Fri', particulars: 'Holiday - Independence Day', type: 'holiday', targetGroup: 'All' },
  { date: '2025-08-16', day: 'Sat', particulars: 'Janmashtami (Float / Procession)', type: 'holiday', targetGroup: 'All' },
  { date: '2025-08-17', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-08-18', day: 'Mon', particulars: 'Commencement of Classes for First Semester - B.Tech', type: 'commencement', targetGroup: 'B.Tech' },
  { date: '2025-08-20', day: 'Wed', particulars: 'Mid Semester Examinations for Higher semesters', type: 'exam', targetGroup: 'Higher Semesters' },
  { date: '2025-08-23', day: 'Sat', particulars: "Friday's Time Table", type: 'timetable', targetGroup: 'All' },
  { date: '2025-08-24', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-08-27', day: 'Wed', particulars: 'Holiday - Ganesh Chaturthi', type: 'holiday', targetGroup: 'All' },
  { date: '2025-08-30', day: 'Sat', particulars: 'Holiday - Nimanjanam', type: 'holiday', targetGroup: 'All' },
  { date: '2025-08-31', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },

  // --- SEPTEMBER 2025 ---
  { date: '2025-09-05', day: 'Fri', particulars: 'Holiday - Onam / Miladi Nabi', type: 'holiday', targetGroup: 'All' },
  { date: '2025-09-06', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-09-07', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-09-08', day: 'Mon', particulars: 'Mid Semester Examinations for First semester M.Tech / MSc', type: 'exam', targetGroup: 'M.Sc' },
  { date: '2025-09-13', day: 'Sat', particulars: "Wednesday's Time Table", type: 'timetable', targetGroup: 'All' },
  { date: '2025-09-14', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-09-20', day: 'Sat', particulars: "Friday's Time table", type: 'timetable', targetGroup: 'All' },
  { date: '2025-09-21', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-09-27', day: 'Sat', particulars: "Amma's Jayanthi", type: 'holiday', targetGroup: 'All' },
  { date: '2025-09-28', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-09-29', day: 'Mon', particulars: 'Mid Semester Examinations for First semester Int.MSc/B.Sc', type: 'exam', targetGroup: 'Int.M.Sc' },

  // --- OCTOBER 2025 ---
  { date: '2025-10-01', day: 'Wed', particulars: 'Holiday - Mahanavami', type: 'holiday', targetGroup: 'All' },
  { date: '2025-10-02', day: 'Thu', particulars: 'Holiday - Vijayadashami / Gandhi Jayanti', type: 'holiday', targetGroup: 'All' },
  { date: '2025-10-04', day: 'Sat', particulars: "Thursday's Time Table", type: 'timetable', targetGroup: 'All' },
  { date: '2025-10-05', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-10-11', day: 'Sat', particulars: "Friday's Time Table", type: 'timetable', targetGroup: 'All' },
  { date: '2025-10-12', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-10-13', day: 'Mon', particulars: 'Mid Semester Examinations for First semester B.Tech', type: 'exam', targetGroup: 'B.Tech' },
  { date: '2025-10-14', day: 'Tue', particulars: 'Last Working day for Higher semester', type: 'event', targetGroup: 'Higher Semesters' },
  { date: '2025-10-15', day: 'Wed', particulars: 'End Semester Examinations for Higher Semester begins', type: 'exam', targetGroup: 'Higher Semesters' },
  { date: '2025-10-18', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-10-19', day: 'Sun', particulars: 'Holiday - Diwali eve', type: 'holiday', targetGroup: 'All' },
  { date: '2025-10-20', day: 'Mon', particulars: 'Holiday - Diwali', type: 'holiday', targetGroup: 'All' },
  { date: '2025-10-21', day: 'Tue', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-10-25', day: 'Sat', particulars: "Monday's Time Table", type: 'timetable', targetGroup: 'All' },
  { date: '2025-10-26', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },

  // --- NOVEMBER 2025 ---
  { date: '2025-11-01', day: 'Sat', particulars: "Tuesday's TimeTable", type: 'timetable', targetGroup: 'All' },
  { date: '2025-11-02', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-11-07', day: 'Fri', particulars: 'Sanskrit Conference', type: 'event', targetGroup: 'All' },
  { date: '2025-11-08', day: 'Sat', particulars: 'Holiday - Sanskrit Conference', type: 'holiday', targetGroup: 'All' },
  { date: '2025-11-09', day: 'Sun', particulars: 'Holiday - Sanskrit Conference', type: 'holiday', targetGroup: 'All' },
  { date: '2025-11-12', day: 'Wed', particulars: 'Commencement of classes for Higher semesters', type: 'commencement', targetGroup: 'Higher Semesters' },
  { date: '2025-11-14', day: 'Fri', particulars: 'Last Working day for First semester M.Tech / MSc', type: 'event', targetGroup: 'M.Sc' },
  { date: '2025-11-15', day: 'Sat', particulars: "Wednesday's TimeTable", type: 'timetable', targetGroup: 'All' },
  { date: '2025-11-16', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-11-17', day: 'Mon', particulars: 'End Semester Examinations for First semester M.Tech / MSc', type: 'exam', targetGroup: 'M.Sc' },
  { date: '2025-11-22', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-11-23', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-11-29', day: 'Sat', particulars: "Last Working day for First semester Int. MSc/ B.Sc / Thursday's TimeTable", type: 'event', targetGroup: 'Int.M.Sc' },
  { date: '2025-11-30', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },

  // --- DECEMBER 2025 ---
  { date: '2025-12-01', day: 'Mon', particulars: 'End Semester Examinations for First Semester Int M.Sc/B.Sc', type: 'exam', targetGroup: 'Int.M.Sc' },
  { date: '2025-12-03', day: 'Wed', particulars: 'Commencement of Classes for Second Semester M.Tech/M.Sc', type: 'commencement', targetGroup: 'M.Sc' },
  { date: '2025-12-06', day: 'Sat', particulars: "Friday's TimeTable", type: 'timetable', targetGroup: 'All' },
  { date: '2025-12-07', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-12-13', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-12-14', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-12-15', day: 'Mon', particulars: 'Last Working day for First semester B.Tech', type: 'event', targetGroup: 'B.Tech' },
  { date: '2025-12-16', day: 'Tue', particulars: 'End Semester Examinations for First semester B.Tech', type: 'exam', targetGroup: 'B.Tech' },
  { date: '2025-12-20', day: 'Sat', particulars: "Monday's Time Table", type: 'timetable', targetGroup: 'All' },
  { date: '2025-12-21', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2025-12-22', day: 'Mon', particulars: 'Commencement of Classes for Second Semester Int M.Sc/B.Sc', type: 'commencement', targetGroup: 'Int.M.Sc' },
  { date: '2025-12-25', day: 'Thu', particulars: 'Holiday - Christmas', type: 'holiday', targetGroup: 'All' },
  { date: '2025-12-27', day: 'Sat', particulars: "Tuesday's Time Table", type: 'timetable', targetGroup: 'All' },
  { date: '2025-12-28', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },

  // --- JANUARY 2026 ---
  { date: '2026-01-01', day: 'Thu', particulars: 'Holiday-New Year', type: 'holiday', targetGroup: 'All' },
  { date: '2026-01-03', day: 'Sat', particulars: "Thursday's Time Table", type: 'timetable', targetGroup: 'All' },
  { date: '2026-01-04', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-01-05', day: 'Mon', particulars: 'Commencement of Classes Second Semester B.Tech', type: 'commencement', targetGroup: 'B.Tech' },
  { date: '2026-01-07', day: 'Wed', particulars: 'ANOKHA Tech Fest', type: 'event', targetGroup: 'All' },
  { date: '2026-01-08', day: 'Thu', particulars: 'ANOKHA Tech Fest', type: 'event', targetGroup: 'All' },
  { date: '2026-01-09', day: 'Fri', particulars: 'ANOKHA Tech Fest', type: 'event', targetGroup: 'All' },
  { date: '2026-01-10', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-01-11', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-01-12', day: 'Mon', particulars: 'Holiday- Pongal', type: 'holiday', targetGroup: 'All' },
  { date: '2026-01-13', day: 'Tue', particulars: 'Holiday- Pongal', type: 'holiday', targetGroup: 'All' },
  { date: '2026-01-14', day: 'Wed', particulars: 'Holiday- Pongal', type: 'holiday', targetGroup: 'All' },
  { date: '2026-01-15', day: 'Thu', particulars: 'Holiday- Pongal', type: 'holiday', targetGroup: 'All' },
  { date: '2026-01-16', day: 'Fri', particulars: 'Holiday- Pongal', type: 'holiday', targetGroup: 'All' },
  { date: '2026-01-17', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-01-18', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-01-19', day: 'Mon', particulars: 'Mid Semester Examinations for Higher Semester Courses', type: 'exam', targetGroup: 'Higher Semesters' },
  { date: '2026-01-24', day: 'Sat', particulars: "Friday's Time Table", type: 'timetable', targetGroup: 'All' },
  { date: '2026-01-25', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-01-26', day: 'Mon', particulars: 'Republic Day', type: 'holiday', targetGroup: 'All' },
  { date: '2026-01-31', day: 'Sat', particulars: "Monday's Time Table", type: 'timetable', targetGroup: 'All' },

  // --- FEBRUARY 2026 ---
  { date: '2026-02-01', day: 'Sun', particulars: 'Thai Poosam - Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-02-02', day: 'Mon', particulars: 'Mid Semester Examinations for Second Semester M.Tech/M.Sc', type: 'exam', targetGroup: 'M.Sc' },
  { date: '2026-02-07', day: 'Sat', particulars: "Tuesday's Time Table", type: 'timetable', targetGroup: 'All' },
  { date: '2026-02-08', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-02-14', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-02-15', day: 'Sun', particulars: 'Holiday - Maha Shivaratri', type: 'holiday', targetGroup: 'All' },
  { date: '2026-02-21', day: 'Sat', particulars: "Wednesday's Time Table", type: 'timetable', targetGroup: 'All' },
  { date: '2026-02-22', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-02-23', day: 'Mon', particulars: 'Mid Semester Examinations for Second Semester Int M.Sc/B.Sc', type: 'exam', targetGroup: 'Int.M.Sc' },
  { date: '2026-02-28', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },

  // --- MARCH 2026 ---
  { date: '2026-03-01', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-03-07', day: 'Sat', particulars: "Thursday's Time Table", type: 'timetable', targetGroup: 'All' },
  { date: '2026-03-08', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-03-09', day: 'Mon', particulars: 'Mid Semester Examinations for Second Semester B.Tech', type: 'exam', targetGroup: 'B.Tech' },
  { date: '2026-03-12', day: 'Thu', particulars: 'Last Working day for Higher Semenster Programs', type: 'event', targetGroup: 'Higher Semesters' },
  { date: '2026-03-14', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-03-15', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-03-16', day: 'Mon', particulars: 'End Semester Examinations for Higher Semester begins', type: 'exam', targetGroup: 'Higher Semesters' },
  { date: '2026-03-19', day: 'Thu', particulars: 'Holiday - Ugadi', type: 'holiday', targetGroup: 'All' },
  { date: '2026-03-21', day: 'Sat', particulars: "Friday's Time Table", type: 'timetable', targetGroup: 'All' },
  { date: '2026-03-22', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-03-28', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-03-29', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-03-31', day: 'Tue', particulars: 'Holiday- Mahavir Jayanthi', type: 'holiday', targetGroup: 'All' },

  // --- APRIL 2026 ---
  { date: '2026-04-03', day: 'Fri', particulars: 'Holiday- Good Friday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-04-04', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-04-05', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-04-08', day: 'Wed', particulars: 'Last Working day for Second semester M.Tech/M.Sc', type: 'event', targetGroup: 'M.Sc' },
  { date: '2026-04-09', day: 'Thu', particulars: 'End Semester Examinations for Second semester M.Tech/M.Sc', type: 'exam', targetGroup: 'M.Sc' },
  { date: '2026-04-11', day: 'Sat', particulars: "Friday's Time Table", type: 'timetable', targetGroup: 'All' },
  { date: '2026-04-12', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-04-14', day: 'Tue', particulars: 'Holiday- Tamil New Year / Ambedkar Jayanti', type: 'holiday', targetGroup: 'All' },
  { date: '2026-04-15', day: 'Wed', particulars: 'Vishu', type: 'holiday', targetGroup: 'All' },
  { date: '2026-04-18', day: 'Sat', particulars: "Tuesday's Time Table", type: 'timetable', targetGroup: 'All' },
  { date: '2026-04-19', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-04-25', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-04-26', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-04-28', day: 'Tue', particulars: 'Last Working day for Second semester Int M.Sc /B.Sc', type: 'event', targetGroup: 'Int.M.Sc' },

  // --- MAY 2026 ---
  { date: '2026-05-01', day: 'Fri', particulars: 'Holiday - May Day', type: 'holiday', targetGroup: 'All' },
  { date: '2026-05-02', day: 'Sat', particulars: "Friday's Time Table / End Semester Examinations for Second Semester Int M.Sc /B.Sc", type: 'exam', targetGroup: 'Int.M.Sc' },
  { date: '2026-05-03', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-05-09', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-05-10', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-05-12', day: 'Tue', particulars: 'Last Working day for Second semester B.Tech', type: 'event', targetGroup: 'B.Tech' },
  { date: '2026-05-13', day: 'Wed', particulars: 'End Semester Examinations for Second semester B.Tech', type: 'exam', targetGroup: 'B.Tech' },
  { date: '2026-05-17', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-05-23', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-05-24', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-05-27', day: 'Wed', particulars: 'Holiday - Bakrid', type: 'holiday', targetGroup: 'All' },
  { date: '2026-05-31', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },

  // --- JUNE 2026 ---
  { date: '2026-06-07', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-06-13', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-06-14', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-06-17', day: 'Wed', particulars: 'Commencement for Final Years of ASC, ASE, ASPS', type: 'commencement', targetGroup: 'Higher Semesters' },
  { date: '2026-06-21', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-06-22', day: 'Mon', particulars: 'Commencement for Third Years of ASC, ASE, ASPS', type: 'commencement', targetGroup: 'Higher Semesters' },
  { date: '2026-06-26', day: 'Fri', particulars: 'Holiday - Muharam', type: 'holiday', targetGroup: 'All' },
  { date: '2026-06-27', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-06-28', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },

  // --- JULY 2026 ---
  { date: '2026-07-01', day: 'Wed', particulars: 'Commencement for Second Years of ASC, ASE, ASPS', type: 'commencement', targetGroup: 'Higher Semesters' },
  { date: '2026-07-05', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-07-11', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-07-12', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-07-19', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-07-25', day: 'Sat', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-07-26', day: 'Sun', particulars: 'Holiday', type: 'holiday', targetGroup: 'All' },
  { date: '2026-07-29', day: 'Wed', particulars: 'Guru Poornima', type: 'event', targetGroup: 'All' },
];

export const SYLLABUS_DATA: Curriculum = {
  semesters: [
    {
      id: 1,
      status: 'published',
      sgpa: 7.33,
      courses: [
        { 
          code: "25CHY501", title: "Quantum Chemistry", ltp: "3 0 0", credits: 3, type: 'core', grade: 'B', faculty: "Dr Venkata Ravi Kumar Dharbha",
          units: [
            { title: "Unit 1: Postulates of QM", content: "Postulates, operators, Schrodinger equation, Particle in a box (1D, 2D, 3D), degeneracy." },
            { title: "Unit 2: Atomic Structure", content: "Hydrogen atom, angular momentum, spin, multielectron atoms, term symbols, Zeeman effect." },
            { title: "Unit 3: Approximation Methods", content: "Variation method, perturbation theory, Helium atom, Hartree-Fock method." }
          ]
        },
        { code: "25CHY505", title: "Group Theory and its Applications", ltp: "3 0 0", credits: 3, type: 'core', grade: 'B', faculty: "Dr Thilagavathy" },
        { code: "25CHY502", title: "Concepts in Inorganic Chemistry", ltp: "3 1 0", credits: 3, type: 'core', grade: 'B+', faculty: "Dr D Gangadharan" },
        { code: "25CHY503", title: "Principles in Organic Chemistry", ltp: "3 0 0", credits: 4, type: 'core', grade: 'B', faculty: "Dr K Elango" },
        { code: "25CHY504", title: "Coordination Chemistry", ltp: "3 0 0", credits: 3, type: 'core', grade: 'B', faculty: "Dr Asha Sathish" },
        { code: "25CHY581", title: "Inorganic Semi-micro Qualitative Analysis Lab", ltp: "0 0 5", credits: 2, type: 'lab', grade: 'A', faculty: "Dr T S Boopathi" },
        { code: "25CHY582", title: "Organic Quantitative Analysis Lab", ltp: "0 0 5", credits: 2, type: 'lab', grade: 'B', faculty: "Dr N Pandurangan" },
        { code: "25CUL501", title: "Cultural Education", ltp: "2 0 0", credits: "P/F", type: 'other', grade: 'P', faculty: "Faculty Dept." }
      ]
    },
    {
      id: 2,
      status: 'ongoing',
      courses: [
        { code: "25CHY511", title: "Chemical Thermodynamics and Equilibrium", ltp: "3 1 0", credits: 4, type: 'core', faculty: "Dr Thilagavathy" },
        { code: "25CHY513", title: "Molecular Spectroscopy", ltp: "3 1 0", credits: 4, type: 'core', faculty: "Dr Venkata Ravi Kumar Darbha" },
        { code: "25CHY514", title: "Organic Reaction Mechanism", ltp: "3 1 0", credits: 4, type: 'core', faculty: "Dr K Elango" },
        { code: "25CHY512", title: "Heterocyclic and Natural Products Chemistry", ltp: "3 0 0", credits: 3, type: 'core', faculty: "Dr N. Pandurangan" },
        { code: "25CHY515", title: "Organometallic Chemistry", ltp: "3 0 0", credits: 3, type: 'core', faculty: "Dr R Yamuna" },
        { code: "25CHY583", title: "Advanced Physical Chemistry Lab", ltp: "0 0 5", credits: 2, type: 'lab', faculty: "Dr Thilagavathy" },
        { code: "25CHY584", title: "Inorganic Quantitative Analysis Lab", ltp: "0 0 5", credits: 2, type: 'lab', faculty: "Dr Venkata Ravi Kumar Darbha" },
        { code: "22ADM201", title: "Strategic Lessons from Mahabharata", ltp: "1 0 0", credits: 1, type: 'other', faculty: "Mr M Pramod Kumar" },
        { code: "25AVP501", title: "Mastery Over Mind", ltp: "1 0 2", credits: 2, type: 'other', faculty: "Dr T S Boopathi" }
      ]
    },
    { 
      id: 3, 
      status: 'upcoming', 
      courses: [
        { code: "25CHY601", title: "Bio-inorganic and Bio-organic Chemistry", ltp: "3 0 0", credits: 3, type: 'core', faculty: "Dr Asha Sathish" },
        { code: "25CHY602", title: "Polymer Chemistry and Technology", ltp: "3 0 0", credits: 3, type: 'core', faculty: "Dr N Pandurangan" },
        { code: "25CHY603", title: "Electrochemistry and Surface Science", ltp: "3 1 0", credits: 4, type: 'core', faculty: "Dr Thilagavathy" },
        { code: "25CHY604", title: "Analytical Chemistry Techniques", ltp: "3 0 0", credits: 3, type: 'core', faculty: "Dr Venkata Ravi Kumar Darbha" },
        { code: "25CHY681", title: "Advanced Instrumental Analysis Lab", ltp: "0 0 5", credits: 2, type: 'lab', faculty: "Dr Venkata Ravi Kumar Darbha" },
        { code: "25CHY682", title: "Advanced Inorganic Synthesis Lab", ltp: "0 0 5", credits: 2, type: 'lab', faculty: "Dr D Gangadharan" },
        { code: "25CHY691", title: "Research Methodology", ltp: "2 0 0", credits: 2, type: 'other', faculty: "Dr K Elango" }
      ] 
    },
    { 
      id: 4, 
      status: 'upcoming', 
      courses: [
        { code: "25CHY611", title: "Green and Sustainable Chemistry", ltp: "3 0 0", credits: 3, type: 'core', faculty: "Dr K Elango" },
        { code: "25CHY612", title: "Computational Chemistry", ltp: "2 0 2", credits: 3, type: 'core', faculty: "Dr Thilagavathy" },
        { code: "25CHY613", title: "Advanced Materials Chemistry", ltp: "3 0 0", credits: 3, type: 'core', faculty: "Dr R Yamuna" },
        { code: "25CHY699", title: "Dissertation & Project Work", ltp: "0 0 20", credits: 10, type: 'core', faculty: "Departmental Committee" }
      ] 
    }
  ],
  coreElectives: [],
  openElectives: []
};

export const TIMETABLES: Record<number, TimetableEntry[]> = {
  1: [
    {
      day: "Monday",
      slots: [
        { time: "08:50 - 12:25", course: "Inorganic Lab (25CHY581)", room: "Chemistry Block", type: "Lab", faculty: "Dr T S Boopathi" },
        { time: "14:05 - 14:55", course: "Coordination Chem (25CHY504)", room: "D105 AB2", type: "Lecture", faculty: "Dr Asha Sathish" },
        { time: "15:45 - 16:35", course: "Principles Organic (25CHY503)", room: "D105 AB2", type: "Lecture", faculty: "Dr K Elango" }
      ]
    },
    {
      day: "Tuesday",
      slots: [
        { time: "08:50 - 12:25", course: "Organic Lab (25CHY582)", room: "Chemistry Block", type: "Lab", faculty: "Dr N Pandurangan" },
        { time: "14:05 - 14:55", course: "Principles Organic (25CHY503)", room: "D305 AB2", type: "Lecture", faculty: "Dr K Elango" },
        { time: "14:55 - 15:45", course: "Concepts Inorganic (25CHY502)", room: "D305 AB2", type: "Lecture", faculty: "Dr D Gangadharan" }
      ]
    },
    {
      day: "Wednesday",
      slots: [
        { time: "08:50 - 09:40", course: "Principles Organic (25CHY503)", room: "D105 AB2", type: "Lecture", faculty: "Dr K Elango" },
        { time: "11:35 - 12:25", course: "Coordination Chem (25CHY504)", room: "D205 AB2", type: "Lecture", faculty: "Dr Asha Sathish" },
        { time: "12:25 - 13:15", course: "Quantum Chem (25CHY501)", room: "D105 AB2", type: "Lecture", faculty: "Dr Venkata Ravi Kumar Dharbha" },
        { time: "14:05 - 14:55", course: "Quantum Chem (25CHY501)", room: "D205 AB2", type: "Lecture", faculty: "Dr Venkata Ravi Kumar Dharbha" },
        { time: "14:55 - 15:45", course: "Concepts Inorganic (25CHY502)", room: "D205 AB2", type: "Lecture", faculty: "Dr D Gangadharan" },
        { time: "15:45 - 17:25", course: "Group Theory (25CHY505)", room: "D305 AB2", type: "Lecture", faculty: "Dr Thilagavathy" }
      ]
    },
    {
      day: "Thursday",
      slots: [
        { time: "10:45 - 12:25", course: "Principles Organic (25CHY503)", room: "D205 AB2", type: "Lecture", faculty: "Dr K Elango" },
        { time: "14:55 - 17:25", course: "Group Theory (25CHY505)", room: "D305 AB2", type: "Lecture", faculty: "Dr Thilagavathy" }
      ]
    },
    {
      day: "Friday",
      slots: [
        { time: "08:50 - 09:40", course: "Concepts Inorganic (25CHY502)", room: "D105 AB2", type: "Lecture", faculty: "Dr D Gangadharan" },
        { time: "09:40 - 10:30", course: "Quantum Chem (25CHY501)", room: "D105 AB2", type: "Lecture", faculty: "Dr Venkata Ravi Kumar Dharbha" },
        { time: "11:35 - 12:25", course: "Coordination Chem (25CHY504)", room: "D105 AB2", type: "Lecture", faculty: "Dr Asha Sathish" }
      ]
    }
  ],
  2: [
    {
      day: "Monday",
      slots: [
        { time: "09:40 - 10:30", course: "Cultural Ed (22ADM201)", room: "AB2 D305", type: "Lecture", faculty: "Mr M Pramod Kumar" },
        { time: "10:45 - 11:35", course: "Thermodynamics (25CHY511)", room: "AB2 D305", type: "Lecture", faculty: "Dr Thilagavathy" },
        { time: "11:35 - 12:25", course: "Heterocyclic (25CHY512)", room: "AB2 D305", type: "Lecture", faculty: "Dr N. Pandurangan" },
        { time: "12:25 - 13:15", course: "Organometallic (25CHY515)", room: "AB2 D305", type: "Lecture", faculty: "Dr R Yamuna" },
        { time: "14:05 - 14:55", course: "Spectroscopy (25CHY513)", room: "AB2 D305", type: "Lecture", faculty: "Dr Venkata Ravi Kumar Darbha" },
        { time: "14:55 - 15:45", course: "Reaction Mech (25CHY514)", room: "AB2 D305", type: "Lecture", faculty: "Dr K Elango" }
      ]
    },
    {
      day: "Tuesday",
      slots: [
        { time: "08:50 - 12:25", course: "Advanced Physical Lab (25CHY583)", room: "Chemistry Block", type: "Lab", faculty: "Dr Thilagavathy" },
        { time: "14:05 - 14:55", course: "Chemical Thermodynamics (25CHY511)", room: "AB2 D305", type: "Lecture", faculty: "Dr Thilagavathy" },
        { time: "14:55 - 15:45", course: "Molecular Spectroscopy (25CHY513)", room: "AB2 D305", type: "Lecture", faculty: "Dr Venkata Ravi Kumar Darbha" },
        { time: "15:45 - 16:35", course: "Organometallic Chemistry (25CHY515)", room: "AB2 D305", type: "Lecture", faculty: "Dr R Yamuna" }
      ]
    },
    {
      day: "Wednesday",
      slots: [
        { time: "09:40 - 12:25", course: "Inorganic Quantitative Analysis Lab (25CHY584)", room: "Chemistry Block", type: "Lab", faculty: "Dr Venkata Ravi Kumar Darbha" },
        { time: "14:05 - 14:55", course: "Organometallic Chemistry (25CHY515)", room: "AB2 D305", type: "Lecture", faculty: "Dr R Yamuna" },
        { time: "14:55 - 15:45", course: "Organic Reaction Mechanism (25CHY514)", room: "AB2 D305", type: "Lecture", faculty: "Dr K Elango" }
      ]
    },
    {
      day: "Thursday",
      slots: [
        { time: "08:50 - 09:40", course: "Chemical Thermodynamics (25CHY511)", room: "AB2 D305", type: "Lecture", faculty: "Dr Thilagavathy" },
        { time: "12:25 - 13:15", course: "Organic Reaction Mechanism (25CHY514)", room: "AB2 D305", type: "Lecture", faculty: "Dr K Elango" },
        { time: "14:05 - 14:55", course: "Heterocyclic Chemistry (25CHY512)", room: "AB2 D305", type: "Lecture", faculty: "Dr N. Pandurangan" },
        { time: "14:55 - 15:45", course: "Molecular Spectroscopy (25CHY513)", room: "AB2 D305", type: "Lecture", faculty: "Dr Venkata Ravi Kumar Darbha" }
      ]
    },
    {
      day: "Friday",
      slots: [
        { time: "09:40 - 10:30", course: "Mastery Over Mind (25AVP501)", room: "AB2 D305", type: "Lecture", faculty: "Dr T S Boopathi" },
        { time: "10:45 - 11:35", course: "Molecular Spectroscopy (25CHY513)", room: "AB2 D305", type: "Lecture", faculty: "Dr Venkata Ravi Kumar Darbha" },
        { time: "12:25 - 13:15", course: "Organic Reaction Mechanism (25CHY514)", room: "AB2 D305", type: "Lecture", faculty: "Dr K Elango" },
        { time: "14:05 - 14:55", course: "Heterocyclic Chemistry (25CHY512)", room: "AB2 D305", type: "Lecture", faculty: "Dr N. Pandurangan" },
        { time: "14:55 - 15:45", course: "Chemical Thermodynamics (25CHY511)", room: "AB2 D305", type: "Lecture", faculty: "Dr Thilagavathy" }
      ]
    }
  ]
};
