'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { GB } from './ui/flags/GB';
import { FR } from './ui/flags/FR';
import { LU } from './ui/flags/LU';
import { IT } from './ui/flags/IT';
import { ES } from './ui/flags/ES';
import { DE } from './ui/flags/DE';

const languages = [
  { value: 'en', label: 'English', flag: GB },
  { value: 'fr', label: 'French', flag: FR },
  { value: 'lb', label: 'Luxembourgish', flag: LU },
  { value: 'it', label: 'Italian', flag: IT },
  { value: 'es', label: 'Spanish', flag: ES },
  { value: 'de', label: 'German', flag: DE },
];

export function LanguageSwitcher() {
  const [language, setLanguage] = React.useState('en');

  const selectedLanguage = languages.find((lang) => lang.value === language);

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 flex items-center gap-2 rounded-md border-none px-3 py-2 text-white hover:text-rose-100 focus:ring-0 focus:ring-offset-0"
        >
          {selectedLanguage && (
            <>
              <selectedLanguage.flag className="h-5 w-5" />
              <span>{selectedLanguage.label}</span>
            </>
          )}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 rounded-md bg-white shadow-lg">
        <DropdownMenuRadioGroup
          value={language}
          onValueChange={handleLanguageChange}
        >
          {languages.map(({ value, label, flag: Flag }) => (
            <DropdownMenuRadioItem
              key={value}
              value={value}
              className="flex items-center gap-2 px-3 py-2 outline-none hover:bg-gray-100 focus:bg-gray-100"
            >
              <Flag className="ms-4 h-5 w-5" />
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
