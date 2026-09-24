import React, { useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhatIsMuseSection } from './components/WhatIsMuseSection';
import { WhyTrySection } from './components/WhyTrySection';
import { ReferralRewardSection } from './components/ReferralRewardSection';
import { HowToRedeemSection } from './components/HowToRedeemSection';
import { QuickStartBox } from './components/QuickStartBox';
import { WhoShouldTrySection } from './components/WhoShouldTrySection';
import { FAQSection } from './components/FAQSection';
import { OfficialInformationSection } from './components/OfficialInformationSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { useReferral } from './hooks/useReferral';

export default function App() {
  const {
    inviteCode,
    referralUrl,
    isCopied,
    copyCode,
    copyAndJoin,
    toastMessage,
    clearToast,
  } = useReferral();

  const handleJoin = useCallback(() => {
    window.open(referralUrl, '_blank', 'noopener,noreferrer');
  }, [referralUrl]);

  const scrollToHero = useCallback(() => {
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      {/* Sticky Navigation Header */}
      <Navbar onGetTokensClick={scrollToHero} />

      {/* Main Content Flow */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <HeroSection
          inviteCode={inviteCode}
          referralUrl={referralUrl}
          isCopied={isCopied}
          onCopy={copyCode}
          onJoin={handleJoin}
        />

        {/* 2. What is Muse.ai? Section */}
        <WhatIsMuseSection />

        {/* 3. Why Use Muse.ai? Section & Flow Visualization */}
        <WhyTrySection />

        {/* 4. The 1 Billion Token Referral Section */}
        <ReferralRewardSection
          onCopy={copyCode}
          isCopied={isCopied}
        />

        {/* 5. How to Redeem Section */}
        <HowToRedeemSection
          onCopy={copyCode}
          onJoin={handleJoin}
          isCopied={isCopied}
        />

        {/* 6. Quick Start Box (30-second summary) */}
        <QuickStartBox
          onCopyAndJoin={copyAndJoin}
          isCopied={isCopied}
        />

        {/* 7. Who Should Try Muse.ai? Section */}
        <WhoShouldTrySection />

        {/* 8. FAQ Accordion Section */}
        <FAQSection />

        {/* 9. Official Information & Authority Terms */}
        <OfficialInformationSection />

        {/* 10. Final CTA Section */}
        <FinalCTASection
          onCopy={copyCode}
          onJoin={handleJoin}
          isCopied={isCopied}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Dynamic Copy Confirmation Toast */}
      <Toast message={toastMessage} onClose={clearToast} />
    </div>
  );
}
