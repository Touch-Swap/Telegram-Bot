import { Composer } from "grammy";
import type { Context } from "../contexts";
import { logHandle } from "../../helpers";
import { createSocialMenuKeyboard } from "../keyboards";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

const commandResponse = async (ctx: Context) => {
  return await ctx.reply(ctx.t("socials.text"), {
    parse_mode: "HTML",
    reply_markup: createSocialMenuKeyboard(ctx),
  });
};

feature.command("socials", logHandle("socials-friend"), commandResponse);

export { composer as socialFeature, commandResponse as socialCommandResponse };
