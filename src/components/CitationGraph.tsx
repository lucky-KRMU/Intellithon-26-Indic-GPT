import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, Info } from 'lucide-react';
import { GraphNode, GraphLink } from '../types';

// const MOCK_NODES: GraphNode[] = [
//   { id: 'n1', label: 'State of Maharashtra vs. Mayer Hans George', type: 'central', year: 1964, score: 100, x: 50, y: 50 },
//   { id: 'n2', label: 'Sherras v. De Rutzen', type: 'cited', year: 1895, score: 80, x: 20, y: 30 },
//   { id: 'n3', label: 'Brend v. Wood', type: 'cited', year: 1946, score: 75, x: 80, y: 30 },
//   { id: 'n4', label: 'Nathulal vs. State of MP', type: 'citing', year: 1965, score: 90, x: 30, y: 80 },
//   { id: 'n5', label: 'Kartar Singh v. State of Punjab', type: 'citing', year: 1994, score: 85, x: 70, y: 80 },
//   { id: 'n6', label: 'Srinivas Mall Bairoliya', type: 'cited', year: 1947, score: 70, x: 50, y: 15 },
// ];

// const MOCK_LINKS: GraphLink[] = [
//   { source: 'n2', target: 'n1', type: 'supports' },
//   { source: 'n3', target: 'n1', type: 'supports' },
//   { source: 'n6', target: 'n1', type: 'supports' },
//   { source: 'n1', target: 'n4', type: 'supports' },
//   { source: 'n1', target: 'n5', type: 'distinguishes' },
// ];

// export function CitationGraph() {
//   const [selectedNode, setSelectedNode] = useState<GraphNode | null>(MOCK_NODES[0]);

//   return (
//     <div className="h-full flex flex-col max-w-6xl mx-auto w-full p-6 lg:p-10 relative z-10">
//       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
//         <h2 className="text-3xl lg:text-4xl font-bold mb-2 font-serif flex items-center gap-3">
//           <Network className="text-primary" /> Citation Graph Visualizer
//         </h2>
//         <p className="text-textMuted max-w-3xl text-sm">
//           Interactive 2D graph mapping precedential relationships. Green edges support the central case, orange edges distinguish.
//         </p>
//       </motion.div>

//       <div className="flex-1 flex gap-6 min-h-0">
//         <div className="flex-1 glass-panel rounded-2xl relative overflow-hidden bg-black/40 border border-white/10 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]">
//            <svg width="100%" height="100%" className="absolute inset-0">
//              {MOCK_LINKS.map((link, i) => {
//                const sourceNode = MOCK_NODES.find(n => n.id === link.source)!;
//                const targetNode = MOCK_NODES.find(n => n.id === link.target)!;
//                const isSupport = link.type === 'supports';
//                return (
//                  <motion.line 
//                    key={i}
//                    initial={{ pathLength: 0, opacity: 0 }}
//                    animate={{ pathLength: 1, opacity: 1 }}
//                    transition={{ duration: 1, delay: i * 0.2 }}
//                    x1={`${sourceNode.x}%`} y1={`${sourceNode.y}%`}
//                    x2={`${targetNode.x}%`} y2={`${targetNode.y}%`}
//                    stroke={isSupport ? '#10B981' : '#F59E0B'}
//                    strokeWidth="2"
//                    strokeDasharray={isSupport ? "0" : "5,5"}
//                    className="opacity-50 hover:opacity-100 transition-opacity"
//                  />
//                );
//              })}
             
//              {MOCK_NODES.map((node, i) => {
//                 const isCentral = node.type === 'central';
//                 const isSelected = selectedNode?.id === node.id;
//                 return (
//                   <g key={i} className="cursor-pointer transition-transform hover:scale-110" onClick={() => setSelectedNode(node)}>
//                     <motion.circle 
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ type: 'spring', bounce: 0.5, delay: i * 0.1 }}
//                       cx={`${node.x}%`} cy={`${node.y}%`} 
//                       r={isCentral ? 24 : 16}
//                       fill={isCentral ? '#4F46E5' : (node.type === 'cited' ? '#0EA5E9' : '#8B5CF6')}
//                       className={`shadow-xl ${isSelected ? 'stroke-white stroke-[3px]' : 'stroke-white/20 stroke-2'}`}
//                     />
//                     <text x={`${node.x}%`} y={`${node.y + (isCentral ? 8 : 5)}%`} textAnchor="middle" fill="white" fontSize="10" className="pointer-events-none drop-shadow-md font-medium bg-black/50">
//                       {node.label.length > 15 ? node.label.substring(0,15) + '...' : node.label}
//                     </text>
//                   </g>
//                 )
//              })}
//            </svg>
//         </div>

//         <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="w-80 glass-panel rounded-2xl p-6 flex flex-col h-full overflow-y-auto">
//           <div className="flex items-center gap-2 mb-6 text-textMuted border-b border-white/10 pb-4">
//             <Info size={18} /> <h3 className="font-semibold text-sm">Node Details</h3>
//           </div>
          
//           {selectedNode ? (
//             <div className="flex flex-col gap-4">
//                <div>
//                  <div className="text-xs text-textMuted uppercase tracking-wider mb-1">Case Name</div>
//                  <div className="text-lg font-bold text-white leading-tight">{selectedNode.label}</div>
//                </div>
//                <div className="grid grid-cols-2 gap-4">
//                  <div className="bg-white/5 p-3 rounded-lg border border-white/5">
//                    <div className="text-xs text-textMuted mb-1">Year</div>
//                    <div className="font-mono text-primary font-bold">{selectedNode.year}</div>
//                  </div>
//                  <div className="bg-white/5 p-3 rounded-lg border border-white/5">
//                    <div className="text-xs text-textMuted mb-1">Type</div>
//                    <div className="capitalize font-medium text-text/90">{selectedNode.type}</div>
//                  </div>
//                </div>
               
//                <div className="mt-4 pt-4 border-t border-white/10">
//                  <div className="text-xs text-textMuted uppercase tracking-wider mb-3">Connections</div>
//                  <ul className="space-y-2">
//                    {MOCK_LINKS.filter(l => l.source === selectedNode.id || l.target === selectedNode.id).map((l, i) => {
//                      const isSource = l.source === selectedNode.id;
//                      const otherNodeId = isSource ? l.target : l.source;
//                      const otherNode = MOCK_NODES.find(n => n.id === otherNodeId)!;
//                      return (
//                        <li key={i} className="text-sm flex items-center justify-between bg-black/20 p-2 rounded border border-white/5">
//                          <span className="truncate w-3/5" title={otherNode.label}>{otherNode.label}</span>
//                          <span className={`text-[10px] px-1.5 py-0.5 rounded ${l.type === 'supports' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>
//                            {l.type}
//                          </span>
//                        </li>
//                      )
//                    })}
//                  </ul>
//                </div>
//             </div>
//           ) : (
//             <div className="text-center text-textMuted/50 my-auto">Select a node to view details</div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// }
