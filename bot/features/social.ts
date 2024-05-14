import { Composer } from "grammy";
import type { Context } from "../contexts";
import { logHandle } from "../../helpers";
import { createSocialMenuKeyboard } from "../keyboards";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.command("socials", logHandle("socials-friend"), async ctx => {
  return await ctx.reply(ctx.t("socials.text"), {
    parse_mode: "HTML",
    reply_markup: createSocialMenuKeyboard(ctx),
  });
});

export { composer as socialFeature };
