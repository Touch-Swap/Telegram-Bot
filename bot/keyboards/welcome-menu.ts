import { InlineKeyboard } from "grammy";
import type { Context } from "../contexts";
import { getOpenWebAppButton } from "../../helpers";

export const createWelcomeMenuKeyboard = (ctx: Context) => {
  return new InlineKeyboard()
    .row()
    .add(getOpenWebAppButton(ctx))
    .row()
    .text(ctx.t("welcome.menu-community"), "/socials")
    .row()
    .text(ctx.t("welcome.menu-help"), "/help");
};
