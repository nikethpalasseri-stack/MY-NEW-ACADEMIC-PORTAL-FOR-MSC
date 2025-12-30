
import React, { useState, useMemo, useEffect } from 'react';
// Corrected import name ACADEMIC_CAL_EVENTS to ACADEMIC_CALENDAR_EVENTS
import { SYLLABUS_DATA, TIMETABLES, STUDENT_INFO, ACADEMIC_CALENDAR_EVENTS } from './data';
import { Course, Semester, CalendarEvent } from './types';
import CourseCard from './components/CourseCard';
import CourseModal from './components/CourseModal';
import PerformanceChart from './components/PerformanceChart';
import AcademicCalendar from './components/AcademicCalendar';
import Login from './components/Login';
import { 
  Atom, 
  Menu, 
  X, 
  LayoutDashboard, 
  Library, 
  Compass,
  GraduationCap,
  Sparkles, 
  ChevronRight,
  FlaskConical,
  Layers,
  User,
  Calendar,
  Award,
  BookOpen,
  MapPin,
  Clock,
  TrendingUp,
  Download,
  Fingerprint,
  Home,
  LogOut,
  ChevronDown,
  CircleCheck,
  ArrowRight,
  Lock,
  LayoutGrid,
  ListTodo,
  Table as TableIcon,
  Zap,
  Microscope,
  Beaker,
  Presentation,
  Flame,
  Dna,
  Trophy,
  Activity,
  Percent,
  BarChart3,
  PieChart,
  Filter,
  Info,
  Medal,
  Target,
  FileText,
  ClipboardList,
  Search,
  Kanban,
  Columns,
  Rows,
  AlignLeft,
  CalendarDays,
  ShieldCheck,
  ExternalLink,
  Quote,
  Binary,
  Microscope as MicroscopeIcon,
  Star,
  CheckCircle2,
  AlertCircle,
  Hash,
  School,
  Settings,
  HelpCircle,
  Globe,
  Bell,
  MessageSquareQuote,
  LifeBuoy,
  Timer,
  CheckCircle
} from 'lucide-react';

type TabType = 'home' | 'bio' | 'syllabus' | 'schedule' | 'results' | 'calendar';
type TimetableLayout = 'grid' | 'timeline' | 'daily' | 'list';
type ResultsLayout = 'dashboard' | 'table' | 'grid' | 'report';

export const getSubjectStyle = (name: string = "") => {
  const n = name.toLowerCase();
  if (n.includes('organic')) return { domain: 'Organic', color: 'rose', bg: 'bg-rose-50', light: 'bg-rose-50', text: 'text-rose-600', shadow: 'shadow-rose-500/20', border: 'border-rose-100', icon: <Flame className="w-3.5 h-3.5" /> };
  if (n.includes('inorganic')) return { domain: 'Inorganic', color: 'blue', bg: 'bg-blue-500', light: 'bg-blue-50', text: 'text-blue-600', shadow: 'shadow-blue-500/20', border: 'border-blue-100', icon: <Atom className="w-3.5 h-3.5" /> };
  if (n.includes('coordination') || n.includes('organometallic')) return { domain: 'Structural', color: 'cyan', bg: 'bg-cyan-500', light: 'bg-cyan-50', text: 'text-cyan-600', shadow: 'shadow-cyan-500/20', border: 'border-cyan-100', icon: <Layers className="w-3.5 h-3.5" /> };
  if (n.includes('physical') || n.includes('thermo')) return { domain: 'Physical', color: 'violet', bg: 'bg-violet-500', light: 'bg-violet-50', text: 'text-violet-600', shadow: 'shadow-violet-500/20', border: 'border-violet-100', icon: <Zap className="w-3.5 h-3.5" /> };
  if (n.includes('quantum')) return { domain: 'Physics', color: 'fuchsia', bg: 'bg-fuchsia-500', light: 'bg-fuchsia-50', text: 'text-fuchsia-600', shadow: 'shadow-fuchsia-500/20', border: 'border-fuchsia-100', icon: <Activity className="w-3.5 h-3.5" /> };
  if (n.includes('spectroscopy') || n.includes('analytical')) return { domain: 'Analytical', color: 'amber', bg: 'bg-amber-500', light: 'bg-amber-50', text: 'text-amber-600', shadow: 'shadow-amber-500/20', border: 'border-amber-100', icon: <Search className="w-3.5 h-3.5" /> };
  if (n.includes('group theory')) return { domain: 'Mathematical', color: 'indigo', bg: 'bg-indigo-500', light: 'bg-indigo-50', text: 'text-indigo-600', shadow: 'shadow-indigo-500/20', border: 'border-indigo-100', icon: <Compass className="w-3.5 h-3.5" /> };
  if (n.includes('lab')) return { domain: 'Laboratory', color: 'emerald', bg: 'bg-emerald-500', light: 'bg-emerald-50', text: 'text-emerald-600', shadow: 'shadow-emerald-500/20', border: 'border-emerald-100', icon: <Microscope className="w-3.5 h-3.5" /> };
  if (n.includes('bio-inorganic') || n.includes('natural')) return { domain: 'Biological', color: 'lime', bg: 'bg-lime-500', light: 'bg-lime-50', text: 'text-lime-600', shadow: 'shadow-lime-500/20', border: 'border-lime-100', icon: <Dna className="w-3.5 h-3.5" /> };
  if (n.includes('green') || n.includes('sustainable')) return { domain: 'Eco', color: 'teal', bg: 'bg-teal-500', light: 'bg-teal-50', text: 'text-teal-600', shadow: 'shadow-teal-500/20', border: 'border-teal-100', icon: <Flame className="w-3.5 h-3.5" /> };
  return { domain: 'General', color: 'slate', bg: 'bg-slate-500', light: 'bg-slate-50', text: 'text-slate-600', shadow: 'shadow-slate-500/20', border: 'border-slate-100', icon: <Presentation className="w-3.5 h-3.5" /> };
};

