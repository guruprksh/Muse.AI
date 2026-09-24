import React from 'react';
import { Timer, ArrowRight, Copy, Check, Zap } from 'lucide-react';
import { INVITE_CODE } from '../config/referralConfig';

interface QuickStartBoxProps {
  onCopyAndJoin: () => void;
  isCopied: boolean;
}

export const QuickStartBox: React.FC<QuickStartBoxProps> = ({
  onCopyAndJoin,
  isCopied,
}) => {
  const steps = [
    'Copy the code.',
    'Click Join Muse.ai.',
    'Sign up for an account.',
    'Go to Settings (Web: General → Usage | Mobile: Redeem token).',
    'Enter code and confirm within 48h.',
    'Reward credited & redeem entry disappears!',
  ];

  return (
    <section className="py-14 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel-elevated rounded-2xl p-7 sm:p-9 border border-cyan-500/30 relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#0a1122] to-slate-950">
          {/* Subtle top ambient indicator */}
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            <Timer className="w-4 h-4 text-cyan-400" />
            <span>Fast Track</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
            Want to do it in 30 seconds?
          </h3>

          {/* 6 rapid bullet items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/5"
              >
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </div>
                <span className="text-xs sm:text-sm text-slate-200 font-medium">
                  {step}
                </span>
              </div>
            ))}
          </div>

          {/* Large CTA: COPY CODE & JOIN MUSE.AI */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <span>Invite Code:</span>
              <span className="font-mono font-bold text-cyan-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                {INVITE_CODE}
              </span>
            </div>

            <button
              onClick={onCopyAndJoin}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
            >
              <Zap className="w-4 h-4 text-cyan-200" />
              <span>COPY CODE & JOIN MUSE.AI</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
