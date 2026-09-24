import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Video, FileText, Mic, Sparkles, Search, Database } from 'lucide-react';

export const WhyTrySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const reasons = [
    'Work with your own content using AI.',
    'Search through multimedia content more efficiently.',
    'Reduce repetitive manual work.',
    'Explore information faster.',
    'Build a more useful personal knowledge base.',
    'Experiment with AI-powered multimedia workflows.',
    'Try the platform with the referral reward.',
  ];

  const workflowNodes = [
    {
      title: 'Your Content',
      subtitle: 'Raw Multimedia',
      icon: Video,
      description: 'Upload video lectures, audio recordings, podcasts, interviews, or PDF documents.',
      items: ['Video clips', 'Audio tracks', 'Research docs'],
      color: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/20',
    },
    {
      title: 'Muse.ai',
      subtitle: 'Workspace Hub',
      icon: Database,
      description: 'Your personal AI agent workspace receives, categorizes, and organizes raw media.',
      items: ['Unified library', 'Media player', 'Secure storage'],
      color: 'border-blue-500/40 text-blue-400 bg-blue-950/20',
    },
    {
      title: 'AI Processing',
      subtitle: 'Neural Indexing',
      icon: Sparkles,
      description: 'Understands speech, visual scenes, and textual meaning simultaneously.',
      items: ['Transcription', 'Semantic indexing', 'Audio analysis'],
      color: 'border-indigo-500/40 text-indigo-400 bg-indigo-950/20',
    },
    {
      title: 'Output & Value',
      subtitle: 'Insights & Search',
      icon: Search,
      description: 'Instant keyword search to exact timestamps, smart summaries, and productivity gains.',
      items: ['Timestamp search', 'Fast answers', 'Higher productivity'],
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20',
    },
  ];

  return (
    <section className="py-20 border-t border-white/5 relative bg-[#090e18]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            Value Proposition
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight [text-wrap:balance]">
            Why You Might Want to Try It
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Whether you manage hours of meeting recordings, educational videos, or large collections of multimedia research, Muse.ai offers a modern way to turn passive files into actionable knowledge.
          </p>
        </div>

        {/* Interactive Visual: Your Content -> Muse.ai -> AI -> Insights / Search / Productivity */}
        <div className="mb-16 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">Content Transformation Pipeline</span>
              <h3 className="font-display text-lg font-bold text-white">How Information Moves Through Muse.ai</h3>
            </div>
            <div className="text-xs text-slate-400 hidden sm:block">
              Click any stage to inspect
            </div>
          </div>

          {/* Pipeline flow */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {workflowNodes.map((node, idx) => {
              const Icon = node.icon;
              const isSelected = activeStep === idx;
              return (
                <div key={node.title} className="relative flex flex-col">
                  {/* Connector arrow on desktop */}
                  {idx < workflowNodes.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-500">
                      <ArrowRight className="w-5 h-5 text-cyan-500/60 animate-pulse" />
                    </div>
                  )}

                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer h-full ${
                      isSelected
                        ? 'bg-white/10 border-cyan-400 shadow-lg shadow-cyan-500/10'
                        : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${node.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                    </div>

                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      {node.subtitle}
                    </div>
                    <div className="font-display text-base font-bold text-white mb-2">
                      {node.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {node.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                      {node.items.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Concise visual summary banner */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-300 text-center">
            <span className="text-cyan-300">Your Content</span>
            <span className="text-slate-500">→</span>
            <span className="text-blue-300">Muse.ai</span>
            <span className="text-slate-500">→</span>
            <span className="text-indigo-300">AI</span>
            <span className="text-slate-500">→</span>
            <span className="text-emerald-300">Insights / Search / Productivity</span>
          </div>
        </div>

        {/* Benefit Statements Checklist */}
        <div className="max-w-3xl mx-auto glass-panel rounded-2xl p-6 sm:p-8 border border-white/10">
          <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            Key Reasons to Join
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200 leading-snug">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
