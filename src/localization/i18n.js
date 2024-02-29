import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import fr from './fr';
import { getLocales } from 'react-native-localize';

const resources = { // list of languages
    en,
    fr,

};
i18n.use(initReactI18next).init({
    lng: getLocales()[0].languageCode,
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    resources: {
        en: { translation: en.translation },
        fr: { translation: fr.translation }
    },
});
export default i18n;