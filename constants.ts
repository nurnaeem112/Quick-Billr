import type { Template } from './types';

import template1Img from './assets/template-1.png';
import template2Img from './assets/template-2.png';
import template3Img from './assets/template-3.png';
import template4Img from './assets/template-4.png';
import template5Img from './assets/template-5.png';
import template6Img from './assets/template-6.png';
import template7Img from './assets/template-7.png';

export const TEMPLATES: Template[] = [
  { id: 'template-1', image: template1Img, name: 'template-1', type: 'Premium' },
  { id: 'template-2', image: template2Img, name: 'template-2', type: 'Free' },
  { id: 'template-3', image: template3Img, name: 'template-3', type: 'Premium' },
  { id: 'template-4', image: template4Img, name: 'template-4', type: 'Free' },
  { id: 'template-5', image: template5Img, name: 'template-5', type: 'Free' },
  { id: 'template-6', image: template6Img, name: 'template-6', type: 'Free' },
  { id: 'template-7', image: template7Img, name: 'template-7', type: 'Free' },

]



export const CURRENCIES = [
    { symbol: "$", name: "USD" },
    { symbol: "€", name: "EUR" },
    { symbol: "£", name: "GBP" },
    { symbol: "¥", name: "JPY" },
    { symbol: "₹", name: "INR" },
    { symbol: "A$", name: "AUD" },
    { symbol: "C$", name: "CAD" },
    { symbol: "Fr", name: "CHF" },
    { symbol: "¥", name: "CNY" },
    { symbol: "kr", name: "SEK" },
    { symbol: "NZ$", name: "NZD" },
    { symbol: "Mex$", name: "MXN" },
    { symbol: "S$", name: "SGD" },
    { symbol: "HK$", name: "HKD" },
    { symbol: "kr", name: "NOK" },
    { symbol: "₩", name: "KRW" },
    { symbol: "₺", name: "TRY" },
    { symbol: "₽", name: "RUB" },
    { symbol: "R$", name: "BRL" },
    { symbol: "R", name: "ZAR" },
];

export const LANGUAGES = [
    { code: 'en-US', name: 'English' },
    { code: 'es-ES', name: 'Español' },
    { code: 'fr-FR', name: 'Français' },
    { code: 'de-DE', name: 'Deutsch' },
    { code: 'it-IT', name: 'Italiano' },
    { code: 'pt-BR', name: 'Português (Brasil)' },
    { code: 'ja-JP', name: '日本語' },
    { code: 'zh-CN', name: '中文 (简体)' },
    { code: 'ru-RU', name: 'Русский' },
    { code: 'ar-SA', name: 'العربية' },
    { code: 'hi-IN', name: 'हिन्दी' },
    { code: 'nl-NL', name: 'Nederlands' },
    { code: 'ko-KR', name: '한국어' },
    { code: 'sv-SE', name: 'Svenska' },
    { code: 'tr-TR', name: 'Türkçe' },
    { code: 'pl-PL', name: 'Polski' },
    { code: 'da-DK', name: 'Dansk' },
    { code: 'fi-FI', name: 'Suomi' },
    { code: 'id-ID', name: 'Bahasa Indonesia' },
    { code: 'vi-VN', name: 'Tiếng Việt' },
    { code: 'th-TH', name: 'ภาษาไทย' },
];