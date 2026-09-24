import React, { useState } from 'react';
import {
  Copy,
  Check,
  ExternalLink,
  ArrowDown,
  Smartphone,
  Globe,
  CheckCircle2,
  XCircle,
  HelpCircle,
  GitBranch,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';
import { INVITE_CODE, REFERRAL_URL, REFERRAL_DETAILS } from '../config/referralConfig';

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
  const [platformTab, setPlatformTab] = useState<'both' | 'web' | 'mobile'>('both');

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
      title: 'Apply the invite code in Settings',
      description: `Enter ${INVITE_CODE}. On Web: Settings → General → Usage → Redeem invite code. On Mobile: Settings → Redeem token. Enter within 48 hours of joining.`,
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
      description: "Once accepted, 1 billion tokens are credited and the redeem entry disappears. Reward is subject to Muse.ai's current terms.",
      actionType: 'celebrate',
    },
  ];

  const failureReasons = [
    { label: 'Invalid', desc: 'Code has a typo or formatting error' },
    { label: 'Used up', desc: 'Referral allocation limit reached' },
    { label: 'Revoked', desc: 'Code was deactivated or replaced' },
    { label: 'Already redeemed', desc: 'Already applied on your account' },
    { label: 'Expired window', desc: 'Exceeded 48 hours since joining' },
    { label: 'Too many attempts', desc: 'Rate limit; wait and retry' },
    { label: 'Temporary failure', desc: 'Network/server glitch; retry shortly' },
  ];

  return (
    <section id="how-it-works" className="py-20 border-t border-white/5 relative bg-[#090e18]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            Official Redemption Workflow
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight [text-wrap:balance]">
            How to Get Your 1 Billion Tokens
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Follow the exact verification flow below to navigate to the redeem screen and claim your token reward smoothly.
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* VISUAL FLOW CHART: Redeeming an invite code */}
        {/* ---------------------------------------------------- */}
        <div className="max-w-3xl mx-auto mb-20 glass-panel-elevated rounded-3xl p-6 sm:p-10 border border-cyan-500/30 relative overflow-hidden">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <GitBranch className="w-4 h-4" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                Redeeming an Invite Code: Process Flow
              </h3>
            </div>
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-800/40">
              Official Workflow
            </span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            {/* Step 1 Node */}
            <div className="w-full max-w-md bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-4 text-center shadow-lg relative group">
              <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 mb-0.5">
                Phase 1
              </div>
              <div className="font-display text-base font-bold text-white mb-1">
                Get your friend's invite code
              </div>
              <div className="inline-flex items-center gap-2 bg-[#080d18] border border-cyan-500/40 px-3 py-1 rounded-lg mt-1">
                <span className="font-mono-code text-sm font-bold text-cyan-300">
                  {INVITE_CODE}
                </span>
                <button
                  onClick={onCopy}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="text-cyan-400/80 animate-bounce">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* Step 2 Node: Navigation Paths */}
            <div className="w-full max-w-lg bg-slate-900/90 border border-blue-500/30 rounded-2xl p-5 shadow-lg">
              <div className="text-[10px] font-mono uppercase tracking-wider text-blue-400 text-center mb-1">
                Phase 2
              </div>
              <div className="font-display text-base font-bold text-white text-center mb-4">
                Open Muse and go to the redeem screen
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Mobile Path */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-300 mb-1.5">
                    <Smartphone className="w-4 h-4" />
                    <span>Mobile App</span>
                  </div>
                  <div className="text-xs font-mono text-slate-200 bg-black/40 p-2 rounded-lg border border-white/5">
                    Settings → Redeem token
                  </div>
                </div>

                {/* Web Path */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 mb-1.5">
                    <Globe className="w-4 h-4" />
                    <span>Web Browser</span>
                  </div>
                  <div className="text-xs font-mono text-slate-200 bg-black/40 p-2 rounded-lg border border-white/5">
                    Settings → General → Usage → Redeem invite code
                  </div>
                </div>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="text-cyan-400/80">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* Step 3 Node: Enter & Confirm */}
            <div className="w-full max-w-md bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-4 text-center shadow-lg">
              <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 mb-0.5">
                Phase 3
              </div>
              <div className="font-display text-base font-bold text-white">
                Enter the code and confirm
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Paste <span className="font-mono text-cyan-300">{INVITE_CODE}</span> and press confirm
              </p>
            </div>

            {/* Down Arrow */}
            <div className="text-cyan-400/80">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* Step 4 Node: Decision Split */}
            <div className="w-full max-w-md bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-white/20 rounded-2xl p-4 text-center shadow-xl">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-0.5">
                Verification Decision
              </div>
              <div className="font-display text-lg font-extrabold text-white">
                Was the code accepted?
              </div>
            </div>

            {/* Branching Outcomes */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* YES BRANCH */}
              <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center border border-emerald-500/30">
                    ✓
                  </span>
                  <span className="font-display text-base font-bold text-emerald-300">
                    YES: Success Outcome
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-3">
                  <strong>Reward credited to your account.</strong>
                </p>
                <div className="p-2.5 rounded-lg bg-emerald-900/20 border border-emerald-500/20 text-xs text-emerald-200">
                  Notice: The redeem entry disappears once successfully completed.
                </div>
              </div>

              {/* NO BRANCH */}
              <div className="p-5 rounded-2xl bg-rose-950/30 border border-rose-500/40 relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold text-xs flex items-center justify-center border border-rose-500/30">
                    ✕
                  </span>
                  <span className="font-display text-base font-bold text-rose-300">
                    NO: Diagnostic Feedback
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-2">
                  The screen shows exactly why:
                </p>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  {failureReasons.map((reason) => (
                    <span
                      key={reason.label}
                      title={reason.desc}
                      className="px-2 py-0.5 rounded bg-rose-950/60 border border-rose-800/40 text-rose-200"
                    >
                      {reason.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* DETAILED 6-STEP INSTRUCTION CARDS */}
        {/* ---------------------------------------------------- */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-between mb-2 px-2">
            <h3 className="font-display text-xl font-bold text-white">
              Step-by-Step Instructions
            </h3>
            <span className="text-xs text-slate-400">
              Redemption Window: Within 48 Hours
            </span>
          </div>

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
                  <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                    {item.title}
                  </h4>
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
                      className="p-1 hover:text-cyan-300 text-slate-400 transition-colors cursor-pointer"
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
