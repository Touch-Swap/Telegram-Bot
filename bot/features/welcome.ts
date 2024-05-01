import { Composer, InputFile } from "grammy";
import type { Context } from "../contexts";
import { logHandle } from "../../helpers";
import { parseFile } from "../I18n";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.command("start", logHandle("command-start"), async ctx => {
  const text = `${ctx.t("welcome.title", { name: ctx.chat.username ?? "" })}\n${ctx.t(
    "welcome.title-second-paragraph",
  )} 
  \n${ctx.t("welcome.title-thrid-paragraph")}
  \n${ctx.t("welcome.title-fouth-paragraph")}`;

  const welcomeImage = new InputFile(parseFile("welcome.jpeg", "img"));
  return await ctx.replyWithPhoto(welcomeImage, {
    caption: text,
  });
});

export { composer as welcomeFeature };
