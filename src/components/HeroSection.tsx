import React from 'react';
import { Copy, Check, ExternalLink, Sparkles, Clock, ShieldCheck, Zap } from 'lucide-react';
import { REFERRAL_DETAILS } from '../config/referralConfig';

interface HeroSectionProps {
  inviteCode: string;
  referralUrl: string;
  isCopied: boolean;
  onCopy: () => void;
  onJoin: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  inviteCode,
  isCopied,
  onCopy,
  onJoin,
}) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glow & grid */}
      <div className="absolute inset-0 bg-ambient-grid opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/15 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Subtle contextual metadata kicker without static pill sandwich */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>Community Referral Grant · 2026</span>
          </div>

          {/* Headline with text-wrap: balance */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 [text-wrap:balance] leading-[1.12]">
            Get <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">1 Billion</span> Muse.ai Tokens
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
            Join Muse.ai using my invite code and unlock 1 billion tokens. You get the reward, and I get the referral reward too.
          </p>

          {/* Prominent Referral Code Card */}
          <div className="max-w-xl mx-auto glass-panel-elevated rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/30">
            {/* Subtle highlight sheen */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col items-center">
              <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-3 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                MY INVITE CODE
              </span>

              {/* Big code display box */}
              <div
                onClick={onCopy}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onCopy()}
                className="w-full max-w-md bg-[#0b1120]/90 border border-cyan-500/30 hover:border-cyan-400 rounded-xl py-4 px-6 mb-6 flex items-center justify-between cursor-pointer group transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/10"
                title="Click to copy invite code"
              >
                <div className="text-left">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Invite Code</div>
                  <div className="font-mono-code text-2xl sm:text-3xl font-extrabold tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                    {inviteCode}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-300 group-hover:bg-cyan-500/20 transition-all">
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </div>
              </div>

              {/* Primary action buttons */}
              <div className="w-full max-w-md flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onCopy}
                  className={`flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer shadow-lg active:scale-[0.98] ${
                    isCopied
                      ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-cyan-500/25 hover:shadow-cyan-500/40'
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
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-slate-100 bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/30 transition-all duration-200 cursor-pointer active:scale-[0.98]"
                >
                  <span>JOIN MUSE.AI</span>
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                </button>
              </div>

              {/* Equal reward banner */}
              <div className="mt-6 pt-5 border-t border-white/10 w-full flex flex-col items-center">
                <div className="text-sm font-bold text-slate-200 tracking-wide flex items-center gap-2">
                  <span className="text-cyan-400">1B Tokens for You</span>
                  <span className="text-slate-500">+</span>
                  <span className="text-indigo-400">1B Tokens for Me</span>
                </div>

                {/* 48-Hour Redemption Tip */}
                <div className="mt-3 flex items-center gap-1.5 text-xs text-amber-300/90 bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>Redeem in Settings within 48 hours of joining</span>
                </div>

                {/* Small disclaimer */}
                <p className="mt-4 text-[11px] text-slate-400 italic max-w-md text-center leading-normal">
                  Referral rewards are subject to Muse.ai's current referral program terms and eligibility requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Direct Official Signup Link
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-slate-600">·</span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-indigo-400" />
              Instant 1-Click Code Copy
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-slate-600">·</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              {REFERRAL_DETAILS.combinedTokensHuman} Total Tokens Generated
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
