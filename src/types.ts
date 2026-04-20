export interface Citation {
  text: string;
  valid: boolean;
  hallucinated?: boolean;
}

export interface SearchResult {
  id: number;
  title: string;
  court: string;
  year: string;
  matchScore: number;
  summary: string;
  ratio: string;
  citations: Citation[];
}

export interface GraphNode {
  id: string;
  label: string;
  x: number;
  y: number;
  type: 'central' | 'citing' | 'cited' | 'overruled';
  year: number;
  score: number;
}

export interface GraphLink {
  source: string;
  target: string;
  type: 'supports' | 'distinguishes' | 'overrules';
}
