import { Composer, InputFile } from "grammy";
import type { Context } from "../contexts";
import { logHandle } from "../../helpers";
import { parseFile } from "../I18n";
import { setCommandsHandler } from "../handlers";
import { createWelcomeMenuKeyboard } from "../keyboards";
import { socialCommandResponse } from "./social";
import { helpCommandResponse } from "./help";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

const commadResponse = async (ctx: Context) => {
  const text = `
  <b>${ctx.t("welcome.title", { name: ctx.me.username ?? "" })}</b> \n${ctx.t("welcome.title-second-paragraph")}
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
};

feature.command("start", logHandle("command-start"), async (ctx: Context) => commadResponse(ctx));

feature.callbackQuery("/socials", logHandle("keybaord-command-select-social"), socialCommandResponse);

feature.callbackQuery("/help", logHandle("keybaord-command-select-help"), helpCommandResponse);

export { composer as welcomeFeature };
