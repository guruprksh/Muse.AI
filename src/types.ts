export type AgentStatus = 'idle' | 'running' | 'completed' | 'error' | 'paused';

export interface AgentLog {
  id: string;
  agentId: 'ideator' | 'planner' | 'prompt_engineer' | 'asset_engine' | 'auditor';
  agentName: string;
  timestamp: string;
  level: 'info' | 'success' | 'warning' | 'error';
  message: string;
  data?: any;
}

export interface StrategicBrief {
  keyword: string;
  theme: string;
  subtitle: string;
  targetAgeBracket: 'Toddlers (Ages 2-4)' | 'Kids (Ages 4-8)' | 'Middle Grade (Ages 8-12)' | 'Teens & Adults (Ages 12+)';
  titleOptions: string[];
  selectedTitle: string;
  pageCount: number;
  kdpKeywords: string[]; // Exactly 7 KDP keywords
  kdpCategories: string[];
  uniqueAngle: string;
  trimSize: '8.5" x 11"' | '8.25" x 8.25"' | '6" x 9"';
  paperType: 'Black & White Interior with White Paper' | 'Black & White Interior with Cream Paper';
  marketDemandScore: number; // 0-100
  estimatedRoyaltyPerSale: number;
}

export type PageType = 
  | 'front_cover' 
  | 'belongs_to' 
  | 'copyright' 
  | 'intro' 
  | 'illustration' 
  | 'blank_bleed' 
  | 'activity' 
  | 'certificate' 
  | 'back_cover';

export interface PageItem {
  pageNumber: number;
  pageType: PageType;
  title: string;
  description: string;
  isSingleSided: boolean;
  hasIllustration: boolean;
  status: 'pending' | 'prompted' | 'generating' | 'completed' | 'error';
  illustrationPrompt?: string;
  negativePrompt?: string;
  lineArtStyle?: string;
  imageUrl?: string; // High-res image or SVG data URL
  svgContent?: string; // Crisp vector SVG path line-art
  complexityLevel?: 'simple' | 'medium' | 'detailed';
  complianceNotes?: string[];
}

export interface ComplianceCheckResult {
  passed: boolean;
  score: number; // 0-100
  details: string;
  flaggedItems?: string[];
}

export interface ComplianceReport {
  overallScore: number; // 0-100
  status: 'cleared' | 'warning' | 'flagged';
  badgeTitle: string;
  badgeIssuedAt: string;
  trademarkCheck: ComplianceCheckResult & { flaggedTerms: string[] };
  pageSymmetryCheck: ComplianceCheckResult & { totalPages: number; singleSidedRatio: number };
  marginBleedCheck: ComplianceCheckResult & { trimSize: string };
  kdpKeywordCheck: ComplianceCheckResult & { prohibitedTermsFound: string[] };
  clearanceCertificateId: string;
  recommendations: string[];
}

export interface BookProject {
  id: string;
  createdAt: string;
  updatedAt: string;
  keyword: string;
  currentAgentIndex: number; // 0 to 4
  autoPilot: boolean;
  brief: StrategicBrief | null;
  pages: PageItem[];
  complianceReport: ComplianceReport | null;
  agentStatuses: Record<string, AgentStatus>;
}
