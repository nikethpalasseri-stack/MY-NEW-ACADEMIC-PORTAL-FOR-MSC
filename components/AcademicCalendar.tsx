
import React, { useState, useMemo, useEffect } from 'react';
import { CalendarEvent } from '../types';
import { 
  CalendarDays, 
  Sparkles, 
  CircleAlert, 
  Flame, 
  GraduationCap, 
  Zap,
  Info,
  Clock
} from 'lucide-react';

interface AcademicCalendarProps {
  events: CalendarEvent[];
}

const AcademicCalendar: React.FC<AcademicCalendarProps> = ({ events }) => {
  // Determine initial month/year based on today's date, but constrained to calendar range
  const today = useMemo(() => new Date(), []);
  const todayStr = useMemo(() => today.toISOString().split('T')[0], [today]);
  
  const calendarStart = new Date(2025, 5, 1); // June 2025
  const calendarEnd = new Date(2026, 6, 31); // July 2026

  const initialDate = useMemo(() => {
    if (today < calendarStart) return calendarStart;
    if (today > calendarEnd) return calendarEnd;
    return today;
  }, [today]);

  const [selectedMonth, setSelectedMonth] = useState<number>(initialDate.getMonth());
  const [selectedYear, setSelectedYear] = useState<number>(initialDate.getFullYear());
  const [mscOnly, setMscOnly] = useState(true);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const availableMonths = useMemo(() => {
    const list = [];
    let curDate = new Date(2025, 5, 1);
    while (curDate <= calendarEnd) {
      list.push({ month: curDate.getMonth(), year: curDate.getFullYear() });
      curDate.setMonth(curDate.getMonth() + 1);
    }
    return list;
  }, []);

  const filteredEvents = useMemo(() => {
    return events.filter(e => {
      const d = new Date(e.date);
      const matchesMonth = d.getMonth() === selectedMonth && d.getFullYear() === selectedYear;
      if (!matchesMonth) return false;
      if (mscOnly) {
        return e.targetGroup === 'M.Sc' || e.targetGroup === 'All' || e.targetGroup === 'Higher Semesters';
      }
      return true;
    }).sort((a, b) => a.date.localeCompare(b.date));
  }, [selectedMonth, selectedYear, mscOnly, events]);

  const getEventStyle = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'holiday': return { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100', icon: <Flame className="w-3 h-3" />, label: 'Holiday' };
      case 'exam': return { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', icon: <Zap className="w-3 h-3" />, label: 'Exam' };
      case 'commencement': return { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100', icon: <GraduationCap className="w-3 h-3" />, label: 'Commencement' };
      case 'timetable': return { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', icon: <CalendarDays className="w-3 h-3" />, label: 'TT Adj.' };
      default: return { bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-100', icon: <Info className="w-3 h-3" />, label: 'Event' };
    }
  };

  return (
    <div className="animate-slide-up space-y-8 md:space-y-10">
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 md:gap-10">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
             <span className="px-4 py-1.5 bg-rose-600/10 text-rose-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-rose-600/20">
               Academic Milestone Hub
             </span>
             {today.getMonth() === selectedMonth && today.getFullYear() === selectedYear && (
               <span className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-emerald-500/20 animate-pulse">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Current Month
               </span>
             )}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter flex items-center gap-4">
            <CalendarDays className="w-8 h-8 text-rose-600 shrink-0" />
            Academic Calendar
          </h2>
          <p className="text-slate-400 font-medium ml-1 text-sm md:text-base">AY 2025 - 2026 | Semester Roadmap</p>
        </div>

        <div className="flex items-center bg-white border border-slate-200 rounded-2xl md:rounded-[2.5rem] p-1.5 shadow-xl w-full md:w-auto">
          <button 
            onClick={() => setMscOnly(!mscOnly)}
            className={`flex items-center justify-center gap-3 px-6 py-3 rounded-xl md:rounded-[1.5rem] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-300 w-full md:w-auto ${mscOnly ? 'bg-rose-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-800'}`}
          >
            <Sparkles className={`w-3.5 h-3.5 ${mscOnly ? 'animate-pulse' : ''}`} />
            M.Sc. Specialized
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4 bg-slate-100/50 p-1.5 rounded-2xl md:rounded-[2.5rem] border border-slate-200 overflow-x-auto no-scrollbar scroll-smooth">
        {availableMonths.map((m, idx) => (
          <button
            key={idx}
            onClick={() => { setSelectedMonth(m.month); setSelectedYear(m.year); }}
            className={`flex-shrink-0 px-4 md:px-6 py-2.5 md:py-3 rounded-xl md:rounded-[1.5rem] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${selectedMonth === m.month && selectedYear === m.year ? 'bg-white text-rose-600 shadow-md border border-rose-100' : 'text-slate-400 hover:text-slate-800'}`}
          >
            {months[m.month]} '{m.year.toString().slice(-2)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
        <div className="lg:col-span-8 space-y-4 animate-scale-in">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, idx) => {
              const style = getEventStyle(event.type);
              const dateObj = new Date(event.date);
              const isToday = event.date === todayStr;

              return (
                <div 
                  key={idx} 
                  className={`group flex items-center gap-5 md:gap-8 bg-white p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] border transition-all duration-500 ${
                    isToday 
                      ? 'border-rose-500 ring-2 ring-rose-500/20 shadow-2xl shadow-rose-500/10 md:scale-[1.02]' 
                      : 'border-slate-100 shadow-sm hover:shadow-xl'
                  }`}
                >
                  <div className={`flex flex-col items-center justify-center min-w-[50px] md:min-w-[60px] border-r pr-5 md:pr-8 ${isToday ? 'border-rose-100' : 'border-slate-100'}`}>
                    <span className={`text-lg md:text-xl font-black tracking-tighter ${isToday ? 'text-rose-600' : 'text-slate-800'}`}>
                      {dateObj.getDate()}
                    </span>
                    <span className={`text-[8px] md:text-[9px] font-bold uppercase tracking-widest ${isToday ? 'text-rose-400' : 'text-slate-400'}`}>
                      {event.day}
                    </span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`px-3 py-0.5 rounded-full text-[7px] md:text-[8px] font-black uppercase tracking-widest ${style.bg} ${style.text} border ${style.border}`}>
                        {style.label}
                      </span>
                      {isToday && (
                        <span className="px-3 py-0.5 rounded-full text-[7px] md:text-[8px] font-black uppercase tracking-widest bg-rose-600 text-white animate-pulse">
                          Today
                        </span>
                      )}
                    </div>
                    <h4 className={`text-base md:text-lg font-black uppercase tracking-tighter leading-tight transition-colors truncate ${isToday ? 'text-rose-600' : 'text-slate-800 group-hover:text-rose-600'}`}>
                      {event.particulars}
                    </h4>
                  </div>

                  <div className={`p-2.5 md:p-3 rounded-lg md:rounded-xl shadow-sm transition-transform duration-500 group-hover:scale-110 shrink-0 ${isToday ? 'bg-rose-600 text-white' : `${style.bg} ${style.text}`}`}>
                    {style.icon}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white p-16 md:p-24 rounded-[2rem] md:rounded-[3rem] border border-slate-100 text-center space-y-6">
              <Clock className="w-12 md:w-16 h-12 md:h-16 text-slate-200 mx-auto" />
              <div className="space-y-2">
                <h4 className="text-xl font-black text-slate-400 uppercase tracking-widest">No Events Found</h4>
                <p className="text-sm text-slate-300 font-medium">There are no major academic milestones scheduled for this selection.</p>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-4 space-y-6 md:space-y-8">
          <div className="bg-[#1e293b] rounded-2xl md:rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <CircleAlert className="w-16 h-16 text-rose-500" />
             </div>
             <h3 className="text-xl font-black tracking-tighter mb-6 relative z-10 uppercase">Registry Summary</h3>
             <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-center py-4 border-b border-white/10">
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Planned Milestones</span>
                   <span className="text-xl font-black text-white">{filteredEvents.length}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/10">
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Critical Exams</span>
                   <span className="text-xl font-black text-rose-500">{filteredEvents.filter(e => e.type === 'exam').length}</span>
                </div>
                <div className="flex justify-between items-center py-4">
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Breaks & Holidays</span>
                   <span className="text-xl font-black text-blue-400">{filteredEvents.filter(e => e.type === 'holiday').length}</span>
                </div>
             </div>
          </div>

          <div className="bg-white rounded-2xl md:rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-xl space-y-8">
             <h3 className="text-lg font-black text-slate-800 uppercase tracking-tighter">Event Legend</h3>
             <div className="space-y-4">
                {[
                  { type: 'holiday', label: 'Institutional Holidays' },
                  { type: 'exam', label: 'Examination Windows' },
                  { type: 'commencement', label: 'Academic Kick-offs' },
                  { type: 'timetable', label: 'Timetable Adjustments' }
                ].map((item, i) => {
                  const style = getEventStyle(item.type as any);
                  return (
                    <div key={i} className="flex items-center gap-4">
                       <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${style.bg} ${style.text} shrink-0`}>
                          {style.icon}
                       </div>
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">{item.label}</span>
                    </div>
                  );
                })}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
