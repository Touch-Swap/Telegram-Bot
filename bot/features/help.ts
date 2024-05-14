import { Composer, InputFile } from "grammy";
import type { Context } from "../contexts";
import { logHandle } from "../../helpers";
import { parseFile } from "../I18n";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.command("help", logHandle("command-help"), async ctx => {
  const text = `
<b>${ctx.t("help.earn-title")}</b> 
${ctx.t("help.earn-description")}
    
<b>${ctx.t("help.leagues-title")}</b> 
${ctx.t("help.leagues-description")}

<b>${ctx.t("help.boosts-title")}</b>
${ctx.t("help.boosts-description")}

<b>${ctx.t("help.friends-title")}</b>
${ctx.t("help.friend-description")}

<b>${ctx.t("help.purpose-title")}</b>
${ctx.t("help.purpose-description")}

${ctx.t("help.text")}
`;
  const thumbnailImage = new InputFile(parseFile("Thumbnail.png", "img"));
  return await ctx.replyWithPhoto(thumbnailImage, { caption: text, parse_mode: "HTML" });
});

export { composer as helpFeature };
