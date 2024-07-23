'use client';

import { useState, useEffect } from 'react';
import { Typography } from './Typography';
import { useParams } from 'next/navigation';
import { Languages } from '@/lib/types/languages';
import { useDictionary } from '@/hooks/useDictionary';

export const CookieConsentDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const lang = params.lang as Languages;
  const dict = useDictionary(lang);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsOpen(false);
  };

  const handleCancel = () => {
    localStorage.setItem('cookieConsent', 'cancel');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  if (!dict) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-11/12 max-w-lg rounded-lg bg-gray-800 p-6 text-white">
        <div className="mb-4 text-center text-5xl">🍪</div>
        <Typography
          variant="Bim4Regular"
          className="mb-6 text-sm"
        >
          {dict.cookies.description}
        </Typography>
        <div className="mb-4 flex justify-between gap-4">
          <button
            onClick={handleAcceptAll}
            className="flex-1 rounded bg-pink px-4 py-2 text-white hover:bg-[#9e004a]"
          >
            <Typography variant="Bim4Regular">
              {dict.cookies.accept}
            </Typography>
          </button>
          <button
            onClick={handleCancel}
            className="flex-1 rounded bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300"
          >
            <Typography variant="Bim4Regular">
              {dict.cookies.cancel}
            </Typography>
          </button>
        </div>
      </div>
    </div>
  );
};
