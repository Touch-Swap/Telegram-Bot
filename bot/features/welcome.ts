import { Composer, InputFile } from "grammy";
import type { Context } from "../contexts";
import { logHandle } from "../../helpers";
import { parseFile } from "../I18n";
import { setCommandsHandler } from "../handlers";
import { createWelcomeMenuKeyboard } from "../keyboards";
import { socialFeature } from "./social";

const composer = new Composer<Context>();

const feature = composer.chatType("private");



feature.command("start", logHandle("command-start"), async ctx => {
  const text = `
  <b>${ctx.t("welcome.title", { name: ctx.chat.username ?? "" })}</b> \n${ctx.t("welcome.title-second-paragraph")}
  \n${ctx.t("welcome.title-third-paragraph")}
  \n${ctx.t("welcome.title-fourth-paragraph")}
  `;

  const welcomeImage = new InputFile(parseFile("welcome.jpeg", "img"));
  await ctx.replyWithPhoto(welcomeImage, {
    caption: text,
    parse_mode: "HTML",
    reply_markup: createWelcomeMenuKeyboard(ctx),
  });
  return setCommandsHandler;
});

feature.callbackQuery("/socials", logHandle("keybaord-command-select-social"), async (ctx: Context) => {
  ///ctx.
   ///await ctx.api.("/socials");
});

feature.callbackQuery("/help", logHandle("keybaord-command-select-help"), async (ctx: Context) => {
  ctx.logger.error(ctx.callbackQuery?.data);
});

export { composer as welcomeFeature };
