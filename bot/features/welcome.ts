import { Composer, InputFile } from "grammy";
import type { Context } from "../contexts";
import { logHandle } from "../../helpers";
import { parseFile } from "../I18n";
import { setCommandsHandler } from "../handlers";
import { createWelcomeMenuKeyboard } from "../keyboards";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.command("start", logHandle("command-start"), async ctx => {
  const text = `${ctx.t("welcome.title", { name: ctx.chat.username ?? "" })}\n${ctx.t(
    "welcome.title-second-paragraph",
  )} 
  \n${ctx.t("welcome.title-third-paragraph")}.
  \n${ctx.t("welcome.title-fourth-paragraph")}`;

  const welcomeImage = new InputFile(parseFile("welcome.jpeg", "img"));

  await ctx.replyWithPhoto(welcomeImage, {
    caption: text,
    parse_mode: "HTML",
    reply_markup: await createWelcomeMenuKeyboard(ctx),
  });
  return setCommandsHandler;
});

feature.callbackQuery("", logHandle("keyboard-language-select"), async (ctx: Context) => {
 
});

export { composer as welcomeFeature };
