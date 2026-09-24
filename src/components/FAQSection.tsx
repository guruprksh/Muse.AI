import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ExternalLink } from 'lucide-react';
import { INVITE_CODE, OFFICIAL_PRICING_URL, OFFICIAL_TERMS_URL } from '../config/referralConfig';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is the invite code?',
      answer: `It is the referral code (${INVITE_CODE}) used to connect your Muse.ai signup with my referral.`,
    },
    {
      question: 'Where do I enter the code?',
      answer: `Follow Muse.ai's current signup/referral flow. You can also redeem the code directly in your account Settings within 48 hours of joining. If Muse.ai provides a referral link that automatically applies the code, no manual entry may be necessary.`,
    },
    {
      question: 'Do I get 1 billion tokens?',
      answer: `The referral campaign currently advertises a 1 billion token reward for eligible participants. Eligibility and reward conditions are controlled by Muse.ai and may change.`,
    },
    {
      question: 'Do you also get tokens?',
      answer: `Yes, the referral program is designed to provide a reward to both sides when the referral qualifies, subject to Muse.ai's current terms.`,
    },
    {
      question: 'Do I have to pay?',
      answer: (
        <span>
          Please refer to Muse.ai's official pricing and referral terms for current conditions and tier details. You can view the latest options on the{' '}
          <a
            href={OFFICIAL_PRICING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            official Muse.ai pricing page
          </a>
          .
        </span>
      ),
    },
    {
      question: "What if my reward doesn't appear?",
      answer: `Check that the referral was properly applied (e.g. verified in Settings within 48 hours) and that all current eligibility requirements were completed. Then contact Muse.ai support if necessary.`,
    },
    {
      question: 'Can I use the code after creating my account?',
      answer: `This depends on Muse.ai's current referral rules. The referrer notes that you can redeem the code in Settings within 48 hours of joining. However, users should apply the referral during the signup process whenever possible.`,
    },
  ];

  return (
    <section id="faq" className="py-20 border-t border-white/5 relative bg-[#090e18]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight [text-wrap:balance]">
            Referral & Program FAQs
          </h2>
          <p className="text-base text-slate-300 leading-relaxed [text-wrap:balance]">
            Everything you need to know about applying the invite code, qualification guidelines, and token distributions.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="glass-panel rounded-2xl border border-white/10 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left py-5 px-6 sm:px-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-cyan-500/10 text-cyan-400 border-cyan-500/30' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
