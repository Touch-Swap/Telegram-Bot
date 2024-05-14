import { Composer } from "grammy";
import type { Context } from "../contexts";
import { logHandle } from "../../helpers";
import { createProfileMenuKeyboard } from "../keyboards";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.command("profile", logHandle("command-profile"), async ctx => {
  const text = `
${ctx.t("profile.title", { name: ctx.chat.username ?? "" })}

${ctx.t("profile.league", { league: "Bronze" })}
${ctx.t("profile.score", { score: 300 })}
${ctx.t("profile.balance", { balance: 3000 })}

${ctx.t("profile.bottom-text")} `;

  return await ctx.replyWithMarkdown(text, {
    reply_markup: createProfileMenuKeyboard(ctx),
  });
});

export { composer as profileFeature };
