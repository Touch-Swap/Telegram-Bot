import { Composer } from "grammy";
import axios from "axios";
import type { Context } from "../contexts";
import { getRank, logHandle } from "../../helpers";
import { createProfileMenuKeyboard } from "../keyboards";
import { friendCommandResponse } from "./friend";
import config from "../../config";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

const commandResponse = async (ctx: Context) => {
  try {
    const userData = (await axios.get(`${config.API_URL}/user/${ctx.from?.id.toString()}`)).data;
    console.log(userData);
    if (!userData?.exist) throw new Error("User Error");
    const userRank = getRank(userData?.rank);
    const text = `
${ctx.t("profile.title", { name: ctx.from?.username || "" })}
    
${ctx.t("profile.league", { league: userRank })}
${ctx.t("profile.score", { score: userData?.totalCoinsMined })}
${ctx.t("profile.balance", { balance: userData?.balance })}

${ctx.t("profile.bottom-text")} `;

    return await ctx.reply(text, {
      parse_mode: "MarkdownV2",
      reply_markup: createProfileMenuKeyboard(ctx),
    });
  } catch (error) {
    return await ctx.reply("Preparing your Profile", {
      parse_mode: "MarkdownV2",
      reply_markup: createProfileMenuKeyboard(ctx),
    });
  }
};

feature.command("profile", logHandle("command-profile"), commandResponse);

feature.callbackQuery("/friend", logHandle("keybaord-command-select-friend"), friendCommandResponse);

export { composer as profileFeature, commandResponse as profileCommandResponse };
