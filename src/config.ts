import defaultImage from './assets/images/default.png';

type Config = {
  name: string;
  origin: string;
  basePathname: string;
  trailingSlash: boolean;
  title: string;
  description: string;
  defaultImage: ImageMetadata;
  defaultTheme: 'system' | 'light' | 'dark' | 'light:only' | 'dark:only';
  language: string;
  textDirection: 'ltr' | 'rtl';
  dateFormatter: Intl.DateTimeFormat;
  googleAnalyticsId: false | string;
  googleSiteVerificationId: string;
};

const CONFIG: Config = {
  name: 'SpectrumDigital',

  origin: 'https://spectrumdigital.vercel.app',
  basePathname: '/',
  trailingSlash: false,

  title: 'SpectrumDigital - Autism at its finest',
  description: 'Building Web3 solutions for autistic communties.',
  defaultImage: defaultImage,

  defaultTheme: 'dark', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const SITE = { ...CONFIG };
export const DATE_FORMATTER = CONFIG.dateFormatter;
