
import React from 'react';
import { Semester } from '../types';

interface PerformanceChartProps {
  semesters: Semester[];
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ semesters }) => {
  const publishedSems = semesters.filter(s => s.status === 'published' && s.sgpa !== undefined);
  
  // Chart dimensions
  const width = 800;
  const height = 200;
  const padding = 40;
  
  if (publishedSems.length === 0) return null;

  // Calculate points
  const points = publishedSems.map((sem, i) => {
    const x = (i / (publishedSems.length > 1 ? publishedSems.length - 1 : 1)) * (width - padding * 2) + padding;
    // Scale 0-10 GPA to height
    const y = height - ((sem.sgpa! / 10) * (height - padding * 2) + padding);
    return { x, y, sgpa: sem.sgpa, id: sem.id };
  });

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`;

  return (
    <div className="w-full bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl overflow-hidden relative group">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest">SGPA Velocity</h3>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Growth trajectory across semesters</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500 shadow-lg shadow-rose-500/30"></div>
            <span className="text-[10px] font-black text-slate-500 uppercase">Performance Line</span>
          </div>
        </div>
      </div>

      <div className="relative h-[200px] w-full">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
          {/* Grid Lines */}
          {[0, 2.5, 5, 7.5, 10].map((level) => {
            const y = height - ((level / 10) * (height - padding * 2) + padding);
            return (
              <g key={level}>
                <line x1={padding} y1={y} x2={width - padding} y2={y} stroke="#f1f5f9" strokeWidth="1" />
                <text x={0} y={y + 4} className="text-[10px] fill-slate-300 font-black">{level}</text>
              </g>
            );
          })}

          {/* Area Fill */}
          <path d={areaPath} fill="url(#chartGradient)" className="opacity-10" />
          
          {/* Main Path */}
          <path 
            d={linePath} 
            fill="none" 
            stroke="#e11d48" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="drop-shadow-lg"
          />

          {/* Points */}
          {points.map((p, i) => (
            <g key={i} className="cursor-pointer group/point">
              <circle cx={p.x} cy={p.y} r="8" className="fill-white stroke-rose-600 stroke-[3px] shadow-xl" />
              <circle cx={p.x} cy={p.y} r="4" className="fill-rose-600 group-hover/point:scale-150 transition-transform" />
              
              {/* Tooltip on points */}
              <text x={p.x} y={p.y - 20} textAnchor="middle" className="text-[12px] font-black fill-slate-900 opacity-0 group-hover/point:opacity-100 transition-opacity">
                Sem {p.id}: {p.sgpa}
              </text>
            </g>
          ))}

          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex justify-between px-10 mt-6 border-t border-slate-50 pt-6">
        {publishedSems.map((sem, i) => (
          <div key={i} className="text-center">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Semester</p>
            <p className="text-lg font-black text-slate-800">0{sem.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceChart;
