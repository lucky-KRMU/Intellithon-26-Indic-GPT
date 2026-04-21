import { Search, Scale, Languages, Network, FileOutput } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const tabs = [
    { id: 'search', name: 'Semantic Search', icon: Search },
    { id: 'ratio', name: 'Ratio Extractor', icon: FileOutput },
    { id: 'mapper', name: 'Cross-Lingual Mapper', icon: Languages },
    { id: 'graph', name: 'Citation Graph', icon: Network },
  ];

  return (
    <div className="w-64 border-r border-white/10 glass-panel h-screen p-4 flex flex-col z-20 relative">
      <div className="flex items-center gap-3 mb-10 mt-2 px-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
          <Scale size={18} className="text-white" />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-gradient">Indic-Legal</h1>
      </div>

      <div className="flex-1 flex flex-col gap-2">
        <div className="text-xs font-semibold text-textMuted uppercase tracking-wider mb-2 px-2">Modules</div>
        {tabs.map(tab => {
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${active
                  ? 'bg-primary/20 text-primary border border-primary/30 shadow-inner'
                  : 'text-textMuted hover:bg-white/5 hover:text-text'
                }`}
            >
              <tab.icon size={18} className={active ? 'text-primary' : 'text-textMuted'} />
              {tab.name}
            </button>
          );
        })}
      </div>
      <div className="mt-auto pt-4 border-t border-white/10">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="w-2 h-2 rounded-full bg-success shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
          <span className="text-xs text-textMuted">InLegalBERT Engine Active</span>
        </div>
      </div>

    </div>
  );
}
