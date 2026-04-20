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

    </div>
  );
}
