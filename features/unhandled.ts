import { Composer } from "grammy";
import type { Context } from "../contexts";
import { logHandle } from "../helpers";
import menu from "./menu";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.on("message", logHandle("unhandled-message"), ctx => {
  return ctx.reply(ctx.t("unhandled"), { reply_markup: menu });
});

feature.on("callback_query", logHandle("unhandled-callback-query"), ctx => {
  console.log(ctx);
  // return ctx.answerCallbackQuery();
});

export { composer as unhandledFeature };
