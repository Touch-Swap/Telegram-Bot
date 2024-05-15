import { InlineKeyboard } from "grammy";
import type { Context } from "../contexts";
import { getOpenWebAppButton } from "../../helpers";

export const createHelpMenuKeyboard = (ctx: Context) => {
  return new InlineKeyboard().row().add(getOpenWebAppButton(ctx));
};
