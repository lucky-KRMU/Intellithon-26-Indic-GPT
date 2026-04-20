import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileOutput, ScanLine, FileText, CheckCircle } from 'lucide-react';

export function RatioExtractor() {
  const [text, setText] = useState('');
  const [isExtracting, setIsExtracting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  

  return (
    <div className="h-full flex flex-col max-w-6xl mx-auto w-full p-6 lg:p-10 relative z-10">
       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-serif flex items-center gap-3">
          <FileOutput className="text-accent" /> Ratio Decidendi Extractor
        </h2>
        <p className="text-textMuted max-w-3xl">
          Paste a full court judgment below. InLegalBERT will analyze the text to identify and extract the core legal principle (ratio decidendi) binding on future cases.
        </p>
      </motion.div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1 min-h-0">
        {/* Input Section */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col glass-panel rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center gap-2"><FileText size={18} /> Judgment Text</h3>
            <button 
              onClick={() => setText("The appellant was charged under section 7 of the Essential Commodities Act. It is a fundamental principle of English criminal jurisprudence that to constitute an offence there must be a wrongful act and a wrongful intention. Mens rea is an essential ingredient of a criminal offence unless the statute expressly or by necessary implication excludes it. The legislature can create strict liability offences, but clear wording is required. In the present case, we find no such exclusion.")}
              className="text-xs text-secondary hover:underline"
            >
              Load Sample Case
            </button>
          </div>
          
        </motion.div>
        </div>
    </div>
  );
}
