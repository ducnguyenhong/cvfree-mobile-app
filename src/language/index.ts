import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { changeLanguage } from '../redux/lang/lang.slice';
import store from '../redux/store';
import en from './en';
import vi from './vi';

i18n
  .use({
    type: 'languageDetector',
    async: true,
    detect: (callback: (lang: string) => void) => {
      const lang = store.getState()?.language?.lang || 'vi';
      callback(lang);
    },
    cacheUserLanguage: (lang: 'en' | 'vi') => {
      const { dispatch } = store;
      dispatch(changeLanguage({ lang }));
    },
    init: () => {},
  })
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // set options
  .init({
    fallbackLng: 'vi',
    resources: { en, vi },
    interpolation: {
      escapeValue: false,
    },
  });
