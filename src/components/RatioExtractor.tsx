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

    </div>
  );
}
