import { Composer } from "grammy";
import type { Context } from "../contexts";
import { logHandle } from "../../helpers";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.on("message", logHandle("unhandled-message"), (ctx: Context) => {
  return ctx.reply(ctx.t("unhandled"));
});

feature.on("callback_query", logHandle("unhandled-callback-query"), (ctx: Context) => {
  return ctx.answerCallbackQuery();
});

export { composer as unhandledFeature };