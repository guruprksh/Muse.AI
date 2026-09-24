import React from 'react';
import { Copy, Check, ExternalLink, Sparkles, Heart } from 'lucide-react';
import { INVITE_CODE, REFERRAL_DETAILS } from '../config/referralConfig';

interface FinalCTASectionProps {
  onCopy: () => void;
  onJoin: () => void;
  isCopied: boolean;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onCopy,
  onJoin,
  isCopied,
}) => {
  return (
    <section className="py-24 relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-[#080c14] via-[#0d1527] to-[#080c14]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-600/15 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 mx-auto flex items-center justify-center shadow-lg shadow-cyan-500/25 mb-6">
          <Sparkles className="w-6 h-6 text-white" />
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight [text-wrap:balance]">
          Ready to Try Muse.ai?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed [text-wrap:balance]">
          Use my invite code and start with the available referral reward.
        </p>

        {/* Invite Code Box */}
        <div className="inline-flex items-center gap-3 bg-[#0b1222] border border-cyan-500/40 rounded-2xl py-3 px-6 mb-8 shadow-xl shadow-cyan-950/40">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Invite Code:
          </span>
          <span className="font-mono-code text-2xl font-black text-white tracking-widest">
            {INVITE_CODE}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8">
          <button
            onClick={onCopy}
            className={`w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer shadow-lg active:scale-[0.98] ${
              isCopied
                ? 'bg-emerald-600 text-white shadow-emerald-500/25'
                : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-cyan-500/30'
            }`}
          >
            {isCopied ? (
              <>
                <Check className="w-4 h-4 stroke-[2.5]" />
                <span>✓ Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>COPY INVITE CODE</span>
              </>
            )}
          </button>

          <button
            onClick={onJoin}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200 cursor-pointer active:scale-[0.98]"
          >
            <span>JOIN MUSE.AI</span>
            <ExternalLink className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        {/* Gratitude Sign-off */}
        <div className="flex items-center justify-center gap-1.5 text-sm font-semibold text-slate-300">
          <span>Thanks for using my invite!</span>
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
        </div>
      </div>
    </section>
  );
};
