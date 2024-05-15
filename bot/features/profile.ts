import { Composer } from "grammy";
import type { Context } from "../contexts";
import { logHandle } from "../../helpers";
import { createProfileMenuKeyboard } from "../keyboards";
import { friendCommandResponse } from "./friend";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

const commandResponse = async (ctx: Context) => {
  const text = `
${ctx.t("profile.title", { name: ctx.from?.username || "" })}

${ctx.t("profile.league", { league: "Bronze" })}
${ctx.t("profile.score", { score: 300 })}
${ctx.t("profile.balance", { balance: 3000 })}

${ctx.t("profile.bottom-text")} `;

  return await ctx.reply(text, {
    parse_mode: "MarkdownV2",
    reply_markup: createProfileMenuKeyboard(ctx),
  });
};

feature.command("profile", logHandle("command-profile"), commandResponse);

feature.callbackQuery("/friend", logHandle("keybaord-command-select-friend"), friendCommandResponse);

export { composer as profileFeature, commandResponse as profileCommandResponse };
