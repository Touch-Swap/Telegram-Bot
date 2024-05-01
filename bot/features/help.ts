import { Composer } from "grammy";
import type { Context } from "../contexts";
import { logHandle } from "../../helpers";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.command("help", logHandle("command-help"), async ctx => {
  const text = `
    ${ctx.t("help.earn-title")} \n ${ctx.t("help.earn-description")}
    
    ${ctx.t("help.leagues-title")} \n ${ctx.t("help.leagues-description")}
    /n
    ${ctx.t("help.boosts-description")}
    ${ctx.t("help.boosts-title")}
    /n 
    ${ctx.t("help.friends-title")}
    ${ctx.t("help.friend-description")}

    ${ctx.t("help.purpose-title")}
    ${ctx.t("help.purpose-description")}

    ${ctx.t("help.text")}
 `;

  return await ctx.replyWithHTML(text);
});

export { composer as helpFeature };
