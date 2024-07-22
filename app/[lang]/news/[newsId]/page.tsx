'use client';

import { useParams } from 'next/navigation';
import { Languages } from '@/types/languages';
import { useDictionary } from '@/hooks/useDictionary';

export default function page() {
  const params = useParams();
  const lang = params.lang as Languages;
  const dict = useDictionary(lang);

  if (!dict) {
    return null;
  }
  return (
      <div className="min-h-screen flex justify-center items-center">
          this will be the news page
    </div>
  );
}
