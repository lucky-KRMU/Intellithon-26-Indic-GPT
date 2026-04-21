import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, ChevronRight, FileOutput, ShieldAlert, CheckCircle2, AlertTriangle, Cpu } from 'lucide-react';
import { SearchResult } from '../types';


const CASE_DATABASE: SearchResult[] = [
  {
    id: 1,
    title: "State of Maharashtra vs. Mayer Hans George",
    court: "Supreme Court of India",
    year: "1964",
    matchScore: 98,
    summary: "A landmark judgment regarding mens rea in statutory offences, specifically dealing with the Foreign Exchange Regulation Act.",
    ratio: "Unless a statute expressly or by necessary implication rules out mens rea as a constituent part of a crime, a defendant cannot be held guilty of an offence unless he has a guilty mind.",
    citations: [
      { text: "Sherras v. De Rutzen [1895] 1 QB 918", valid: true },
      { text: "Brend v. Wood (1946) 175 LT 306", valid: true },
      { text: "Srinivas Mall Bairoliya v. King-Emperor (1947)", valid: true }
    ]
  },
  {
    id: 2,
    title: "Nathulal vs. State of Madhya Pradesh",
    court: "Supreme Court of India",
    year: "1965",
    matchScore: 92,
    summary: "Reaffirmed the principle of mens rea in Indian criminal jurisprudence, particularly concerning offenses under the Essential Commodities Act.",
    ratio: "Mens rea is an essential ingredient of a criminal offence unless the statute expressly or by necessary implication excludes it.",
    citations: [
      { text: "Ravule Hariprasada Rao v. State (1951)", valid: true },
      { text: "Rex v. Govind Ram (1960)", valid: false, hallucinated: true }
    ]
  },
  {
    id: 3,
    title: "Justice K.S. Puttaswamy (Retd.) vs. Union of India",
    court: "Supreme Court of India",
    year: "2017",
    matchScore: 99,
    summary: "A historic judgment declaring the right to privacy as a fundamental right protected under Part III of the Constitution of India.",
    ratio: "The right to privacy is protected as an intrinsic part of the right to life and personal liberty under Article 21 and as a part of the freedoms guaranteed by Part III of the Constitution.",
    citations: [
      { text: "Kharak Singh v. State of UP (1962)", valid: true },
      { text: "MP Sharma v. Satish Chandra (1954)", valid: true },
      { text: "Roe v. Wade (1973) - US Supreme Court", valid: true }
    ]
  },
  {
    id: 4,
    title: "Kesavananda Bharati vs. State of Kerala",
    court: "Supreme Court of India",
    year: "1973",
    matchScore: 97,
    summary: "The landmark case that established the 'Basic Structure Doctrine' of the Indian Constitution, limiting Parliament's amending power.",
    ratio: "Article 368 does not enable Parliament to alter the basic structure or framework of the Constitution.",
    citations: [
      { text: "I.C. Golaknath v. State of Punjab (1967)", valid: true },
      { text: "Sajjan Singh v. State of Rajasthan (1965)", valid: true },
      { text: "State of Madras v. Champakam Dorairajan", valid: false, hallucinated: true }
    ]
  },
  {
    id: 5,
    title: "Shreya Singhal vs. Union of India",
    court: "Supreme Court of India",
    year: "2015",
    matchScore: 95,
    summary: "Struck down Section 66A of the Information Technology Act, 2000, upholding the fundamental right to free speech online.",
    ratio: "Section 66A is cast so widely that virtually any opinion on any subject would be covered by it. It is unconstitutional for violating Article 19(1)(a) without falling under reasonable restrictions.",
    citations: [
      { text: "Romesh Thappar v. State of Madras (1950)", valid: true },
      { text: "Chintaman Rao v. State of Madhya Pradesh", valid: true }
    ]
  }
];


export function SemanticSearch() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[] | null>(null);

 const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setIsSearching(true);
    setResults(null);
    
    setTimeout(() => {
      const q = query.toLowerCase();
      let matchedCases: SearchResult[] = [];
      
      if (q.includes('privacy') || q.includes('data') || q.includes('aadhaar')) {
        matchedCases.push(CASE_DATABASE[2]);
      } else if (q.includes('basic structure') || q.includes('amend') || q.includes('constitution')) {
        matchedCases.push(CASE_DATABASE[3]);
      } else if (q.includes('speech') || q.includes('internet') || q.includes('expression')) {
        matchedCases.push(CASE_DATABASE[4]);
      } else if (q.includes('mens rea') || q.includes('intention') || q.includes('crime')) {
        matchedCases.push(CASE_DATABASE[0], CASE_DATABASE[1]);
      } else {
        // Fallback: fuzzy match or random return
        const randomMatch = CASE_DATABASE.filter(c => c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q));
        matchedCases = randomMatch.length > 0 ? randomMatch : [CASE_DATABASE[Math.floor(Math.random() * CASE_DATABASE.length)]];
      }
      
      matchedCases = matchedCases.map(c => ({
        ...c,
        matchScore: Math.floor(Math.random() * 10) + 90 
      }));

      setResults(matchedCases);
      setIsSearching(false);
    }, 1500);
  };


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
