import React from 'react';
import { Copy, Check, ExternalLink, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { INVITE_CODE, REFERRAL_URL } from '../config/referralConfig';

interface HowToRedeemSectionProps {
  onCopy: () => void;
  onJoin: () => void;
  isCopied: boolean;
}

export const HowToRedeemSection: React.FC<HowToRedeemSectionProps> = ({
  onCopy,
  onJoin,
  isCopied,
}) => {
  const steps = [
    {
      step: 'STEP 1',
      title: 'Copy my invite code',
      description: 'Click the Copy Invite Code button at the top of the page or copy it directly below.',
      actionType: 'copy',
    },
    {
      step: 'STEP 2',
      title: 'Open Muse.ai',
      description: "Click JOIN MUSE.AI to open Muse.ai's official signup/referral page.",
      actionType: 'join',
    },
    {
      step: 'STEP 3',
      title: 'Create your account',
      description: 'Follow the Muse.ai registration process. The referral/invite code should be entered wherever Muse.ai requests or accepts referral information.',
      actionType: 'info',
    },
    {
      step: 'STEP 4',
      title: 'Apply the invite code',
      description: `Enter ${INVITE_CODE}. Redeem in Settings within 48 hours of joining (if the referral link automatically applies the code, you may not need to manually enter it).`,
      actionType: 'code_display',
    },
    {
      step: 'STEP 5',
      title: 'Complete the required steps',
      description: 'Complete any eligibility or activation steps shown by Muse.ai.',
      actionType: 'info',
    },
    {
      step: 'STEP 6',
      title: 'Receive your reward',
      description: "Once the referral qualifies, the applicable reward should be credited according to Muse.ai's current referral terms.",
      actionType: 'celebrate',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 border-t border-white/5 relative bg-[#090e18]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            Simple 6-Step Walkthrough
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight [text-wrap:balance]">
            How to Get Your 1 Billion Tokens
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Follow this clear, step-by-step roadmap to ensure your referral links accurately and your reward is credited smoothly.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-white/20 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono font-bold flex items-center justify-center shrink-0 text-sm">
                  0{index + 1}
                </div>

                <div>
                  <div className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase mb-1">
                    {item.step}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Step Action Area */}
              <div className="shrink-0 flex items-center gap-3 pl-16 md:pl-0">
                {item.actionType === 'copy' && (
                  <button
                    onClick={onCopy}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-300">✓ Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Invite Code</span>
                      </>
                    )}
                  </button>
                )}

                {item.actionType === 'join' && (
                  <button
                    onClick={onJoin}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>JOIN MUSE.AI</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                )}

                {item.actionType === 'code_display' && (
                  <div className="flex items-center gap-2 bg-slate-900/90 border border-cyan-500/30 px-3.5 py-1.5 rounded-lg">
                    <span className="font-mono-code text-sm font-bold text-cyan-300 tracking-wider">
                      {INVITE_CODE}
                    </span>
                    <button
                      onClick={onCopy}
                      className="p-1 hover:text-cyan-300 text-slate-400 transition-colors"
                      title="Copy code"
                      aria-label="Copy code"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {item.actionType === 'celebrate' && (
                  <div className="font-display font-bold text-sm text-cyan-300 bg-cyan-500/10 px-4 py-2 rounded-xl border border-cyan-500/20 whitespace-nowrap">
                    That's it. 🎉
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
