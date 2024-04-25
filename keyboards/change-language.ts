import { InlineKeyboard } from "grammy";
import ISO6391 from "iso-639-1";
import { changeLanguageData } from "../callback-data";
import type { Context } from "../contexts";
import { i18n } from "../I18n";
import { chunk } from "../helpers";

export const createChangeLanguageKeyboard = async (ctx: Context) => {
  const currentLocaleCode = await ctx.i18n.getLocale();

  const getLabel = (code: string) => {
    const isActive = code === currentLocaleCode;

    return `${isActive ? "✅ " : ""}${ISO6391.getNativeName(code)}`;
  };

  return InlineKeyboard.from(
    chunk(
      i18n.locales.map((localeCode:string) => ({
        text: getLabel(localeCode),
        callback_data: changeLanguageData.pack({
          code: localeCode,
        }),
      })),
      2,
    ),
  );
};