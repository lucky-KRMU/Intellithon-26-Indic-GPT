import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, ChevronRight, FileOutput, ShieldAlert, CheckCircle2, AlertTriangle, Cpu } from 'lucide-react';
import { SearchResult } from '../types';


export function SemanticSearch() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[] | null>(null);

 

  return (
    <div className="h-full flex flex-col max-w-5xl mx-auto w-full p-6 lg:p-10 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-serif">Deep Legal Semantic Retrieval</h2>
        <p className="text-textMuted max-w-2xl mx-auto">
          Powered by InLegalBERT & Qdrant. Try searching for "privacy", "basic structure", "free speech", or "mens rea".
        </p>
      </motion.div>


    <motion.form onSubmit={handleSearch} className="relative group mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
        <div className="relative flex items-center bg-surfaceHighlight border border-white/10 rounded-2xl p-2 shadow-2xl">
          <Search className="w-6 h-6 text-textMuted ml-4" />
          <input 
            type="text" 
            placeholder="e.g., Application of mens rea in statutory offenses..."
            className="flex-1 bg-transparent border-none outline-none text-text px-4 py-3 text-lg placeholder:text-textMuted/60"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            type="submit" disabled={isSearching}
            className="bg-primary hover:bg-primaryHover text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 shadow-lg disabled:opacity-70"
          >
            {isSearching ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}><Cpu size={18} /></motion.div> : 'Search'}
          </button>
        </div>
      </motion.form>


    </div>
  );
}
