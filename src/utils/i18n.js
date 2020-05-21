import I18n from 'i18n-js';
import * as Localization from 'expo-localization';

import en from './locales/en';
import fr from './locales/fr';

I18n.locale = Localization.locale;
I18n.fallbacks = true;
I18n.translations = {
  en,
  fr,
};

export default I18n;
