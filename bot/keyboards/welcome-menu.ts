import { InlineKeyboard  } from "grammy";
import type { Context } from "../contexts";

export const createWelcomeMenuKeyboard = async (ctx: Context) => {
  return new InlineKeyboard()
    .row()
    .webApp(ctx.t("welcome.menu-start"), "https://www.google.com/")
    .row()
    .text(ctx.t("welcome.menu-community"), "/socials")
    .row()
    .text(ctx.t("welcome.menu-help"), "/help");
};
