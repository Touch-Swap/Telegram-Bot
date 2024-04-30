
import { Composer } from "grammy";
import type { Context } from "../contexts";
import { logHandle } from "../../helpers";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.command("friend", logHandle("command-friend"), async ctx => {
  const text = `
  ${ctx.t("friend.text-caption")}
  \n${ctx.t("friend.text-referal", { link: "jjdjd" })}
  `;
  return await ctx.replyWithMarkdown(text);
});

export { composer as friendFeature };
