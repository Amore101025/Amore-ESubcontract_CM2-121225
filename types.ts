export type Language = 'zh-Hant' | 'en';
export type Theme = 'light' | 'dark';

export interface PainterStyle {
  accent: string;
  accentSoft: string;
  border: string;
}

export interface I18nContent {
  [key: string]: {
    [key in Language]: string;
  };
}

export interface ScopeItem {
  key: string;
  percent: number;
  zh: string;
  en: string;
  detail_zh: string;
  detail_en: string;
}

export interface FlowStep {
  id: number;
  zh: string;
  en: string;
}

export interface CaseData {
  year: number;
  newCase: number;
  change: number;
  cancel: number;
}

export interface TimelineItem {
  id: number;
  date_zh: string;
  date_en: string;
  zh: string;
  en: string;
}

export interface DocItem {
  key: string;
  zh: string;
  en: string;
}

export interface PaymentMethod {
  key: string;
  zh_title: string;
  en_title: string;
  zh: string;
  en: string;
}
