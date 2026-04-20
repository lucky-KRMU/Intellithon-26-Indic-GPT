import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Sidebar } from './components/Sidebar';
import { SemanticSearch } from './components/SemanticSearch';
import { RatioExtractor } from './components/RatioExtractor';
import { CrossLingualMapper } from './components/CrossLingualMapper';
import { CitationGraph } from './components/CitationGraph';

// export default function App() {
//   const [activeTab, setActiveTab] = useState('search');

//   return (
//     <div className="flex h-screen w-full bg-background text-text overflow-hidden font-sans relative">
//       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
//       <main className="flex-1 overflow-y-auto relative scroll-smooth flex flex-col">
//         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
//         <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[40%] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             transition={{ duration: 0.2 }}
//             className="flex-1 relative z-10 w-full h-full flex flex-col"
//           >
//             {activeTab === 'search' && <SemanticSearch />}
//             {activeTab === 'ratio' && <RatioExtractor />}
//             {activeTab === 'mapper' && <CrossLingualMapper />}
//             {activeTab === 'graph' && <CitationGraph />}
//           </motion.div>
//         </AnimatePresence>
//       </main>
//     </div>
//   );
// }
