"use client";

import Script from "next/script";
import { useEffect } from "react";
import { setClarityTag, trackClarityEvent } from "@/lib/analytics";

interface MicrosoftClarityProps {
  projectId?: string;
  cookiesAllowed?: boolean;
}

const DEFAULT_PROJECT_ID = "ysc70r044q";

export function MicrosoftClarity({
  projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID,
  cookiesAllowed = false,
}: MicrosoftClarityProps) {
  // Only activate in production unless an explicit project ID is configured
  const isProduction = process.env.NODE_ENV === "production";
  const activeProjectId = projectId || (isProduction ? DEFAULT_PROJECT_ID : undefined);

  useEffect(() => {
    if (typeof window === "undefined" || !activeProjectId) return;

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

      if (document.referrer) {
        try {
          const referrerHost = new URL(document.referrer).hostname;
          setClarityTag("referrer_host", referrerHost);
        } catch {
          // Ignore invalid referrer URL
        }
      }
    } catch {
      // Ignore URL parsing errors
    }

    // 2. Global click listener for resume, social icons, and outbound links
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

    // 3. Scroll-based section view tracking using IntersectionObserver
    const trackedSections = new Set<string>();
    let currentSection = "";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id && id !== currentSection) {
              currentSection = id;
              setClarityTag("current_section", id);
              if (!trackedSections.has(id)) {
                trackedSections.add(id);
                trackClarityEvent(`view_section_${id}`);
              }
            }
          }
        });
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    const sectionElements = document.querySelectorAll("section[id]");
    sectionElements.forEach((el) => observer.observe(el));

    // 4. Hash navigation listener
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setClarityTag("current_section", hash);
        if (!trackedSections.has(hash)) {
          trackedSections.add(hash);
          trackClarityEvent(`view_section_${hash}`);
        }
      }
    };

    window.addEventListener("click", handleGlobalClick, { passive: true });
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("click", handleGlobalClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [activeProjectId]);

  if (!activeProjectId) return null;

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
          })(window, document, "clarity", "script", "${activeProjectId}");
          // Enable cookieless tracking mode via Clarity Consent API V2
          if (typeof window.clarity === "function") {
            window.clarity("consentv2", {
              ad_storage: "${cookiesAllowed ? "granted" : "denied"}",
              analytics_storage: "${cookiesAllowed ? "granted" : "denied"}"
            });
          }
        `,
      }}
    />
  );
}
