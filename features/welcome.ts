import { Composer } from "grammy";
import type { Context } from "../contexts";
import { logHandle } from "../helpers";
import menu from "./menu";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.command("start", logHandle("command-start"), ctx => {
  return ctx.reply(ctx.t("welcome"), { reply_markup: menu });
});

export { composer as welcomeFeature };
