/**
 * Analytics and Microsoft Clarity tracking utilities.
 * Provides safe wrappers around the global window.clarity instance.
 */

export interface ClarityConsentV2Options {
  ad_storage?: "granted" | "denied";
  analytics_storage?: "granted" | "denied";
}

declare global {
  interface Window {
    clarity?: (
      action: "init" | "event" | "set" | "identify" | "consent" | "consentv2",
      ...args: unknown[]
    ) => void;
  }
}

/**
 * Tracks a custom event in Microsoft Clarity.
 *
 * @param eventName - The name of the event to record (e.g., 'resume_view', 'github_click').
 */
export function trackClarityEvent(eventName: string): void {
  if (typeof window !== "undefined" && typeof window.clarity === "function") {
    try {
      window.clarity("event", eventName);
    } catch {
      // Ignore errors if analytics is blocked by ad-blocker
    }
  }
}

/**
 * Sets a custom key-value tag in Microsoft Clarity for filtering sessions.
 *
 * @param key - Tag key (e.g., 'source', 'theme', 'utm_source').
 * @param value - Tag value or list of values (e.g., 'resume_pdf', 'dark').
 */
export function setClarityTag(key: string, value: string | string[]): void {
  if (typeof window !== "undefined" && typeof window.clarity === "function") {
    try {
      window.clarity("set", key, value);
    } catch {
      // Ignore errors if analytics is blocked by ad-blocker
    }
  }
}

/**
 * Identifies a user session in Microsoft Clarity.
 *
 * @param customId - Unique user identifier.
 * @param customSessionId - Optional custom session identifier.
 * @param customPageId - Optional custom page identifier.
 * @param friendlyName - Optional friendly label in dashboard.
 */
export function identifyClarityUser(
  customId: string,
  customSessionId?: string,
  customPageId?: string,
  friendlyName?: string
): void {
  if (typeof window !== "undefined" && typeof window.clarity === "function") {
    try {
      window.clarity("identify", customId, customSessionId, customPageId, friendlyName);
    } catch {
      // Ignore errors if analytics is blocked by ad-blocker
    }
  }
}

/**
 * Updates cookie and consent preferences using Microsoft Clarity Consent API V2.
 * Setting `ad_storage: "denied"` and `analytics_storage: "denied"` enables cookieless tracking mode.
 *
 * @param options - Consent configuration options for ad and analytics storage.
 */
export function setClarityConsentV2(options: ClarityConsentV2Options): void {
  if (typeof window !== "undefined" && typeof window.clarity === "function") {
    try {
      window.clarity("consentv2", options);
    } catch {
      // Ignore errors if analytics is blocked
    }
  }
}
