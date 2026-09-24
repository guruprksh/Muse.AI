import React from 'react';
import { User, Users, Sparkles, AlertCircle, Clock, Gift, ShieldAlert } from 'lucide-react';
import { REFERRAL_DETAILS, INVITE_CODE } from '../config/referralConfig';

interface ReferralRewardSectionProps {
  onCopy: () => void;
  isCopied: boolean;
}

export const ReferralRewardSection: React.FC<ReferralRewardSectionProps> = ({
  onCopy,
  isCopied,
}) => {
  return (
    <section id="referral" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            Reciprocal Referral Model
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight [text-wrap:balance]">
            The Referral Reward
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Muse.ai operates a two-sided referral initiative designed so both the invited newcomer and the referring member benefit equally upon qualification.
          </p>
        </div>

        {/* Two large cards side by side with connector */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Left Card: YOU */}
            <div className="glass-panel-elevated rounded-2xl p-7 sm:p-9 border border-cyan-500/30 flex flex-col justify-between relative group hover:border-cyan-400 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-cyan-400" />
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                  NEW MEMBER REWARD
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white mt-1 mb-3">
                  YOU
                </h3>

                <div className="py-4 my-2">
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-white">
                    + 1 BILLION TOKENS
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-1">
                    1,000,000,000 Tokens
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Join using the invite/referral code and receive the applicable referral reward.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Enter code in Settings within 48h of account creation</span>
              </div>
            </div>

            {/* Right Card: ME */}
            <div className="glass-panel-elevated rounded-2xl p-7 sm:p-9 border border-indigo-500/30 flex flex-col justify-between relative group hover:border-indigo-400 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-indigo-400" />
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">
                  REFERRER REWARD
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white mt-1 mb-3">
                  ME
                </h3>

                <div className="py-4 my-2">
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-white">
                    + 1 BILLION TOKENS
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-1">
                    1,000,000,000 Tokens
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  I receive the corresponding referral reward when the referral qualifies.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <Gift className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Direct community invite code: <span className="font-mono text-slate-200">{INVITE_CODE}</span></span>
              </div>
            </div>
          </div>

          {/* Central Equal Value Highlight */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-slate-900 to-indigo-950/60 border border-cyan-500/30 shadow-xl shadow-cyan-950/40">
              <Sparkles className="w-5 h-5 text-cyan-300" />
              <span className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                YOU + ME = 2 BILLION TOKENS
              </span>
              <Sparkles className="w-5 h-5 text-indigo-300" />
            </div>
          </div>

          {/* Transparent program disclaimer */}
          <div className="mt-10 p-5 rounded-xl bg-slate-900/60 border border-white/10 text-xs text-slate-300 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-white block mb-0.5">Program Terms Notice:</strong>
              Rewards depend on Muse.ai's active referral program and its eligibility rules. Always verify the current terms before completing the referral. Token granting is managed solely by Muse.ai upon qualification.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
