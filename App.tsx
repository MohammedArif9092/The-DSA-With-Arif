
import React, { useState, useEffect } from 'react';
import { Terminal, Code, Trophy, Flame, User, Play, ChevronLeft, CheckCircle, XCircle, Zap, Menu, BookOpen, ExternalLink, FileText, Calculator, Book, LayoutGrid, Clock, Link as LinkIcon } from 'lucide-react';
import { Card, Button, BadgeItem, cn } from './components/UI';
import { StatsChart } from './components/StatsChart';
import { MOCK_PROBLEMS, MOCK_USER_STATS, MOCK_BADGES } from './constants';
import { Problem, UserStats, ViewState, Difficulty } from './types';

// -- Sub-Components (Defined here for locality as requested for the App focus) --

// 1. Sidebar Navigation
const Sidebar = ({ 
  currentView, 
  setView, 
  mobileOpen, 
  setMobileOpen 
}: { 
  currentView: ViewState, 
  setView: (v: ViewState) => void,
  mobileOpen: boolean,
  setMobileOpen: (v: boolean) => void
}) => {
  const navItems = [
    { id: 'DASHBOARD', label: 'Dashboard', icon: Terminal },
    { id: 'PROBLEMS', label: 'Problems', icon: Code },
    { id: 'RESOURCES', label: 'Resources', icon: BookOpen },
    { id: 'PROFILE', label: 'My Stats', icon: User },
  ];

  return (
    <>
    {/* Mobile Overlay */}
    {mobileOpen && (
      <div 
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={() => setMobileOpen(false)}
      />
    )}
    
    <aside className={cn(
      "fixed md:sticky top-0 left-0 h-screen w-64 bg-neo-yellow border-r-4 border-neo-black z-50 transition-transform duration-300 ease-in-out flex flex-col justify-between",
      mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
    )}>
      <div>
        <div className="p-6 border-b-4 border-neo-black bg-white">
          <h1 className="font-black text-2xl leading-none uppercase tracking-tighter">
            The DSA<br/><span className="text-neo-pink">With Arif</span>
          </h1>
        </div>
        <nav className="p-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setView(item.id as ViewState);
                setMobileOpen(false);
              }}
              className={cn(
                "w-full flex items-center space-x-3 px-4 py-3 font-bold border-4 border-neo-black shadow-neo-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo transition-all",
                currentView === item.id ? "bg-neo-purple text-white" : "bg-white text-black"
              )}
            >
              <item.icon size={20} strokeWidth={3} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t-4 border-neo-black bg-neo-blue">
        <p className="font-mono text-xs font-bold mb-2">DAILY STREAK</p>
        <div className="flex items-center space-x-2 bg-black text-white p-2 border-2 border-white">
          <Flame className="text-neo-yellow fill-neo-yellow animate-pulse" />
          <span className="text-xl font-mono">{MOCK_USER_STATS.streak} Days</span>
        </div>
      </div>
    </aside>
    </>
  );
};

// 2. Dashboard View
const Dashboard = ({ userStats, setView }: { userStats: UserStats, setView: (v: ViewState) => void }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h2 className="text-4xl md:text-6xl font-black mb-2 uppercase">Dashboard</h2>
        <p className="font-mono text-lg text-gray-600 font-bold">Welcome back, future engineer.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card color="purple" className="flex flex-col justify-between h-48">
          <div className="flex justify-between items-start">
            <Trophy size={48} strokeWidth={2} className="text-white" />
            <span className="font-mono font-bold bg-black text-white px-2 py-1 text-xs">RANK</span>
          </div>
          <div>
            <div className="text-4xl font-black text-white">{userStats.rank}</div>
            <div className="font-mono font-bold text-white/80">Keep pushing!</div>
          </div>
        </Card>

        <Card color="pink" className="flex flex-col justify-between h-48">
           <div className="flex justify-between items-start">
            <Zap size={48} strokeWidth={2} className="text-white" />
            <span className="font-mono font-bold bg-black text-white px-2 py-1 text-xs">XP</span>
          </div>
          <div>
            <div className="text-5xl font-black text-white">{userStats.xp}</div>
            <div className="w-full bg-black/20 h-4 mt-2 border-2 border-black rounded-full overflow-hidden">
              <div className="bg-neo-yellow h-full w-[70%]"></div>
            </div>
          </div>
        </Card>

        <Card color="green" className="flex flex-col justify-between h-48">
           <div className="flex justify-between items-start">
            <CheckCircle size={48} strokeWidth={2} className="text-black" />
            <span className="font-mono font-bold bg-black text-white px-2 py-1 text-xs">SOLVED</span>
          </div>
          <div>
            <div className="text-5xl font-black text-black">{userStats.problemsSolved}</div>
            <div className="font-mono font-bold text-black">Problems Crushed</div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
             <h3 className="text-2xl font-black bg-neo-yellow inline-block px-2 border-2 border-black transform -rotate-1">Weekly Activity</h3>
          </div>
          <StatsChart data={userStats.recentActivity} />
        </div>

        <div className="space-y-4">
           <h3 className="text-2xl font-black bg-neo-blue text-white inline-block px-2 border-2 border-black transform rotate-1">Quick Start</h3>
           <Card className="flex flex-col space-y-4 bg-white">
              <p className="font-mono text-sm">Pick up where you left off or try something new.</p>
              <Button onClick={() => setView('PROBLEMS')} className="w-full">
                Browse Problems
              </Button>
              <Button variant="secondary" className="w-full">
                Random Challenge
              </Button>
           </Card>
        </div>
      </div>
    </div>
  );
};

