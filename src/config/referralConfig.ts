/**
 * Centralized Configuration for Muse.ai Referral Landing Page
 * 
 * Edit these values in ONE place. Every component, copy action,
 * CTA button, and guide step dynamically pulls from here.
 */

export const INVITE_CODE = "V0B3MP";
export const REFERRAL_URL = "https://muse.ai/join";
export const OFFICIAL_WEBSITE_URL = "https://muse.ai";
export const OFFICIAL_TERMS_URL = "https://muse.ai/terms";
export const OFFICIAL_PRICING_URL = "https://muse.ai/pricing";

// Key details provided by the referrer
export const REFERRAL_DETAILS = {
  tokenAmountHuman: "1 Billion",
  tokenAmountNumber: "1,000,000,000",
  combinedTokensHuman: "2 Billion",
  redemptionWindowHours: 48,
  redemptionLocation: "Settings",
  platformName: "Muse.ai",
  platformCategory: "Personal AI Agent & Multimedia Workspace",
} as const;
