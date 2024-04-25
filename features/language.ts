import { Composer } from "grammy";
import { changeLanguageData } from "../callback-data";
import type { Context } from "../contexts";
import { logHandle } from "../helpers/";
import { i18n } from "../I18n";
import { createChangeLanguageKeyboard } from "../keyboards";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.command("language", logHandle("command-language"), async ctx => {
  return ctx.reply(ctx.t("language.select"), {
    reply_markup: await createChangeLanguageKeyboard(ctx),
  });
});

feature.callbackQuery(changeLanguageData.filter(), logHandle("keyboard-language-select"), async (ctx: Context) => {
  const { code: languageCode } = changeLanguageData.unpack(ctx.callbackQuery?.data || "");

  if (i18n.locales.includes(languageCode)) {
    await ctx.i18n.setLocale(languageCode);

    return ctx.editMessageText(ctx.t("language.changed"), {
      reply_markup: await createChangeLanguageKeyboard(ctx),
    });
  }
});

export { composer as languageFeature };
