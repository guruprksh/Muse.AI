import React from 'react';
import { ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { INVITE_CODE, REFERRAL_URL, OFFICIAL_WEBSITE_URL, OFFICIAL_TERMS_URL } from '../config/referralConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#060910] text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand mark */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center">
              <span className="font-display font-black text-white text-xs">M</span>
            </div>
            <span className="font-display text-base font-bold text-white tracking-tight">
              Muse.ai Referral Guide
            </span>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#benefits" className="hover:text-slate-200 transition-colors">Benefits</a>
            <a href="#referral" className="hover:text-slate-200 transition-colors">Referral</a>
            <a href="#how-it-works" className="hover:text-slate-200 transition-colors">How It Works</a>
            <a href="#faq" className="hover:text-slate-200 transition-colors">FAQ</a>
            <a
              href={OFFICIAL_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-cyan-400 transition-colors"
            >
              <span>Official Muse.ai</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Code reminder */}
          <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <span>Invite Code:</span>
            <span className="font-bold text-cyan-400">{INVITE_CODE}</span>
          </div>
        </div>

        {/* Mandatory Independent Legal Disclaimer */}
        <div className="pt-6 text-center text-xs text-slate-300 max-w-3xl mx-auto leading-relaxed">
          <p className="mb-2">
            This is an independent referral page and is not the official Muse.ai website. Muse.ai trademarks and branding belong to their respective owners.
          </p>
          <p className="text-[11px] text-slate-300">
            Referral terms, token distributions, and program conditions are governed solely by Muse.ai.
          </p>
        </div>
      </div>
    </footer>
  );
};
