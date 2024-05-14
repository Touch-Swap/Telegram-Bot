import { InlineKeyboard  } from "grammy";
import type { Context } from "../contexts";

export const createSocialMenuKeyboard =  (ctx: Context) => {
  return new InlineKeyboard()
    .row()
    .url(ctx.t("socials.menu-community"), "https://t.me/touchswap_bot")
    .row()
    .url(ctx.t("socials.menu-x"), "https://twitter.com/Touchswap")
    .row()
    .url(ctx.t("socials.menu-site"), "https://touchswap.xyz/")
    .row()
    .webApp(ctx.t("socials.menu-play"), "https://touchswap.xyz/");
};
