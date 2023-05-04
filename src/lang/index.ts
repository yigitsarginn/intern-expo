import { getLocales } from "expo-localization";
import { I18n, TranslateOptions } from "i18n-js";
import { en } from "./locales/en";
import { tr } from "./locales/tr";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/tr";

const locales = getLocales();
const locale = locales[0].languageCode;
dayjs.locale(locale);

const i18n = new I18n({ en, tr });
i18n.defaultLocale = "en";
i18n.locale = locale;
i18n.enableFallback = true;

export const t = (
  scope: DottedLanguageObjectStringPaths,
  options?: TranslateOptions
) => i18n.t(scope, options);
