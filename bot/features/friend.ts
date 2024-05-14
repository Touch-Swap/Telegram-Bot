
import { Composer } from "grammy";
import type { Context } from "../contexts";
import { logHandle } from "../../helpers";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.command("friend", logHandle("command-friend"), async ctx => {
  const text = `
${ctx.t("friend.text-caption")}


${ctx.t("friend.text_link_description")}
<code>${ctx.t("friend.text-referal", { code: ctx.chat.id.toString() })} </code>
  `;
  return await ctx.reply(text, { parse_mode: "HTML" });
});

export { composer as friendFeature };
