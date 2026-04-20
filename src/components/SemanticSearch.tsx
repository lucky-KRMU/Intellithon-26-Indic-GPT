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


      <AnimatePresence>
        {results && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex-1 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-xl font-semibold flex items-center gap-2"><BookOpen size={20} className="text-secondary" /> Retrieved Precedents</h3>
              <span className="text-sm bg-white/5 px-3 py-1 rounded-full text-textMuted border border-white/10">Hybrid Search (Dense + Sparse)</span>
            </div>

            <div className="grid gap-6">
              {results.map((result, idx) => (
                <motion.div key={result.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="glass-panel rounded-xl p-6 hover:border-white/20 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                        {result.title} <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-sm text-textMuted mt-1">{result.court} • {result.year}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-2xl font-bold text-success">{result.matchScore}%</div>
                      <div className="text-xs text-textMuted">Relevance</div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-text/80 leading-relaxed mb-6 bg-black/20 p-4 rounded-lg border border-white/5">{result.summary}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-surfaceHighlight/50 rounded-lg p-4 border border-white/5">
                      <h5 className="text-xs font-bold text-accent uppercase tracking-wider mb-2 flex items-center gap-2"><FileOutput size={14} /> Ratio Decidendi</h5>
                      <p className="text-sm font-serif italic text-text/90">"{result.ratio}"</p>
                    </div>

                    <div className="bg-surfaceHighlight/50 rounded-lg p-4 border border-white/5">
                      <h5 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3 flex items-center gap-2"><ShieldAlert size={14} /> Citation Validator</h5>
                      <div className="flex flex-col gap-2">
                        {result.citations.map((cite, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            {cite.valid ? <CheckCircle2 size={16} className="text-success shrink-0 mt-0.5" /> : <AlertTriangle size={16} className="text-error shrink-0 mt-0.5 animate-pulse" />}
                            <div>
                              <span className={cite.valid ? 'text-text/80' : 'text-error line-through decoration-error/50'}>{cite.text}</span>
                              {cite.hallucinated && <span className="block text-xs text-error mt-0.5 font-medium">⚠ Hallucinated Citation Detected.</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
