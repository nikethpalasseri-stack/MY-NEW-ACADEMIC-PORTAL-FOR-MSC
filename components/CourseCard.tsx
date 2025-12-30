
import React from 'react';
import { Course } from '../types';
import { getSubjectStyle } from '../App';

interface CourseCardProps {
  course: Course;
  onClick: (course: Course) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  const style = getSubjectStyle(course.title);

  return (
    <div 
      onClick={() => onClick(course)}
      className={`group cursor-pointer bg-white rounded-[2rem] border p-8 transition-all duration-500 ease-[cubic-bezier(0.16, 1, 0.3, 1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-3 flex flex-col h-full ${style.border} hover:border-current relative overflow-hidden`}
    >
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
        {style.icon}
      </div>
      
      <div className="flex justify-between items-start mb-8">
        <div className={`p-3 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 text-white shadow-lg ${style.bg} ${style.shadow}`}>
          {style.icon}
        </div>
        <span className={`text-[9px] font-black font-mono px-3 py-1.5 rounded-lg uppercase tracking-widest ${style.light} ${style.text} transition-colors duration-300`}>
          {course.code}
        </span>
      </div>
      
      <h3 className="text-lg font-black text-slate-800 mb-4 leading-tight group-hover:text-rose-600 transition-colors duration-300 tracking-tighter uppercase">
        {course.title}
      </h3>
      
      {course.faculty && (
        <p className="text-[9px] font-bold text-slate-400 uppercase mb-6 flex items-center gap-2 group-hover:text-slate-600 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span> {course.faculty}
        </p>
      )}

      <div className="mt-auto flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-slate-400">
        <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 group-hover:border-slate-200 transition-colors">LTP: {course.ltp}</span>
        <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 group-hover:border-slate-200 transition-colors">Cr: {course.credits}</span>
      </div>
    </div>
  );
};

export default CourseCard;
