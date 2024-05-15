import { InlineKeyboard } from "grammy";
import type { Context } from "../contexts";
import { getOpenWebAppButton } from "../../helpers";

export const createProfileMenuKeyboard = (ctx: Context) => {
  return new InlineKeyboard()
    .row()
    .text(ctx.t("friend_command.description"), "/friend")
    .row()
    .add(getOpenWebAppButton(ctx));
};
