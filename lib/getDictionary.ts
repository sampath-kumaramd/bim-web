// lib/getDictionary.ts

// Define a type for the supported locales
type Locale = keyof typeof dictionaries;

const dictionaries = {
  en: () =>
    import('../locales/en.json').then(
      (module) => module.default,
    ),
  fr: () =>
    import('../locales/fr.json').then(
      (module) => module.default,
    ),
  es: () =>
    import('../locales/es.json').then(
      (module) => module.default,
    ),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
