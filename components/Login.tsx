
import React, { useState } from 'react';
import { 
  GraduationCap, 
  Lock, 
  User, 
  ArrowRight, 
  Sparkles, 
  Atom, 
  FlaskConical, 
  AlertCircle 
} from 'lucide-react';

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Using requested credentials
    if (username === 'CB.PS.P2CHM25009' && password === 'cbchm9') {
      setTimeout(() => {
        localStorage.setItem('isMscAuth', 'true');
        onLoginSuccess();
        setIsSubmitting(false);
      }, 800);
    } else {
      setTimeout(() => {
        setError('Invalid Registry ID or Password');
        setIsSubmitting(false);
      }, 400);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 relative overflow-hidden font-['Inter']">
      {/* Animated Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] opacity-10 animate-[spin_60s_linear_infinite]">
        <Atom className="w-96 h-96 text-rose-500" />
      </div>
      <div className="absolute bottom-[-5%] left-[-5%] opacity-10 animate-[spin_40s_linear_infinite]">
        <FlaskConical className="w-80 h-80 text-blue-500" />
      </div>
      <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-rose-600/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>

      <div className="w-full max-w-md relative z-10 animate-scale-in">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-rose-600 text-white shadow-2xl shadow-rose-900/40 mb-6 transform hover:rotate-6 transition-transform">
            <GraduationCap className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tighter uppercase leading-tight">
            Personal Academic <br /><span className="text-rose-600">Portal for Niketh P</span>
          </h1>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mt-4">Amrita Vishwa Vidyapeetham</p>
        </div>

        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Registry Identifier</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-slate-500" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-5 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-rose-600/50 transition-all font-medium text-sm"
                  placeholder="Enter Registry ID"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Secure Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-slate-500" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-5 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-rose-600/50 transition-all font-medium text-sm"
                  placeholder="Enter Password"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-3 p-4 bg-rose-600/10 border border-rose-600/20 rounded-xl text-rose-500 text-[11px] font-bold uppercase animate-fade-in">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-rose-600 hover:bg-rose-700 text-white font-black text-[11px] uppercase tracking-[0.2em] py-5 rounded-2xl shadow-xl shadow-rose-900/40 transition-all flex items-center justify-center gap-3 disabled:opacity-50 group"
            >
              {isSubmitting ? 'Authenticating...' : (
                <>
                  Unlock Portal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/5 text-center">
            <div className="flex items-center justify-center gap-2 text-slate-600 text-[10px] font-bold uppercase">
              <Sparkles className="w-3 h-3 text-rose-600" /> Authorized Student Access Only
            </div>
          </div>
        </div>
        
        <p className="text-center mt-8 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
          &copy; 2025 Amrita School of Physical Sciences
        </p>
      </div>
    </div>
  );
};

export default Login;
