import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import vi from "./locales/vi.json";
import ko from "./locales/ko.json";
import th from "./locales/th.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    vi: { translation: vi },
    ko: { translation: ko },
    th: { translation: th },
  },
  lng: "en", // Ngôn ngữ mặc định
  fallbackLng: "en", // Ngôn ngữ dự phòng
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
