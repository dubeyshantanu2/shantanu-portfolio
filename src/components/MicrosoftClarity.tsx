"use client";

import Script from "next/script";
import { useEffect } from "react";
import { setClarityTag, trackClarityEvent } from "@/lib/analytics";

interface MicrosoftClarityProps {
  projectId?: string;
}

const DEFAULT_PROJECT_ID = "ysc70r044q";

export function MicrosoftClarity({
  projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || DEFAULT_PROJECT_ID,
}: MicrosoftClarityProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Capture UTM parameters and referrers automatically
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get("utm_source");
      const utmMedium = urlParams.get("utm_medium");
      const utmCampaign = urlParams.get("utm_campaign");
      const ref = urlParams.get("ref");

      if (utmSource) setClarityTag("utm_source", utmSource);
      if (utmMedium) setClarityTag("utm_medium", utmMedium);
      if (utmCampaign) setClarityTag("utm_campaign", utmCampaign);
      if (ref) setClarityTag("ref", ref);

      // Record referrer domain if available
      if (document.referrer) {
        try {
          const referrerHost = new URL(document.referrer).hostname;
          setClarityTag("referrer_host", referrerHost);
        } catch {
          // Ignore invalid referrer URL format
        }
      }
    } catch {
      // Ignore URL parsing errors
    }

    // 2. Global event listener for outbound links, resume downloads, and social taps
    const handleGlobalClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest("a");
      if (!target || !target.href) return;

      const href = target.href;
      const isExternal =
        target.target === "_blank" ||
        (!href.startsWith(window.location.origin) && !href.startsWith("#") && !href.startsWith("/"));

      if (href.includes("resume") || href.endsWith(".pdf")) {
        trackClarityEvent("resume_interaction");
        setClarityTag("interaction", "resume_view");
      } else if (href.includes("github.com")) {
        trackClarityEvent("github_link_clicked");
      } else if (href.includes("linkedin.com")) {
        trackClarityEvent("linkedin_link_clicked");
      } else if (href.includes("medium.com")) {
        trackClarityEvent("medium_post_clicked");
      } else if (href.includes("play.google.com") || href.includes("apple.com")) {
        trackClarityEvent("app_store_link_clicked");
      } else if (href.startsWith("mailto:")) {
        trackClarityEvent("contact_email_clicked");
      } else if (isExternal) {
        trackClarityEvent("outbound_link_clicked");
      }
    };

    // 3. Track hash navigation (section changes like #projects, #experience, #about)
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setClarityTag("current_section", hash);
        trackClarityEvent(`view_section_${hash}`);
      }
    };

    window.addEventListener("click", handleGlobalClick, { passive: true });
    window.addEventListener("hashchange", handleHashChange);

    // Initial hash tag check
    if (window.location.hash) {
      handleHashChange();
    }

    return () => {
      window.removeEventListener("click", handleGlobalClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (!projectId) return null;

  return (
    <Script
      id="microsoft-clarity-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${projectId}");
        `,
      }}
    />
  );
}
