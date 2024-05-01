import { Composer } from "grammy";
import type { Context } from "../contexts";
import { logHandle } from "../../helpers";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.command("profile", logHandle("command-profile"), async ctx => {
  const text = `
    ${ctx.t("profile.title", { name: ctx.chat.username ?? "" })} 
    ${ctx.t("profile.text", { score: 1000, balance: 3000 })}
    ${ctx.t("profile.bottom-text")} 
 `;

  return await ctx.replyWithHTML(text);
});

export { composer as profileFeature };
