
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md transition-all duration-300 animate-fade-in">
      <div className="bg-white w-full max-w-6xl max-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border border-slate-100 animate-slide-up">
        {/* Header */}
        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-[#1e293b] text-white">
          <div className="flex items-center gap-4 animate-fade-in">
            <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center text-white shadow-xl shadow-rose-900/20 transform hover:scale-105 transition-transform duration-300">
              <Book className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-rose-400 text-[9px] font-black uppercase tracking-widest">{course.code}</span>
                {course.faculty && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                    <span className="text-slate-400 text-[8px] font-bold uppercase flex items-center gap-1">
                      <User className="w-2.5 h-2.5" /> {course.faculty}
                    </span>
                  </>
                )}
              </div>
              <h2 className="text-2xl font-black tracking-tighter uppercase leading-none">{course.title}</h2>
            </div>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-white/10 rounded-full transition-all text-slate-400 hover:text-white active:scale-90">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-12 bg-slate-50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Units List */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 animate-fade-in stagger-1">Course Modules</h3>
              {course.units ? (
                course.units.map((unit, idx) => (
                  <div 
                    key={idx}
                    className={`p-6 rounded-[2rem] border transition-all duration-300 animate-slide-up stagger-${idx+1} ${
                      expandedUnitIdx === idx 
                        ? 'border-rose-200 bg-white shadow-xl shadow-rose-900/5 ring-1 ring-rose-100 scale-[1.02]' 
                        : 'border-slate-100 bg-white hover:border-rose-200'
                    }`}
                  >
                    <div 
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => setExpandedUnitIdx(expandedUnitIdx === idx ? null : idx)}
                    >
                      <h4 className="font-black text-slate-800 tracking-tight text-lg">{unit.title}</h4>
                      <div className={`transition-transform duration-300 ${expandedUnitIdx === idx ? 'rotate-180' : 'rotate-0'}`}>
                        <ChevronDown className={`w-4 h-4 ${expandedUnitIdx === idx ? 'text-rose-500' : 'text-slate-300'}`} />
                      </div>
                    </div>
                    
                    {expandedUnitIdx === idx && (
                      <div className="mt-6 animate-scale-in">
                        <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium">
                          {unit.content}
                        </p>
                        <button 
                          onClick={() => {
                            setSelectedUnit(unit);
                            handleGenerateNotes(unit);
                          }}
                          className="w-full flex items-center justify-center gap-3 bg-rose-600 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-700 transition-all shadow-lg"
                        >
                          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                          Generate Study Notes
                        </button>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-slate-400 text-center py-20 bg-white rounded-[2rem] border border-dashed border-slate-200">
                  <Book className="w-10 h-10 mx-auto mb-6 opacity-10" />
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-50">Syllabus breakdown pending</p>
                </div>
              )}
            </div>

            {/* AI Notes Area */}
            <div className="lg:col-span-7 bg-white rounded-[2rem] p-10 border border-slate-100 shadow-xl min-h-[500px] flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                <Sparkles className="w-32 h-32 text-rose-600" />
              </div>
              
              <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-50 relative z-10">
                <h3 className="text-lg font-black text-slate-800 flex items-center gap-3">
                  <div className="w-8 h-8 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 animate-pulse">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  Study Assistant
                </h3>
                {loadingNotes && <Loader2 className="w-5 h-5 animate-spin text-rose-600" />}
              </div>

              <div className="flex-1 relative z-10 overflow-y-auto">
                {!selectedUnit && !loadingNotes && (
                  <div className="h-full flex flex-col items-center justify-center text-center text-slate-300 px-10">
                    <Sparkles className="w-12 h-12 mb-8 opacity-10" />
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] max-w-[280px] leading-relaxed">Select a unit to generate precision exam notes powered by Gemini 3.0</p>
                  </div>
                )}

                {loadingNotes && (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                    <div className="w-12 h-12 rounded-2xl border-[4px] border-rose-100 border-t-rose-600 animate-spin"></div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest animate-pulse">Synthesizing Chemical Knowledge...</p>
                  </div>
                )}
                
                {/* Fixed: implement markdown rendering */}
                {notes && !loadingNotes && (
                  <div className="prose prose-slate prose-rose max-w-none animate-fade-in relative z-10 prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-rose-600 prose-code:text-rose-600 prose-code:bg-rose-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md">
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