// 3. Problem List View
const ProblemList = ({ 
  problems, 
  onSelect 
}: { 
  problems: Problem[], 
  onSelect: (p: Problem) => void 
}) => {
  const [filter, setFilter] = useState<Difficulty | 'All'>('All');

  const filtered = problems.filter(p => filter === 'All' || p.difficulty === filter);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-4xl font-black uppercase">Problems</h2>
        <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0">
          {(['All', 'Easy', 'Medium', 'Hard'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-4 py-1 font-mono font-bold border-2 border-black transition-all",
                filter === f ? "bg-black text-white shadow-none" : "bg-white text-black hover:bg-gray-200"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      <div className="grid gap-4">
        {filtered.map(prob => (
          <div 
            key={prob.id}
            onClick={() => onSelect(prob)}
            className="group relative cursor-pointer"
          >
            <div className="absolute inset-0 bg-black translate-x-2 translate-y-2" />
            <div className={cn(
              "relative border-4 border-black p-4 flex items-center justify-between transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1",
              prob.solved ? "bg-neo-green" : "bg-white"
            )}>
              <div>
                <div className="flex items-center space-x-3 mb-1">
                  <span className={cn(
                    "font-mono text-xs px-2 py-0.5 border border-black font-bold",
                    prob.difficulty === 'Easy' ? 'bg-neo-blue text-white' : 
                    prob.difficulty === 'Medium' ? 'bg-neo-yellow' : 'bg-neo-pink text-white'
                  )}>
                    {prob.difficulty}
                  </span>
                  <span className="font-mono text-xs text-gray-500 font-bold uppercase">{prob.category}</span>
                </div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  {prob.title}
                  {prob.externalLink && <LinkIcon size={14} className="text-gray-400" />}
                </h3>
              </div>
              <div className="flex items-center space-x-4">
                 {prob.solved && <CheckCircle size={24} strokeWidth={3} />}
                 <div className="bg-black text-white p-2">
                    <Play size={20} fill="white" />
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 4. Solver View
const Solver = ({ 
  problem, 
  onBack,
  onSolve
}: { 
  problem: Problem, 
  onBack: () => void,
  onSolve: (id: number) => void
}) => {
  const [code, setCode] = useState(problem.starterCode);
  const [output, setOutput] = useState<{status: 'idle' | 'running' | 'success' | 'error', message: string}>({
    status: 'idle',
    message: 'Ready to run...'
  });

  const handleRun = () => {
    setOutput({ status: 'running', message: 'Compiling...' });
    setTimeout(() => {
      // Mock logic: always succeed if not starter code for demo purposes
      if (code.trim() === problem.starterCode.trim()) {
         setOutput({ 
           status: 'error', 
           message: 'Test Case 1: Failed\nOutput: undefined\nReason: No implementation found.' 
         });
      } else {
         setOutput({ status: 'success', message: 'All Test Cases Passed! \nRuntime: 52ms \nMemory: 42.1MB' });
         onSolve(problem.id);
      }
    }, 1500);
  };

  const getTimeEstimate = (diff: Difficulty) => {
    switch(diff) {
      case Difficulty.Easy: return "5 - 10 mins";
      case Difficulty.Medium: return "15 - 20 mins";
      case Difficulty.Hard: return "45 - 50 mins";
    }
  }

  return (
    <div className="h-[calc(100vh-2rem)] flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <div className="mb-4 flex items-center justify-between">
        <Button onClick={onBack} variant="secondary" className="flex items-center space-x-2 px-4 py-1 text-sm">
          <ChevronLeft size={16} /> <span>Back</span>
        </Button>
        <div className="font-bold font-mono text-xl truncate px-4">{problem.title}</div>
        <div className="w-20" /> {/* Spacer */}
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0">
        {/* Description Panel */}
        <Card className="overflow-y-auto bg-white flex flex-col h-full">
           <div className="flex flex-wrap items-center justify-between mb-4 pb-4 border-b-4 border-black gap-2">
              <div className="flex gap-2">
                <span className={cn(
                    "font-mono text-xs px-2 py-1 border-2 border-black font-bold",
                    problem.difficulty === 'Easy' ? 'bg-neo-blue text-white' : 
                    problem.difficulty === 'Medium' ? 'bg-neo-yellow' : 'bg-neo-pink text-white'
                )}>
                  {problem.difficulty}
                </span>
                <span className="font-mono text-xs px-2 py-1 border-2 border-black font-bold bg-gray-200 flex items-center gap-1">
                  <Clock size={12} /> {getTimeEstimate(problem.difficulty)}
                </span>
              </div>
              <div className="flex space-x-2">
                 <button className="p-2 border-2 border-black hover:bg-gray-100" title="Like">👍 {problem.likes}</button>
              </div>
           </div>
           
           <div className="prose font-sans mb-6">
             <p className="whitespace-pre-wrap text-lg leading-relaxed">{problem.description}</p>
           </div>
           
           {problem.externalLink && (
             <div className="mb-6 p-4 bg-neo-white border-4 border-black shadow-neo-sm">
               <h4 className="font-black mb-2 flex items-center gap-2">External Resources</h4>
               <p className="font-mono text-sm mb-2">Practice this problem on the original platform:</p>
               <a 
                 href={problem.externalLink} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 font-bold text-neo-blue hover:underline"
               >
                 Go to Problem <ExternalLink size={14} />
               </a>
             </div>
           )}

           <div className="mt-auto pt-6">
              <div className="bg-neo-yellow p-4 border-2 border-black">
                <h4 className="font-black mb-2 flex items-center gap-2"><Zap size={18}/> Hint (AI)</h4>
                <p className="font-mono text-sm">Need a nudge? Try breaking the problem into smaller sub-problems. Check the constraints!</p>
              </div>
           </div>
        </Card>

        {/* Code & Console Panel */}
        <div className="flex flex-col gap-4 h-full min-h-0">
          <div className="flex-1 relative border-4 border-black bg-[#1e1e1e] shadow-neo">
             <div className="absolute top-0 left-0 right-0 bg-neo-white border-b-4 border-black p-2 flex justify-between items-center z-10">
                <span className="font-mono text-xs font-bold px-2">JavaScript</span>
             </div>
             <textarea 
               value={code}
               onChange={(e) => setCode(e.target.value)}
               className="w-full h-full pt-12 p-4 bg-transparent text-white font-mono resize-none focus:outline-none text-sm md:text-base relative z-0"
               spellCheck={false}
             />
          </div>

          <div className="h-48 border-4 border-black bg-black text-neo-green p-4 font-mono text-sm overflow-y-auto shadow-neo relative">
             <div className="absolute top-2 right-2 flex space-x-2">
                <Button 
                   variant="success" 
                   onClick={handleRun}
                   disabled={output.status === 'running'}
                   className="py-1 px-4 text-xs shadow-none border-2"
                >
                  {output.status === 'running' ? 'Running...' : 'Run Code'}
                </Button>
             </div>
             <div className="mt-8 whitespace-pre-wrap">
               {output.status === 'running' && <span className="animate-pulse">_ Executing...</span>}
               {output.status === 'error' && <span className="text-neo-pink">{output.message}</span>}
               {output.status === 'success' && <span className="text-neo-green">{output.message}</span>}
               {output.status === 'idle' && <span className="text-gray-500">// Output will appear here</span>}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 5. Profile View
const Profile = ({ userStats }: { userStats: UserStats }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="bg-neo-purple border-4 border-black p-8 text-white shadow-neo">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-neo-yellow border-4 border-white rounded-full flex items-center justify-center text-4xl">
            😎
          </div>
          <div>
            <h2 className="text-4xl font-black uppercase">Arif's Disciple</h2>
            <p className="font-mono text-xl">{userStats.rank}</p>
          </div>
        </div>
      </header>

      <section>
        <h3 className="text-2xl font-black mb-6 border-b-4 border-black inline-block">Badges Collection</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MOCK_BADGES.map(badge => (
            <BadgeItem key={badge.id} {...badge} />
          ))}
        </div>
      </section>

      <section>
         <h3 className="text-2xl font-black mb-6 border-b-4 border-black inline-block">Settings</h3>
         <Card className="space-y-4">
            <div className="flex items-center justify-between p-2 border-b-2 border-gray-200">
               <span className="font-bold">Dark Mode (Coming Soon)</span>
               <div className="w-12 h-6 bg-gray-300 rounded-full border-2 border-black"></div>
            </div>
            <div className="flex items-center justify-between p-2">
               <span className="font-bold">Vim Mode</span>
               <div className="w-12 h-6 bg-neo-green rounded-full border-2 border-black flex items-center justify-end px-1">
                 <div className="w-4 h-4 bg-black rounded-full"></div>
               </div>
            </div>
         </Card>
      </section>
    </div>
  );
};

// 6. Resources View
const Resources = () => {
  const resources = [
    {
      title: "Coding Sheets",
      description: "Master patterns with this comprehensive problem sheet.",
      link: "https://docs.google.com/spreadsheets/u/0/d/1P3RXgZju_2OzZyJaRtu6D3Kx-Eks38X09_zJ8aj2zy8/htmlview#",
      color: "yellow",
      icon: LayoutGrid
    },
    {
      title: "Placement Cheat Sheet",
      description: "Your go-to guide for placement preparation and interview tips.",
      link: "https://docs.google.com/document/u/0/d/1t2F7CwTrUQr5QFhqBdS_lQc5Yg9LU7W4Wu4rHPYpxRA/mobilebasic",
      color: "pink",
      icon: FileText
    },
    {
      title: "Aptitude Formulas",
      description: "Essential math shortcuts and formulas for aptitude tests.",
      link: "https://docs.google.com/document/d/1cxJXfGLv4KAD2KOJ1hH1XZK0LP1Wa3SdACfsNjg8reI/mobilebasic",
      color: "green",
      icon: Calculator
    },
    {
      title: "Core Subjects",
      description: "Deep dive into OS, DBMS, CN, and OOPs concepts.",
      link: "https://drive.google.com/drive/u/2/mobile/folders/16veNuSh2SBrj-LkoQWaAKUqsm2pYAT-F?pli=1",
      color: "blue",
      icon: Book
    }
  ] as const;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <header>
        <h2 className="text-4xl md:text-6xl font-black mb-2 uppercase">Resources</h2>
        <p className="font-mono text-lg text-gray-600 font-bold">Curated knowledge base.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resources.map((res) => (
          <Card key={res.title} color={res.color} className="flex flex-col h-full border-4 border-black shadow-neo hover:shadow-neo-lg transition-all transform hover:-translate-y-1">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-black text-white p-4 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                <res.icon size={32} strokeWidth={2.5} />
              </div>
              <div className="bg-white px-2 py-1 border-2 border-black font-mono text-xs font-bold uppercase">External</div>
            </div>
            
            <h3 className="text-3xl font-black mb-3 leading-none">{res.title}</h3>
            <p className="font-mono font-bold mb-8 flex-1 opacity-80">{res.description}</p>
            
            <Button 
              onClick={() => window.open(res.link, '_blank')}
              className="w-full flex items-center justify-center gap-2 bg-black text-white hover:bg-gray-800 hover:text-white border-white"
            >
              Access Resource <ExternalLink size={18} />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}

// -- Main App Component --

export default function App() {
  const [view, setView] = useState<ViewState>('DASHBOARD');
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [problems, setProblems] = useState<Problem[]>(MOCK_PROBLEMS);
  const [stats, setStats] = useState<UserStats>(MOCK_USER_STATS);

  // Gamification Logic: Solving a problem
  const handleSolve = (id: number) => {
    setProblems(prev => prev.map(p => p.id === id ? { ...p, solved: true } : p));
    setStats(prev => ({
      ...prev,
      xp: prev.xp + 50,
      problemsSolved: prev.problemsSolved + 1,
      // Simple mock update for chart
      recentActivity: [...prev.recentActivity.slice(1), prev.recentActivity[6] + 1]
    }));
  };

  const navigateToProblem = (problem: Problem) => {
    setSelectedProblem(problem);
    setView('SOLVER');
  };

  const renderContent = () => {
    if (view === 'SOLVER' && selectedProblem) {
      return (
        <Solver 
          problem={selectedProblem} 
          onBack={() => setView('PROBLEMS')} 
          onSolve={handleSolve}
        />
      );
    }

    switch (view) {
      case 'DASHBOARD': return <Dashboard userStats={stats} setView={setView} />;
      case 'PROBLEMS': return <ProblemList problems={problems} onSelect={navigateToProblem} />;
      case 'PROFILE': return <Profile userStats={stats} />;
      case 'RESOURCES': return <Resources />;
      default: return <Dashboard userStats={stats} setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen font-sans text-neo-black bg-[#f0f0f0] flex">
      <Sidebar currentView={view} setView={setView} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      
      <main className="flex-1 p-4 md:p-8 overflow-y-auto h-screen relative">
        <div className="md:hidden mb-6 flex justify-between items-center">
           <button onClick={() => setMobileOpen(true)} className="p-2 border-2 border-black bg-white">
             <Menu />
           </button>
           <h1 className="font-black uppercase">The DSA With Arif</h1>
        </div>

        {renderContent()}
      </main>
    </div>
  );
}
