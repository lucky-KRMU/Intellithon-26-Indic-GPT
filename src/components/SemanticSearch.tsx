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
  
    </div>
  );
}
