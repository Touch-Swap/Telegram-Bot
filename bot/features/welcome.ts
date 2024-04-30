import { Composer } from "grammy";
import type { Context } from "../contexts";
import { logHandle } from "../../helpers";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.command("start", logHandle("command-start"), async ctx => {
  const text = `${ctx.t("welcome.title", { name: ctx.chat.username ?? "" })}\n${ctx.t(
    "welcome.title-second-paragraph",
  )} 
  \n${ctx.t("welcome.title-thrid-paragraph")}
  \n${ctx.t("welcome.title-fouth-paragraph")}`;

  return await ctx.replyWithMarkdown(text);
});

export { composer as welcomeFeature };
