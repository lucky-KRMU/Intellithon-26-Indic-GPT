import React from 'react';
import { Search, Scale, Languages, Network, FileOutput } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  

  return (
    <div className="w-64 border-r border-white/10 glass-panel h-screen p-4 flex flex-col z-20 relative">
      <div className="flex items-center gap-3 mb-10 mt-2 px-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
          <Scale size={18} className="text-white" />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-gradient">Indic-Legal</h1>
      </div>
    </div>
  );
}
