
import { Composer } from "grammy";
import type { Context } from "../contexts";
import { logHandle } from "../../helpers";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.command("social", logHandle("social-friend"), async ctx => {
  return await ctx.reply(ctx.t("social.text"));
});

export { composer as socialFeature };
