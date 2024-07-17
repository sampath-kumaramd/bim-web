import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BIM - The dating social media',
  description: 'Created by BIM',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpg" href="/favico.png" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
