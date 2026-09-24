import { useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { INVITE_CODE, REFERRAL_URL } from '../config/referralConfig';

export interface ReferralContextType {
  inviteCode: string;
  referralUrl: string;
  isCopied: boolean;
  copyCode: () => Promise<boolean>;
  copyAndJoin: () => Promise<void>;
  toastMessage: string | null;
  clearToast: () => void;
}

export function useReferral() {
  const [isCopied, setIsCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerConfetti = useCallback(() => {
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#06b6d4', '#38bdf8', '#818cf8', '#c084fc'],
        disableForReducedMotion: true,
      });
    } catch {
      // Graceful fallback if canvas-confetti is unavailable
    }
  }, []);

  const copyCode = useCallback(async (): Promise<boolean> => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(INVITE_CODE);
      } else {
        // Fallback for non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = INVITE_CODE;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      setIsCopied(true);
      setToastMessage(`✓ Code ${INVITE_CODE} copied! Redeem in Settings within 48h.`);
      triggerConfetti();

      setTimeout(() => {
        setIsCopied(false);
      }, 3000);

      setTimeout(() => {
        setToastMessage(null);
      }, 4500);

      return true;
    } catch (err) {
      console.warn('Clipboard write failed:', err);
      setToastMessage(`Code: ${INVITE_CODE} (Select & copy manually)`);
      return false;
    }
  }, [triggerConfetti]);

  const copyAndJoin = useCallback(async () => {
    await copyCode();
    // Small timeout to allow user to register the copy feedback before tab switch
    setTimeout(() => {
      window.open(REFERRAL_URL, '_blank', 'noopener,noreferrer');
    }, 250);
  }, [copyCode]);

  const clearToast = useCallback(() => {
    setToastMessage(null);
  }, []);

  return {
    inviteCode: INVITE_CODE,
    referralUrl: REFERRAL_URL,
    isCopied,
    copyCode,
    copyAndJoin,
    toastMessage,
    clearToast,
  };
}