export const getGradeStyle = (grade: string = "") => {
  const g = grade.toUpperCase();
  if (g === 'O' || g === 'A+' || g === 'A') return { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', ring: 'ring-emerald-500/20', label: 'Excellent', mastery: 95 };
  if (g === 'B+') return { text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100', ring: 'ring-amber-500/20', label: 'Strong', mastery: 80 };
  if (g === 'B') return { text: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-200', ring: 'ring-slate-500/10', label: 'Good', mastery: 70 };
  if (g === 'C' || g === 'P') return { text: 'text-slate-500', bg: 'bg-slate-100', border: 'border-slate-200', ring: 'ring-slate-300/10', label: 'Pass', mastery: 50 };
  if (g === 'F') return { text: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100', ring: 'ring-rose-500/20', label: 'Fail', mastery: 0 };
  return { text: 'text-slate-400', bg: 'bg-slate-50', border: 'border-slate-100', ring: 'ring-transparent', label: 'Pending', mastery: 0 };
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('isMscAuth') === 'true';
  });
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [activeSemester, setActiveSemester] = useState(2); // Current semester
  const [resultsLayout, setResultsLayout] = useState<ResultsLayout>('dashboard');
  const [timetableSemester, setTimetableSemester] = useState(2);
  const [timetableLayout, setTimetableLayout] = useState<TimetableLayout>('grid');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);

  const currentSemester = SYLLABUS_DATA.semesters.find(s => s.id === activeSemester);
  const currentTimetable = TIMETABLES[timetableSemester] || [];

  const handleLogout = () => {
    localStorage.removeItem('isMscAuth');
    setIsAuthenticated(false);
  };

  const upcomingEvents = useMemo(() => {
    const today = new Date();
    // Using ACADEMIC_CALENDAR_EVENTS correctly
    return ACADEMIC_CALENDAR_EVENTS
      .filter(e => new Date(e.date) >= today)
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(0, 3);
  }, []);

  const todayClasses = useMemo(() => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const todayName = days[new Date().getDay()];
    return currentTimetable.find(d => d.day === todayName)?.slots || [];
  }, [currentTimetable]);

  const renderHome = () => (
    <div className="animate-slide-up space-y-8 md:space-y-12 pb-24">
      {/* Hero Welcome Section */}
      <div className="bg-[#0f172a] rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-slate-900/60 border border-slate-800 transition-all duration-700 hover:shadow-rose-900/20">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none animate-[spin_120s_linear_infinite] hidden md:block">
          <Atom className="w-64 h-64 text-rose-500" />
        </div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-600/5 rounded-full blur-[120px]"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-8 space-y-6 md:space-y-10">
            <div className="flex flex-wrap items-center gap-3 md:gap-4 animate-fade-in">
              <span className="bg-blue-600/20 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-900/10">Active Post-Graduate</span>
              <div className="flex items-center gap-2 text-slate-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest bg-slate-500/10 border border-slate-500/20 px-4 py-1.5 rounded-full">
                <ShieldCheck className="w-3 md:w-3.5 h-3 md:h-3.5" /> Identity Verified
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] ml-1">Welcome back, Niketh</p>
              <h2 className="text-4xl md:text-6xl xl:text-8xl font-black tracking-tighter mb-4 leading-tight md:leading-none">
                <span className="text-white">NIKETH</span> <span className="text-rose-600">P</span>
              </h2>
              
              <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4">
                <div className="w-full md:w-auto flex items-center gap-4 bg-white/5 backdrop-blur-xl px-5 py-3 md:px-6 md:py-4 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 group hover:border-rose-500/50 transition-all duration-300 shadow-xl">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-rose-600/10 flex items-center justify-center text-rose-500 border border-rose-500/20">
                    <Fingerprint className="w-4 md:w-5 h-4 md:h-5" />
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-widest mb-0.5">Registration Identifier</p>
                    <p className="text-sm md:text-lg font-black fira-font tracking-tighter text-white">{STUDENT_INFO.regNo}</p>
                  </div>
                </div>

                <div className="w-full md:w-auto flex items-center gap-4 bg-white/5 backdrop-blur-xl px-5 py-3 md:px-6 md:py-4 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 group hover:border-blue-500/50 transition-all duration-300 shadow-xl">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 border border-rose-500/20">
                    <GraduationCap className="w-4 md:w-5 h-4 md:h-5" />
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-widest mb-0.5">Academic Program</p>
                    <p className="text-sm md:text-lg font-black tracking-tighter text-white uppercase">{STUDENT_INFO.program}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative group w-full max-w-[340px]">
              <div className="absolute inset-0 bg-rose-600 rounded-[3rem] md:rounded-[4rem] blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity"></div>
              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-[3rem] md:rounded-[4rem] text-center w-full relative z-10 shadow-3xl transition-all duration-700 hover:scale-[1.02] hover:border-rose-500/30">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4">Academic Velocity</p>
                <h4 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-white">{STUDENT_INFO.currentCgpa}</h4>
                <p className="text-[11px] font-black uppercase text-blue-400 bg-blue-500/10 px-6 py-2 rounded-full border border-blue-500/20 inline-flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5" /> {STUDENT_INFO.standing}
                </p>
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-8">Cumulative GPA 0-10</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 md:gap-10">
        <div className="xl:col-span-8 space-y-8 md:space-y-12">
          
          {/* Section: Today's Academic Schedule */}
          <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl overflow-hidden group">
            <div className="flex items-center justify-between mb-8 md:mb-12">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-rose-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl shadow-rose-900/20">
                    <Clock className="w-5 md:w-6 h-5 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter uppercase leading-none mb-1">Today's Schedule</h3>
                    <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                  </div>
               </div>
               <button onClick={() => setActiveTab('schedule')} className="text-[10px] font-black uppercase tracking-widest text-rose-600 hover:bg-rose-50 px-5 py-2 rounded-full transition-colors hidden sm:block">Full Timetable</button>
            </div>

            {todayClasses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {todayClasses.map((slot, i) => {
                  const style = getSubjectStyle(slot.course);
                  return (
                    <div key={i} className={`p-6 md:p-8 rounded-[2rem] border ${style.border} bg-slate-50 transition-all hover:bg-white hover:shadow-xl group/card flex gap-6 items-center`}>
                       <div className={`w-14 h-14 rounded-2xl ${style.bg} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                          {style.icon}
                       </div>
                       <div className="min-w-0">
                          <p className="text-[10px] font-black text-slate-400 uppercase mb-1">{slot.time}</p>
                          <h4 className="text-base md:text-lg font-black text-slate-800 uppercase tracking-tight truncate group-hover/card:text-rose-600 transition-colors">{slot.course}</h4>
                          <p className="text-[9px] font-bold text-slate-500 uppercase mt-1 truncate">{slot.faculty || 'Senior Faculty'}</p>
                       </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-12 text-center bg-slate-50 rounded-[2rem] border border-dashed border-slate-200">
                <Sparkles className="w-10 h-10 text-rose-300 mx-auto mb-4" />
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest">No classes scheduled for today. Enjoy your research day!</p>
              </div>
            )}
          </section>

          {/* Section: Current Semester Snapshot (Sem 02) */}
          <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl overflow-hidden group">
            <div className="flex items-center justify-between mb-8 md:mb-12">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-900/20">
                    <BookOpen className="w-5 md:w-6 h-5 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter uppercase leading-none mb-1">Current Modules</h3>
                    <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Semester 02 Active Inventory</p>
                  </div>
               </div>
               <button onClick={() => setActiveTab('syllabus')} className="text-[10px] font-black uppercase tracking-widest text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-full transition-colors hidden sm:block">Full Syllabus</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SYLLABUS_DATA.semesters.find(s => s.id === 2)?.courses.slice(0, 6).map((course, i) => {
                const style = getSubjectStyle(course.title);
                return (
                  <div key={i} className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-blue-200 hover:bg-white transition-all group/item shadow-sm hover:shadow-lg">
                    <div className={`w-8 h-8 rounded-lg ${style.bg} text-white flex items-center justify-center mb-4 shadow-md`}>
                      {style.icon}
                    </div>
                    <p className="text-[8px] font-black text-blue-500 uppercase mb-1">{course.code}</p>
                    <h5 className="text-sm font-black text-slate-800 uppercase tracking-tight leading-tight group-hover/item:text-blue-600 transition-colors mb-3 line-clamp-2">{course.title}</h5>
                    <div className="flex items-center gap-2 mt-auto">
                      <div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-[7px] font-black text-slate-500">
                        <User className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase truncate">{course.faculty || 'Department Faculty'}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Program Overview & Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-rose-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-rose-900/20 group hover:scale-[1.02] transition-transform">
                <Target className="w-8 h-8 mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-3xl font-black tracking-tighter mb-2">42%</h4>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Degree Progress</p>
                <div className="w-full h-1.5 bg-white/20 rounded-full mt-6 overflow-hidden">
                   <div className="h-full bg-white w-[42%]"></div>
                </div>
             </div>
             <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-xl shadow-slate-900/40 group hover:scale-[1.02] transition-transform">
                <CheckCircle className="w-8 h-8 mb-6 opacity-40 group-hover:opacity-100 transition-opacity text-emerald-500" />
                <h4 className="text-3xl font-black tracking-tighter mb-2">08</h4>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Completed Credits</p>
                <p className="text-[8px] font-bold text-slate-500 mt-4 uppercase">Target: 84 Credits</p>
             </div>
             <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl group hover:scale-[1.02] transition-transform">
                <FlaskConical className="w-8 h-8 mb-6 opacity-40 group-hover:opacity-100 transition-opacity text-blue-600" />
                <h4 className="text-3xl font-black tracking-tighter mb-2 text-slate-900">120h</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Lab Residency</p>
                <div className="flex items-center gap-2 mt-4">
                   <TrendingUp className="w-3 h-3 text-emerald-500" />
                   <span className="text-[9px] font-bold text-emerald-600">+12% vs last sem</span>
                </div>
             </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="xl:col-span-4 space-y-8 md:space-y-12">
          
          {/* Section: Academic Milestone Roadmap */}
          <section className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-xl group hover:border-rose-100 transition-colors">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-10 h-10 bg-rose-600 rounded-[1.25rem] flex items-center justify-center text-white shadow-xl shadow-rose-900/20">
                  <CalendarDays className="w-5 h-5" />
               </div>
               <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Event Roadmap</h4>
            </div>
            
            <div className="space-y-6 relative pl-4">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-slate-100"></div>
              {upcomingEvents.map((event, i) => (
                <div key={i} className="relative group/event animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className={`absolute left-[-1.25rem] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-white shadow-md ${i === 0 ? 'bg-rose-600 scale-125' : 'bg-slate-300'}`}></div>
                  <p className="text-[9px] font-black text-rose-500 uppercase tracking-widest mb-1">{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                  <h5 className="text-sm font-black text-slate-800 uppercase tracking-tight group-hover/event:text-rose-600 transition-colors leading-tight">{event.particulars}</h5>
                  <p className="text-[8px] font-bold text-slate-400 uppercase mt-1">{event.type}</p>
                </div>
              ))}
            </div>

            <button onClick={() => setActiveTab('calendar')} className="w-full flex items-center justify-center gap-3 mt-10 p-5 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 hover:bg-rose-600 hover:text-white transition-all shadow-sm">
                View Calendar <ChevronRight className="w-3 h-3" />
            </button>
          </section>

          {/* Section: Quick Tools */}
          <section className="bg-[#1e293b] rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <Sparkles className="w-24 h-24 text-white" />
            </div>
            <h4 className="text-lg font-black uppercase tracking-tighter mb-8 relative z-10">Resource Hub</h4>
            <div className="grid grid-cols-2 gap-4 relative z-10">
               {[
                 { label: 'Study Notes', icon: ClipboardList, tab: 'syllabus' },
                 { label: 'Lab Reports', icon: Beaker, tab: 'schedule' },
                 { label: 'Certificates', icon: Award, tab: 'results' },
                 { label: 'E-Resources', icon: Library, tab: 'bio' }
               ].map((tool, i) => (
                 <button 
                  key={i} 
                  onClick={() => setActiveTab(tool.tab as any)}
                  className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-rose-500/50 transition-all text-left"
                 >
                    <tool.icon className="w-5 h-5 text-rose-500 mb-4" />
                    <p className="text-[9px] font-black uppercase tracking-widest">{tool.label}</p>
                 </button>
               ))}
            </div>
          </section>

          {/* Profile Card Snippet */}
          <section className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-xl">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 border border-slate-200">
                   <User className="w-6 h-6" />
                </div>
                <div>
                   <h5 className="text-sm font-black text-slate-900 uppercase tracking-tight">{STUDENT_INFO.name}</h5>
                   <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Master of Science Candidate</p>
                </div>
             </div>
             <p className="text-xs text-slate-500 leading-relaxed italic mb-8">"Academic focus on Structural Dynamics and Green Chemistry for the 2025 cycle."</p>
             <div className="space-y-3">
                <div className="flex justify-between items-center text-[9px] font-black uppercase text-slate-400">
                   <span>Registry Standing</span>
                   <span className="text-emerald-500">GOOD</span>
                </div>
                <div className="w-full h-1 bg-slate-50 rounded-full overflow-hidden">
                   <div className="h-full bg-emerald-500 w-[75%]"></div>
                </div>
             </div>
          </section>

        </div>
      </div>
    </div>
  );

  const renderResults = () => {
    const selectedSem = SYLLABUS_DATA.semesters.find(s => s.id === activeSemester) || SYLLABUS_DATA.semesters[0];

    const resultsLayoutOptions: { id: ResultsLayout; label: string; icon: any }[] = [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { id: 'table', label: 'Registry', icon: TableIcon },
      { id: 'grid', label: 'Grid', icon: LayoutGrid },
      { id: 'report', label: 'Report', icon: FileText },
    ];

    const totalCredits = selectedSem.courses.reduce((acc, c) => acc + (typeof c.credits === 'number' ? c.credits : 0), 0);

    return (
      <div className="animate-slide-up space-y-8 md:space-y-12 pb-24">
        <div className="bg-white rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-10 border border-slate-200 shadow-xl overflow-hidden relative">
           <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none hidden md:block">
              <ShieldCheck className="w-32 h-32 text-blue-600" />
           </div>
           
           <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-900/20">Verified Record</span>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">AY 2025-2027</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter flex items-center gap-4 leading-tight">
                  <Medal className="w-8 h-8 text-slate-800 shrink-0" />
                  Academic Registry
                </h2>
              </div>

              <div className="flex bg-slate-100 p-1.5 rounded-2xl md:rounded-[2rem] border border-slate-200 shadow-inner w-full md:w-auto overflow-x-auto no-scrollbar">
                {SYLLABUS_DATA.semesters.map(sem => (
                  <button 
                    key={sem.id}
                    onClick={() => setActiveSemester(sem.id)}
                    className={`flex-1 md:flex-none px-6 md:px-8 py-3 rounded-xl md:rounded-[1.5rem] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-500 whitespace-nowrap ${activeSemester === sem.id ? 'bg-white text-blue-600 shadow-xl border border-blue-100' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    Sem 0{sem.id}
                  </button>
                ))}
              </div>
           </div>
        </div>

        {selectedSem.status === 'published' ? (
          <div className="animate-scale-in space-y-8 md:space-y-12">
            <div className="flex flex-wrap items-center gap-2 md:gap-4 bg-slate-200/50 p-1.5 rounded-2xl md:rounded-[2.5rem] border border-slate-300 w-full md:w-fit overflow-x-auto no-scrollbar">
               {resultsLayoutOptions.map(opt => (
                 <button
                   key={opt.id}
                   onClick={() => setResultsLayout(opt.id)}
                   className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 rounded-xl md:rounded-[2rem] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex-1 md:flex-none whitespace-nowrap ${resultsLayout === opt.id ? 'bg-white text-blue-600 shadow-lg border border-blue-100' : 'text-slate-500 hover:text-slate-800'}`}
                 >
                   <opt.icon className="w-3.5 h-3.5" />
                   {opt.label}
                 </button>
               ))}
            </div>

            {resultsLayout === 'dashboard' && (
              <div className="space-y-8 md:space-y-12">
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {[
                      { label: 'Term SGPA', value: selectedSem.sgpa, icon: Award, color: 'blue' },
                      { label: 'Credits Earned', value: totalCredits, icon: Hash, color: 'slate' },
                      { label: 'Standing', value: 'First Class', icon: Star, color: 'amber' },
                      { label: 'Registry Status', value: 'Active', icon: CheckCircle2, color: 'emerald' }
                    ].map((stat, i) => (
                      <div key={i} className={`bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-xl group hover:shadow-2xl transition-all duration-500`}>
                          <div className={`w-10 h-10 bg-${stat.color}-500 rounded-xl flex items-center justify-center text-white mb-6 md:mb-8 shadow-lg`}>
                            <stat.icon className="w-5 h-5" />
                          </div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
                          <h4 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">{stat.value}</h4>
                      </div>
                    ))}
                 </div>
                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
                    <div className="lg:col-span-8 w-full overflow-hidden">
                       <PerformanceChart semesters={SYLLABUS_DATA.semesters} />
                    </div>
                    <div className="lg:col-span-4 bg-[#1e293b] rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group">
                       <h4 className="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                          <ShieldCheck className="w-5 h-5 text-blue-500" />
                          Insights
                       </h4>
                       <div className="space-y-6">
                          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                             <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Observation</p>
                             <p className="text-sm font-medium text-slate-300 leading-relaxed italic">"Internal assessments for Inorganic lab show 98% procedural precision."</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            )}

            {resultsLayout === 'table' && (
              <div className="bg-white rounded-[2rem] md:rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden">
                <div className="p-6 md:p-10 border-b border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50/50">
                   <h4 className="text-lg font-black text-slate-900 uppercase tracking-tighter">Transcript Registry - Sem 0{selectedSem.id}</h4>
                   <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors">
                      <Download className="w-4 h-4" /> Download Statement
                   </button>
                </div>
                <div className="overflow-x-auto">
                   <table className="w-full text-left min-w-[600px]">
                      <thead className="bg-white border-b border-slate-200">
                         <tr className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                            <th className="py-6 md:py-8 px-6 md:px-12">Registry Code</th>
                            <th className="py-6 md:py-8 px-6 md:px-8">Course Module</th>
                            <th className="py-6 md:py-8 px-6 md:px-8 text-center">Credits</th>
                            <th className="py-6 md:py-8 px-6 md:px-12 text-right">Term Grade</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                         {selectedSem.courses.map((course, idx) => (
                            <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                               <td className="py-6 md:py-8 px-6 md:px-12 font-mono font-black text-slate-400 text-xs">{course.code}</td>
                               <td className="py-6 md:py-8 px-6 md:px-8">
                                  <p className="font-black text-slate-900 text-base md:text-lg tracking-tighter uppercase group-hover:text-blue-600 transition-colors">{course.title}</p>
                                  <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">{course.faculty}</p>
                               </td>
                               <td className="py-6 md:py-8 px-6 md:px-8 text-center font-black text-slate-900 text-lg">{course.credits}</td>
                               <td className="py-6 md:py-8 px-6 md:px-12 text-right">
                                  <div className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl text-lg md:text-xl font-black shadow-lg border-2 ${getGradeStyle(course.grade).bg} ${getGradeStyle(course.grade).text} ${getGradeStyle(course.grade).border}`}>
                                     {course.grade}
                                  </div>
                               </td>
                            </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
              </div>
            )}

            {resultsLayout === 'grid' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                 {selectedSem.courses.map((course, idx) => {
                    const style = getSubjectStyle(course.title);
                    const grade = getGradeStyle(course.grade);
                    return (
                       <div key={idx} className={`bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 border-2 ${style.border} shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500`}>
                          <div className="flex justify-between items-start mb-8 md:mb-10">
                             <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-2xl ${style.bg}`}>
                                {style.icon}
                             </div>
                             <div className="text-right">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Grade</p>
                                <div className={`text-3xl md:text-4xl font-black ${grade.text}`}>{course.grade}</div>
                             </div>
                          </div>
                          <h4 className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter uppercase mb-4 leading-tight group-hover:text-blue-600 transition-colors">{course.title}</h4>
                          <div className="space-y-4 pt-4 border-t border-slate-50">
                             <div className="flex justify-between items-center text-[10px] font-black uppercase">
                                <span className="text-slate-400">Mastery</span>
                                <span className={grade.text}>{grade.mastery}%</span>
                             </div>
                             <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className={`h-full ${style.bg} transition-all duration-1000`} style={{ width: `${grade.mastery}%` }}></div>
                             </div>
                          </div>
                       </div>
                    );
                 })}
              </div>
            )}

            {resultsLayout === 'report' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
                 <div className="lg:col-span-8 bg-white rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-12 border border-slate-100 shadow-xl space-y-6 md:space-y-8">
                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Domain Mastery Matrix</h4>
                    {selectedSem.courses.map((c, i) => (
                       <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-slate-50 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 group/item hover:bg-white hover:shadow-lg transition-all">
                          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl text-white flex items-center justify-center shadow-lg ${getSubjectStyle(c.title).bg}`}>
                             {getSubjectStyle(c.title).icon}
                          </div>
                          <div className="flex-1 w-full">
                             <h6 className="text-base md:text-lg font-black text-slate-900 uppercase tracking-tight group-hover/item:text-blue-600 transition-colors">{c.title}</h6>
                             <div className="mt-3 flex items-center gap-4">
                                <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                   <div className={`h-full ${getSubjectStyle(c.title).bg}`} style={{ width: `${getGradeStyle(c.grade).mastery}%` }}></div>
                                </div>
                                <span className="text-[10px] font-black text-slate-400 shrink-0">{getGradeStyle(c.grade).mastery}%</span>
                             </div>
                          </div>
                          <div className={`text-2xl font-black shrink-0 self-end sm:self-center ${getGradeStyle(c.grade).text}`}>{c.grade}</div>
                       </div>
                    ))}
                 </div>
                 <div className="lg:col-span-4 space-y-8 md:space-y-10">
                    <div className="p-8 md:p-10 bg-white rounded-[2rem] md:rounded-[3.5rem] border border-slate-100 shadow-xl group hover:border-blue-100 transition-colors">
                       <Info className="w-7 h-7 text-blue-500 mb-6" />
                       <h6 className="text-lg font-black text-slate-900 uppercase tracking-tighter mb-2">Faculty Feedback</h6>
                       <p className="text-sm text-slate-500 leading-relaxed font-medium italic">"Stable academic trajectory. Nicola's focus during lab sessions is commendable."</p>
                       <div className="mt-8 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-black text-[10px] text-slate-500">ASC</div>
                          <div>
                             <p className="text-[10px] font-black text-slate-900 uppercase">Prof. R. Sharma</p>
                             <p className="text-[9px] font-bold text-slate-400 uppercase">Dept. Advisor</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-12 animate-slide-up">
            <div className="bg-white rounded-[2rem] md:rounded-[4rem] p-16 md:p-24 border border-slate-100 shadow-xl flex flex-col items-center text-center">
               <Lock className="w-20 md:w-32 h-20 md:h-32 text-rose-600 opacity-5 mb-8" />
               <Clock className="w-6 h-6 text-rose-500 animate-pulse mb-6" />
               <h4 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase mb-6">Results Awaited</h4>
               <p className="text-slate-400 max-w-lg font-medium leading-relaxed text-base md:text-lg italic">
                 Semester 0{selectedSem.id} assessments are pending final validation.
               </p>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderTimetable = () => {
    const layoutOptions: { id: TimetableLayout; label: string; icon: any }[] = [
      { id: 'grid', label: 'Grid', icon: LayoutGrid },
      { id: 'timeline', label: 'Timeline', icon: Rows },
      { id: 'daily', label: 'Daily', icon: Columns },
      { id: 'list', label: 'Master', icon: AlignLeft }
    ];

    return (
      <div className="animate-slide-up space-y-8 md:space-y-12 pb-24">
        <div className="bg-white rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-10 border border-slate-200 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none hidden md:block">
            <Clock className="w-32 h-32 text-rose-600" />
          </div>
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 relative z-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 bg-rose-600 text-white rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-lg shadow-rose-900/20">Active Schedule</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter flex items-center gap-4 leading-tight">
                <Calendar className="w-8 h-8 text-slate-800 shrink-0" />
                Academic Timetable for MSc Chemistry
              </h2>
            </div>
            <div className="flex bg-slate-100 p-1.5 rounded-2xl md:rounded-[2rem] border border-slate-200 shadow-inner w-full md:w-auto overflow-x-auto no-scrollbar">
              {[1, 2].map(sem => (
                <button 
                  key={sem}
                  onClick={() => setTimetableSemester(sem)}
                  className={`flex-1 md:flex-none px-6 md:px-8 py-3 rounded-xl md:rounded-[1.5rem] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-500 whitespace-nowrap ${timetableSemester === sem ? 'bg-white text-rose-600 shadow-xl border border-blue-100' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  Sem 0{sem}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 md:gap-4 bg-slate-100/50 p-1.5 rounded-2xl md:rounded-[2.5rem] border border-slate-200 w-full md:w-fit overflow-x-auto no-scrollbar">
           {layoutOptions.map(opt => (
             <button
               key={opt.id}
               onClick={() => setTimetableLayout(opt.id)}
               className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 rounded-xl md:rounded-[2rem] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex-1 md:flex-none whitespace-nowrap ${timetableLayout === opt.id ? 'bg-white text-rose-600 shadow-md border border-rose-100' : 'text-slate-500 hover:text-slate-800'}`}
             >
               <opt.icon className="w-3.5 h-3.5" />
               {opt.label}
             </button>
           ))}
        </div>

        <div className="animate-scale-in">
           {timetableLayout === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
                 {currentTimetable.map((day, dIdx) => (
                    <div key={dIdx} className="space-y-4 md:space-y-6">
                       <div className="bg-slate-900 text-white p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] text-center shadow-lg">
                          <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.2em]">{day.day}</h3>
                       </div>
                       <div className="space-y-4">
                          {day.slots.map((slot, sIdx) => {
                             const style = getSubjectStyle(slot.course);
                             return (
                                <div key={sIdx} className={`p-5 md:p-6 bg-white rounded-[1.5rem] md:rounded-[2rem] border ${style.border} shadow-sm hover:shadow-xl transition-all group`}>
                                   <div className="flex items-center gap-3 mb-3 md:mb-4">
                                      <div className={`p-1.5 md:p-2 rounded-lg text-white ${style.bg}`}>{style.icon}</div>
                                      <span className={`text-[8px] md:text-[9px] font-black uppercase tracking-widest ${style.text}`}>{slot.type}</span>
                                   </div>
                                   <h4 className="text-xs md:text-sm font-black text-slate-800 uppercase tracking-tight leading-tight mb-3 md:mb-4 group-hover:text-rose-600 transition-colors">{slot.course}</h4>
                                   <div className="flex items-center gap-2 text-[8px] font-bold text-slate-400 uppercase">
                                      <Clock className="w-3 h-3" /> {slot.time}
                                   </div>
                                </div>
                             );
                          })}
                       </div>
                    </div>
                 ))}
              </div>
           )}

           {timetableLayout === 'timeline' && (
              <div className="space-y-10 md:space-y-16">
                 {currentTimetable.map((day, dIdx) => (
                    <div key={dIdx} className="relative pl-8 md:pl-12 animate-slide-up">
                       <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200"></div>
                       <div className="absolute left-[-0.75rem] md:left-[-1.5rem] top-0 bg-slate-900 text-white w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl flex items-center justify-center text-[8px] md:text-[10px] font-black uppercase shadow-xl z-10">
                          {day.day.substring(0, 3)}
                       </div>
                       <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-widest mb-6 md:mb-10">{day.day}</h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                          {day.slots.map((slot, sIdx) => {
                             const style = getSubjectStyle(slot.course);
                             return (
                                <div key={sIdx} className={`p-6 md:p-8 rounded-2xl md:rounded-[3rem] bg-white border ${style.border} flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center group shadow-sm hover:shadow-2xl transition-all`}>
                                   <div className="text-left sm:text-center min-w-[100px] border-b sm:border-b-0 sm:border-r border-slate-100 pb-3 sm:pb-0 sm:pr-8 w-full sm:w-auto">
                                      <p className="text-base md:text-lg font-black text-slate-800 mb-1">{slot.time.split(' - ')[0]}</p>
                                      <p className="text-[9px] font-bold text-slate-400 uppercase">Start</p>
                                   </div>
                                   <div className="flex-1">
                                      <div className={`p-1.5 w-fit rounded-lg text-white mb-2 ${style.bg}`}>{style.icon}</div>
                                      <h4 className="text-base md:text-lg font-black text-slate-900 uppercase tracking-tighter group-hover:text-rose-600 transition-colors leading-tight">{slot.course}</h4>
                                      <p className="text-[10px] font-bold text-rose-500 uppercase mt-2">{slot.faculty}</p>
                                   </div>
                                </div>
                             );
                          })}
                       </div>
                    </div>
                 ))}
              </div>
           )}

           {timetableLayout === 'daily' && (
              <div className="space-y-8 md:space-y-12">
                 <div className="flex justify-start md:justify-center gap-2 md:gap-4 flex-nowrap overflow-x-auto no-scrollbar pb-2">
                    {currentTimetable.map((day, i) => (
                       <button
                          key={i}
                          onClick={() => setSelectedDayIdx(i)}
                          className={`flex-shrink-0 px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-[2rem] text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 border whitespace-nowrap ${
                             selectedDayIdx === i ? 'bg-rose-600 text-white border-rose-600 shadow-xl' : 'bg-white text-slate-400 border-slate-200'
                          }`}
                       >
                          {day.day}
                       </button>
                    ))}
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {currentTimetable[selectedDayIdx].slots.map((slot, sIdx) => {
                       const style = getSubjectStyle(slot.course);
                       return (
                          <div key={sIdx} className={`bg-white rounded-[2rem] md:rounded-[4rem] p-8 md:p-12 border ${style.border} shadow-xl group hover:shadow-2xl transition-all animate-slide-up`}>
                             <div className="flex flex-col sm:flex-row justify-between items-start mb-8 md:mb-10 gap-4">
                                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[2rem] flex items-center justify-center text-white text-2xl md:text-3xl shadow-2xl ${style.bg}`}>
                                   {style.icon}
                                </div>
                                <div className="text-left sm:text-right">
                                   <div className="bg-slate-900 text-white px-5 py-2 rounded-xl text-[9px] md:text-[10px] font-black uppercase mb-3 inline-block">
                                      {slot.time}
                                   </div>
                                   <p className={`text-[10px] md:text-[11px] font-black uppercase tracking-widest ${style.text}`}>{slot.type} Session</p>
                                </div>
                             </div>
                             <h4 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter mb-6 md:mb-8 group-hover:text-rose-600 transition-colors leading-tight">{slot.course}</h4>
                             <div className="flex items-center gap-4 md:gap-6 p-6 md:p-8 bg-slate-50 rounded-2xl md:rounded-[2.5rem] border border-slate-100">
                                <User className="w-6 md:w-7 h-6 md:h-7 text-rose-600" />
                                <div>
                                   <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase">Assigned Faculty</p>
                                   <p className="text-xl md:text-2xl font-black text-slate-800 uppercase leading-none mt-1">{slot.faculty}</p>
                                </div>
                             </div>
                          </div>
                       );
                    })}
                 </div>
              </div>
           )}

           {timetableLayout === 'list' && (
              <div className="bg-white rounded-[2rem] md:rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden">
                 <div className="overflow-x-auto">
                   <table className="w-full text-left min-w-[700px]">
                      <thead className="bg-slate-50">
                         <tr className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                            <th className="py-6 md:py-8 px-8 md:px-12">Academic Day</th>
                            <th className="py-6 md:py-8 px-6 md:px-8">Session Period</th>
                            <th className="py-6 md:py-8 px-6 md:px-8">Course Module</th>
                            <th className="py-6 md:py-8 px-6 md:px-8 text-right">Venue</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                         {currentTimetable.flatMap((day, dIdx) => 
                            day.slots.map((slot, sIdx) => (
                               <tr key={`${dIdx}-${sIdx}`} className="group hover:bg-slate-50/50 transition-colors">
                                  <td className="py-6 md:py-8 px-8 md:px-12">{sIdx === 0 ? <span className="bg-slate-900 text-white px-4 md:px-5 py-2 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase whitespace-nowrap">{day.day}</span> : null}</td>
                                  <td className="py-6 md:py-8 px-6 md:px-8 font-black text-slate-500 text-xs">{slot.time}</td>
                                  <td className="py-6 md:py-8 px-6 md:px-8 font-black text-slate-800 text-sm uppercase group-hover:text-rose-600 transition-colors">{slot.course}</td>
                                  <td className="py-6 md:py-8 px-6 md:px-8 text-right font-black text-slate-400 text-xs uppercase">{slot.room}</td>
                               </tr>
                            ))
                         )}
                      </tbody>
                   </table>
                 </div>
              </div>
           )}
        </div>
      </div>
    );
  };

  if (!isAuthenticated) {
    return <Login onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen flex bg-slate-50 font-['Inter'] selection:bg-rose-100 selection:text-rose-900">
      <aside className={`fixed inset-y-0 left-0 z-[60] w-72 bg-[#1e293b] border-r border-slate-800 transition-all duration-500 ease-in-out transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} overflow-y-auto no-scrollbar`}>
        <div className="min-h-full flex flex-col p-8">
          {/* Logo Section */}
          <div className="flex items-center gap-4 mb-10 px-2 group cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => setActiveTab('home')}>
            <div className="bg-rose-600 p-2 rounded-[0.75rem] text-white shadow-xl transform rotate-6 group-hover:rotate-0 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-black text-lg text-white tracking-tighter uppercase leading-none">{STUDENT_INFO.name}</h1>
              <p className="text-[8px] text-slate-500 font-black uppercase tracking-[0.2em] mt-1">Student Portal</p>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="space-y-8">
            <div>
              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-4 px-4">Navigation Hub</p>
              <nav className="space-y-1.5">
                {[
                  { id: 'home', icon: Home, label: 'Home' },
                  { id: 'bio', icon: User, label: 'Academic Bio' },
                  { id: 'syllabus', icon: Library, label: 'Syllabus' },
                  { id: 'calendar', icon: CalendarDays, label: 'Calendar' },
                  { id: 'schedule', icon: Calendar, label: 'Schedule' },
                  { id: 'results', icon: Award, label: 'Results' }
                ].map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => { setActiveTab(item.id as any); setSidebarOpen(false); }}
                    className={`relative w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 group ${
                      activeTab === item.id ? 'bg-rose-600 text-white shadow-xl shadow-rose-900/20 scale-[1.03]' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <item.icon className={`w-4 h-4 ${activeTab === item.id ? 'text-white' : 'group-hover:text-rose-50'}`} />
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* University Resources Section */}
            <div>
              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-4 px-4">University Tools</p>
              <nav className="space-y-1.5">
                {[
                  { label: 'AUMS Portal', icon: School, href: 'https://aums.amrita.edu' },
                  { label: 'Amrita LMS', icon: Globe, href: 'https://lms.amrita.edu' },
                  { label: 'Digital Library', icon: BookOpen, href: 'https://lib.amrita.edu' },
                ].map((item, idx) => (
                  <a 
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-white/5 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <item.icon className="w-4 h-4 group-hover:text-blue-400" />
                      {item.label}
                    </div>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-40" />
                  </a>
                ))}
              </nav>
            </div>

            {/* System Actions Section */}
            <div>
              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-4 px-4">Control & Support</p>
              <nav className="space-y-1.5">
                <button className="w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-white/5 hover:text-white transition-all group">
                  <Settings className="w-4 h-4 group-hover:text-amber-500" />
                  Portal Settings
                </button>
                <button className="w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-white/5 hover:text-white transition-all group">
                  <LifeBuoy className="w-4 h-4 group-hover:text-emerald-500" />
                  Help Center
                </button>
              </nav>
            </div>
          </div>

          {/* Footer Area with Profile & Logout */}
          <div className="mt-auto pt-10 space-y-6">
            <div className="bg-white/5 rounded-3xl p-5 border border-white/5 flex items-center gap-4 group/profile hover:bg-white/[0.08] transition-all cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-slate-800 flex items-center justify-center text-xs font-black text-slate-400 border border-slate-700 group-hover/profile:border-rose-500 transition-colors">
                  NP
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-[#1e293b] rounded-full animate-pulse"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-black text-white uppercase tracking-wider truncate">{STUDENT_INFO.name}</p>
                <p className="text-[8px] font-bold text-slate-500 uppercase tracking-tighter">Active Session</p>
              </div>
            </div>

            <div className="space-y-2">
              <button 
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-rose-600/10 text-rose-500 hover:bg-rose-600 hover:text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 group"
              >
                <LogOut className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
                Secure Logout
              </button>
              <div className="flex flex-col items-center justify-center pt-2">
                <p className="text-[7px] font-black text-slate-600 uppercase tracking-widest">System Version 1.0.4</p>
                <p className="text-[6px] font-bold text-slate-700 uppercase mt-1">Last Sync: Just Now</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 md:ml-72 bg-slate-50 min-h-screen relative">
        <header className="sticky top-0 z-40 glass-panel border-b border-slate-100 px-4 md:px-8 py-4 md:py-6 flex justify-between items-center transition-all duration-300 shadow-sm">
          <div className="flex items-center gap-3">
             <button onClick={() => setSidebarOpen(true)} className="md:hidden p-2 text-slate-600 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
               <Menu className="w-5 h-5" />
             </button>
             <div className="flex items-center gap-2 md:gap-3 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-400">
                <span className="hover:text-rose-600 cursor-pointer transition-colors" onClick={() => setActiveTab('home')}>Dashboard</span>
                <ChevronRight className="w-2 md:w-2.5 h-2 md:h-2.5" />
                <span className="text-slate-800 truncate max-w-[120px] md:max-w-none">{STUDENT_INFO.institution}</span>
             </div>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
             <button className="w-8 h-8 md:w-10 md:h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition-all">
                <Bell className="w-4 h-4" />
             </button>
             <div className="w-8 h-8 md:w-10 md:h-10 bg-rose-600 rounded-full flex items-center justify-center text-white text-[9px] md:text-[10px] font-black shadow-lg shadow-rose-900/20 transform hover:scale-110 active:scale-95 transition-all cursor-pointer">
                NP
             </div>
          </div>
        </header>

        <div className="p-4 md:p-10 max-w-7xl mx-auto">
          {activeTab === 'home' && renderHome()}
          {activeTab === 'results' && renderResults()}
          {activeTab === 'calendar' && <AcademicCalendar events={ACADEMIC_CALENDAR_EVENTS} />}
          
          {activeTab === 'bio' && (
            <div className="animate-slide-up space-y-8 md:space-y-12">
               <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl transition-all duration-500 hover:shadow-2xl">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter mb-8 md:mb-12 flex items-center gap-4">
                    <User className="w-8 h-8 text-rose-600 animate-pulse" />
                    My Academic Bio
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-8">
                      <div className="p-6 md:p-8 bg-slate-50 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Personal Dossier</h4>
                        <div className="space-y-4">
                          <div className="flex justify-between border-b border-slate-200 pb-3">
                            <span className="text-xs font-bold text-slate-500">Legal Name</span>
                            <span className="text-xs font-black text-slate-800">{STUDENT_INFO.name}</span>
                          </div>
                          <div className="flex justify-between border-b border-slate-200 pb-3">
                            <span className="text-xs font-bold text-slate-500">Registry ID</span>
                            <span className="text-xs font-black text-slate-800">{STUDENT_INFO.regNo}</span>
                          </div>
                          <div className="flex justify-between border-b border-slate-200 pb-3">
                            <span className="text-xs font-bold text-slate-500">Batch cycle</span>
                            <span className="text-xs font-black text-slate-800">{STUDENT_INFO.batch}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 md:p-8 bg-rose-50/50 rounded-[1.5rem] md:rounded-[2rem] border border-rose-100">
                        <h4 className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-6">Identity Summary</h4>
                        <p className="text-sm text-slate-600 leading-relaxed font-medium italic">
                          "Dedicated Master of Science candidate specializing in Chemistry at {STUDENT_INFO.school}, {STUDENT_INFO.campus}. Maintaining a robust {STUDENT_INFO.currentCgpa} CGPA with focus on structural and synthetic chemistry."
                        </p>
                      </div>
                    </div>

                    <div className="space-y-8">
                       <div className="p-6 md:p-8 bg-blue-50/50 rounded-[1.5rem] md:rounded-[2rem] border border-blue-100">
                        <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-6">Institutional Affiliation</h4>
                        <div className="space-y-4">
                           <div className="flex items-start gap-4">
                              <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-900/20">
                                 <School className="w-4 h-4" />
                              </div>
                              <div>
                                 <p className="text-xs font-black text-slate-800 uppercase tracking-tight">{STUDENT_INFO.institution}</p>
                                 <p className="text-[10px] font-bold text-slate-400 uppercase">{STUDENT_INFO.campus}</p>
                              </div>
                           </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="p-5 md:p-6 bg-slate-50 rounded-2xl md:rounded-[1.5rem] border border-slate-100 text-center">
                            <Award className="w-6 h-6 text-amber-500 mx-auto mb-3" />
                            <p className="text-[8px] font-black text-slate-400 uppercase mb-1">Status</p>
                            <p className="text-xs font-black text-slate-800 uppercase">{STUDENT_INFO.standing}</p>
                         </div>
                         <div className="p-5 md:p-6 bg-slate-50 rounded-2xl md:rounded-[1.5rem] border border-slate-100 text-center">
                            <TrendingUp className="w-6 h-6 text-emerald-500 mx-auto mb-3" />
                            <p className="text-[8px] font-black text-slate-400 uppercase mb-1">Rank</p>
                            <p className="text-xs font-black text-slate-800 uppercase">Top 15%</p>
                         </div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          )}

          {activeTab === 'syllabus' && (
            <div className="animate-slide-up space-y-8 md:space-y-10">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter flex items-center gap-4">
                    <Library className="w-8 h-8 text-rose-600" />
                    Syllabus & Faculty
                  </h2>
                  <div className="flex bg-white border border-slate-200 rounded-xl md:rounded-2xl p-1 shadow-lg shadow-slate-200/50 gap-1 overflow-x-auto no-scrollbar">
                    {[1, 2, 3, 4].map(num => (
                      <button
                        key={num}
                        onClick={() => setActiveSemester(num)}
                        className={`px-4 md:px-5 py-2 rounded-lg md:rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${activeSemester === num ? 'bg-rose-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-800'}`}
                      >
                        Sem 0{num}
                      </button>
                    ))}
                  </div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {currentSemester?.courses.map((course, idx) => (
                    <div key={idx} className={`animate-slide-up stagger-${(idx % 5) + 1}`}>
                      <CourseCard course={course} onClick={setSelectedCourse} />
                    </div>
                  ))}
               </div>
            </div>
          )}

          {activeTab === 'schedule' && renderTimetable()}
        </div>
      </main>

      {selectedCourse && (
        <CourseModal 
          course={selectedCourse} 
          onClose={() => setSelectedCourse(null)} 
        />
      )}

      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-slate-900/60 z-50 md:hidden transition-opacity duration-300 animate-fade-in"
        ></div>
      )}
    </div>
  );
};

export default App;
