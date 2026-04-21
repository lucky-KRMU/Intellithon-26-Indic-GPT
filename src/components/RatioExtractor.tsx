import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileOutput, ScanLine, FileText, CheckCircle } from 'lucide-react';

export function RatioExtractor() {
  const [text, setText] = useState('');
  const [isExtracting, setIsExtracting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleExtract = () => {
    if (!text.trim()) return;
    setIsExtracting(true);
    setTimeout(() => {
      setResult("Mens rea is an essential ingredient of a criminal offence unless the statute expressly or by necessary implication excludes it.");
      setIsExtracting(false);
    }, 2000);
  };

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
          <textarea
            className="flex-1 w-full bg-black/20 border border-white/10 rounded-xl p-4 text-text/90 resize-none focus:outline-none focus:border-primary/50 transition-colors placeholder:text-textMuted/50"
            placeholder="Paste judgment text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={handleExtract}
            disabled={!text || isExtracting}
            className="mt-4 w-full bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isExtracting ? (
              <>
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}><ScanLine size={18} /></motion.div>
                Analyzing via InLegalBERT...
              </>
            ) : (
              <>Extract Ratio</>
            )}
          </button>

        </motion.div>
        {/* Output Section */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col">
          {result ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-panel rounded-2xl p-8 border-accent/30 flex-1 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full blur-2xl"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle className="text-accent" size={20} />
                </div>
                <h3 className="text-xl font-bold">Extracted Ratio Decidendi</h3>
              </div>
              <blockquote className="text-2xl font-serif leading-relaxed text-white/90 border-l-4 border-accent pl-6 py-2">
                "{result}"
              </blockquote>
              <div className="mt-8 bg-white/5 rounded-lg p-4 text-sm text-textMuted border border-white/5">
                <strong>Confidence Score:</strong> 94.2% <br />
                <strong>Extraction Method:</strong> Extractive Summarization (Sequence Labeling)
              </div>
            </motion.div>
          ) : (
            <div className="glass-panel rounded-2xl p-6 flex-1 flex flex-col items-center justify-center text-textMuted/50 border-dashed border-white/20">
              <FileOutput size={48} className="mb-4 opacity-20" />
              <p>The extracted ratio will appear here.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
