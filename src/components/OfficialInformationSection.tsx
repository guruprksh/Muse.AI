import React from 'react';
import { ExternalLink, ShieldCheck, FileText, Globe } from 'lucide-react';
import { OFFICIAL_WEBSITE_URL, OFFICIAL_TERMS_URL } from '../config/referralConfig';

export const OfficialInformationSection: React.FC = () => {
  return (
    <section className="py-16 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-7 sm:p-9 border border-white/10 text-center">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <h3 className="font-display text-2xl font-bold text-white mb-3">
            Always Check the Official Terms
          </h3>

          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 italic">
            Referral programs, token rewards, eligibility requirements, and redemption procedures can change. The information on this page is provided as a simple guide. Muse.ai's official website and referral terms are the final authority.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={OFFICIAL_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/30 transition-all cursor-pointer"
            >
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>Visit Muse.ai</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href={OFFICIAL_TERMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>View Referral Terms</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
