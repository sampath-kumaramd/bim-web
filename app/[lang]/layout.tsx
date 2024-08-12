import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { ReactNode } from 'react';
import { getDictionary } from '@/lib/getDictionary';
import { LanguageProvider } from '@/components/LanguageContext';
import { Languages } from '@/lib/types/languages';
import { CookieConsentDialog } from '@/components/CookieConsent';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BIM - The dating social media',
  description: 'Created by BIM',
};

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-4Q04NH0818';

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: ReactNode;
  params: { lang: Languages };
}) {
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <link
          rel="icon"
          type="image/jpg"
          href="/favico.png"
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          {children}
          <CookieConsentDialog />
          <GoogleAnalytics
            GA_MEASUREMENT_ID={GA_MEASUREMENT_ID}
          />
          <Toaster />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'fr' },
    { lang: 'lb' },
    { lang: 'it' },
    { lang: 'es' },
    { lang: 'de' },
    // Add more languages as needed
  ];
}
