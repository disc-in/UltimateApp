import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';

import en from './locales/en';
import fr from './locales/fr';

const i18n = new I18n({
  en,
  fr,
});

i18n.defaultLocale = 'en';
i18n.locale = typeof Localization.locale === 'string' ? Localization.locale : i18n.defaultLocale;
i18n.fallbacks = true;
i18n.enableFallback = true;

export default i18n;
