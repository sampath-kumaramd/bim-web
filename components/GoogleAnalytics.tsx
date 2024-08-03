'use client';

import { Suspense, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Extend the Window interface
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

function GoogleAnalyticsInner({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const [consentGiven, setConsentGiven] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem('cookieConsent');
      if (consent) {
        try {
          const parsedConsent = JSON.parse(consent);
          return parsedConsent.analytics;
        } catch (e) {
          return consent === 'all';
        }
      }
      return false;
    };

    setConsentGiven(checkConsent());
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const checkConsent = () => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent) {
          try {
            const parsedConsent = JSON.parse(consent);
            return parsedConsent.analytics;
          } catch (e) {
            return consent === 'all';
          }
        }
        return false;
      };

      setConsentGiven(checkConsent());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    console.log('Consent given:', consentGiven);
    console.log('GA_MEASUREMENT_ID:', GA_MEASUREMENT_ID);
    
    if (consentGiven) {
      console.log('Attempting to load Google Analytics script');
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]){window.dataLayer.push(args);}
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID);
      };

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [GA_MEASUREMENT_ID, consentGiven]);

  useEffect(() => {
    if (consentGiven && typeof window.gtag === 'function') {
      const url = pathname + searchParams.toString();
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID, consentGiven]);

  return null;
}

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  return (
       <Suspense fallback={<div>Loading...</div>}>
      <GoogleAnalyticsInner GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
      </Suspense>
  );
}