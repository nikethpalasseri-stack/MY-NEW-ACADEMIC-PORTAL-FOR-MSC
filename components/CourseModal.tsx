
import React, { useState } from 'react';
import { Course, Unit } from '../types';
import { X, Sparkles, Book, Loader2, ChevronDown, User } from 'lucide-react';
import { generateStudyNotes } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

interface CourseModalProps {
  course: Course;
  onClose: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [notes, setNotes] = useState<string | null>(null);
  const [loadingNotes, setLoadingNotes] = useState(false);
  const [expandedUnitIdx, setExpandedUnitIdx] = useState<number | null>(null);

  const handleGenerateNotes = async (unit: Unit) => {
    setLoadingNotes(true);
    setNotes(null);
    const generated = await generateStudyNotes(course.title, unit.title, unit.content);
    setNotes(generated || "Error generating notes.");
    setLoadingNotes(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4 bg-slate-900/80 md:backdrop-blur-md transition-all duration-300 animate-fade-in">
      <div className="bg-white w-full md:max-w-6xl h-full md:max-h-[90vh] md:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border border-slate-100 animate-slide-up">
        {/* Header */}
        <div className="p-5 md:p-8 border-b border-slate-100 flex justify-between items-center bg-[#1e293b] text-white shrink-0">
          <div className="flex items-center gap-3 md:gap-4 animate-fade-in">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-rose-600 rounded-lg md:rounded-xl flex items-center justify-center text-white shadow-xl shadow-rose-900/20 transform hover:scale-105 transition-transform duration-300">
              <Book className="w-4 md:w-5 h-4 md:h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-rose-400 text-[8px] md:text-[9px] font-black uppercase tracking-widest">{course.code}</span>
                {course.faculty && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                    <span className="text-slate-400 text-[7px] md:text-[8px] font-bold uppercase flex items-center gap-1">
                      <User className="w-2.5 h-2.5" /> <span className="truncate max-w-[80px] md:max-w-none">{course.faculty}</span>
                    </span>
                  </>
                )}
              </div>
              <h2 className="text-lg md:text-2xl font-black tracking-tighter uppercase leading-none truncate max-w-[200px] md:max-w-none">{course.title}</h2>
            </div>
          </div>
          <button onClick={onClose} className="p-2 md:p-3 hover:bg-white/10 rounded-full transition-all text-slate-400 hover:text-white active:scale-90">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-slate-50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            {/* Units List */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 md:mb-6 animate-fade-in stagger-1">Course Modules</h3>
              {course.units ? (
                course.units.map((unit, idx) => (
                  <div 
                    key={idx}
                    className={`p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-300 animate-slide-up stagger-${idx+1} ${
                      expandedUnitIdx === idx 
                        ? 'border-rose-200 bg-white shadow-xl shadow-rose-900/5 ring-1 ring-rose-100' 
                        : 'border-slate-100 bg-white hover:border-rose-200'
                    }`}
                  >
                    <div 
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => setExpandedUnitIdx(expandedUnitIdx === idx ? null : idx)}
                    >
                      <h4 className="font-black text-slate-800 tracking-tight text-base md:text-lg pr-4">{unit.title}</h4>
                      <div className={`shrink-0 transition-transform duration-300 ${expandedUnitIdx === idx ? 'rotate-180' : 'rotate-0'}`}>
                        <ChevronDown className={`w-4 h-4 ${expandedUnitIdx === idx ? 'text-rose-500' : 'text-slate-300'}`} />
                      </div>
                    </div>
                    
                    {expandedUnitIdx === idx && (
                      <div className="mt-4 md:mt-6 animate-scale-in">
                        <p className="text-sm text-slate-500 mb-6 md:mb-8 leading-relaxed font-medium">
                          {unit.content}
                        </p>
                        <button 
                          onClick={() => {
                            setSelectedUnit(unit);
                            handleGenerateNotes(unit);
                          }}
                          className="w-full flex items-center justify-center gap-3 bg-rose-600 text-white py-4 rounded-xl md:rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-700 transition-all shadow-lg"
                        >
                          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                          Generate Notes
                        </button>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-slate-400 text-center py-16 md:py-20 bg-white rounded-[2rem] border border-dashed border-slate-200">
                  <Book className="w-10 h-10 mx-auto mb-6 opacity-10" />
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-50">Syllabus breakdown pending</p>
                </div>
              )}
            </div>

            {/* AI Notes Area */}
            <div className="lg:col-span-7 bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 border border-slate-100 shadow-xl min-h-[400px] md:min-h-[500px] flex flex-col relative overflow-hidden mb-8 lg:mb-0">
              <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none hidden md:block">
                <Sparkles className="w-32 h-32 text-rose-600" />
              </div>
              
              <div className="flex items-center justify-between mb-8 md:mb-10 pb-4 md:pb-6 border-b border-slate-50 relative z-10">
                <h3 className="text-base md:text-lg font-black text-slate-800 flex items-center gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-rose-50 rounded-lg md:rounded-xl flex items-center justify-center text-rose-600">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  Study Assistant
                </h3>
                {loadingNotes && <Loader2 className="w-5 h-5 animate-spin text-rose-600" />}
              </div>

              <div className="flex-1 relative z-10">
                {!selectedUnit && !loadingNotes && (
                  <div className="h-full flex flex-col items-center justify-center text-center text-slate-300 px-6 md:px-10 py-12 md:py-0">
                    <Sparkles className="w-12 h-12 mb-6 md:mb-8 opacity-10" />
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] max-w-[280px] leading-relaxed">Select a unit to generate precision exam notes powered by Gemini 3.0</p>
                  </div>
                )}

                {loadingNotes && (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 md:py-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border-[4px] border-rose-100 border-t-rose-600 animate-spin"></div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest animate-pulse">Synthesizing Chemical Knowledge...</p>
                  </div>
                )}
                
                {notes && !loadingNotes && (
                  <div className="prose prose-slate prose-rose max-w-none animate-fade-in relative z-10 prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-rose-600 prose-p:text-sm md:prose-p:text-base prose-strong:font-black">
                    <ReactMarkdown>{notes}</ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
