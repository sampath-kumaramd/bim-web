// import { useLanguage } from './LanguageContext';
'use client';
import { useLanguage } from '@/components/LanguageContext';
import { getDictionary } from '@/lib/getDictionary';
import { Dictionary } from '@/types/dictionary';
import { useEffect, useState } from 'react';

export function useDictionary() {
  const { language } = useLanguage();
  const [dict, setDict] = useState<Dictionary | null>(null);

  useEffect(() => {
    getDictionary(language as 'en' | 'fr').then(
      (result: Dictionary) => setDict(result),
    );
  }, [language]);

  return dict;
}
