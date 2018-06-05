import i18next from 'i18next';
import * as Translations from '../translations';
import { Languages } from '../translations';

i18next
  .init({
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },
    lng: Languages.English, // 'en' | 'es'
    // Using simple hardcoded resources for simple example
    resources: Translations
  })

export default i18next
