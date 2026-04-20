import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Languages, ArrowRightLeft, BookOpen, Search } from 'lucide-react';

export function CrossLingualMapper() {
  const [sourceLang, setSourceLang] = useState('Hindi');
  const [query, setQuery] = useState('');
  const [isMapping, setIsMapping] = useState(false);
  const [mapped, setMapped] = useState(false);

  const handleMap = () => {
    if (!query) return;
    setIsMapping(true);
    setMapped(false);
    setTimeout(() => {
      setIsMapping(false);
      setMapped(true);
    }, 1500);
  };

  return (
    <div className="h-full flex flex-col max-w-5xl mx-auto w-full p-6 lg:p-10 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-serif flex items-center gap-3">
          <Languages className="text-secondary" /> Cross-Lingual Law Mapper
        </h2>
        <p className="text-textMuted max-w-3xl">
          Search for legal concepts in regional Indian languages. The system maps the semantic intent to English case law using aligned multilingual embeddings.
        </p>
      </motion.div>

      <div className="glass-panel rounded-2xl p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <select 
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
            className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-secondary/50 w-full md:w-48"
          >
            <option>Hindi</option>
            <option>Tamil</option>
            <option>Bengali</option>
            <option>Marathi</option>
          </select>
          <div className="flex-1 relative w-full">
            <input 
              type="text" 
              placeholder={`Enter query in ${sourceLang}... (e.g. "क्या हत्या के लिए इरादा जरूरी है?")`}
              className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-secondary/50 font-serif"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button
            onClick={handleMap}
            disabled={!query || isMapping}
            className="w-full md:w-auto bg-secondary hover:bg-secondary/80 text-white px-8 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
          >
            {isMapping ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}><Search size={18} /></motion.div> : 'Map Query'}
          </button>
        </div>
      </div>

      {mapped && (
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-surfaceHighlight/30 rounded-2xl p-6 border border-white/5 relative">
//             <h3 className="text-sm font-bold text-textMuted uppercase tracking-wider mb-4 flex items-center gap-2">
//               <Languages size={16} /> Mapped English Intent
//             </h3>
//             <p className="text-xl font-medium text-white mb-2">"Is intention necessary for murder?"</p>
//             <div className="absolute top-1/2 -right-4 md:-right-6 w-8 md:w-12 h-12 flex items-center justify-center z-10 translate-x-1/2 -translate-y-1/2">
//               <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
//                 <ArrowRightLeft className="text-secondary" size={18} />
//               </div>
//             </div>
//           </div>

//           <div className="glass-panel border-secondary/30 rounded-2xl p-6">
//              <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4 flex items-center gap-2">
//               <BookOpen size={16} /> Top Relevant English Precedent
//             </h3>
//             <h4 className="text-lg font-bold text-white mb-2">Virsa Singh vs. State of Punjab (1958)</h4>
//             <p className="text-sm text-text/80 mb-4 bg-black/20 p-3 rounded-lg border border-white/5">
//               Discusses the objective elements of murder under Section 300(c) of the IPC, explaining how intention to cause a particular bodily injury is determined.
//             </p>
//             <div className="text-xs text-textMuted font-mono bg-white/5 inline-block px-2 py-1 rounded">
//               Cosine Similarity: 0.892
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// }
