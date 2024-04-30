import { InlineKeyboard } from "grammy";
import ISO6391 from "iso-639-1";
import { changeLanguageData } from "../callback-data";
import type { Context } from "../contexts";
import { supportedLanguage } from "../I18n";
import { chunk } from "../../helpers";

export const createChangeLanguageKeyboard = async (ctx: Context) => {
  const currentLocaleCode = ctx.session.__language_code;

  const getLabel = (code: string) => {
    const isActive = code === currentLocaleCode;

    return `${isActive ? "✅ " : ""}${ISO6391.getNativeName(code)}`;
  };

  return InlineKeyboard.from(
    chunk(
      supportedLanguage.map((localeCode: string) => ({
        text: getLabel(localeCode),
        callback_data: changeLanguageData.pack({
          code: localeCode,
        }),
      })),
      2,
    ),
  );
};
