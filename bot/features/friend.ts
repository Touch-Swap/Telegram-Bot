import { Composer } from "grammy";
import type { Context } from "../contexts";
import { logHandle } from "../../helpers";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

const commandResponse = async (ctx: Context) => {
  const text = `
${ctx.t("friend.text-caption")}
  
  
${ctx.t("friend.text_link_description")}
<code>${ctx.t("friend.text-referal", { code: ctx.from?.id.toString() || "" })} </code>
    `;
  return await ctx.reply(text, { parse_mode: "HTML" });
};

feature.command("friend", logHandle("command-friend"), commandResponse);

export { composer as friendFeature, commandResponse as friendCommandResponse };
