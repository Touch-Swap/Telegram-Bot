import { Middleware } from "grammy";
import type { Update } from "@grammyjs/types";
import type { Context } from "../bot/contexts";
import { InlineKeyboardButton } from "grammy/types";
import config from "../config";


export function getUpdateInfo(ctx: Context): Omit<Update, "update_id"> {
  // eslint-disable-next-line camelcase, @typescript-eslint/no-unused-vars
  const { update_id, ...update } = ctx.update;

  return update;
}

export function logHandle(id: string): Middleware<Context> {
  return (ctx, next) => {
    ctx.logger.info({
      msg: `handle ${id}`,
      ...(id.startsWith("unhandled") ? { update: getUpdateInfo(ctx) } : {}),
    });

    return next();
  };
}

export function chunk<T>(array: T[], size: number) {
  const result = [];
  for (let index = 0; index < array.length; index += size) {
    result.push(array.slice(index, index + size));
  }
  return result;
}


export function getOpenWebAppButton(ctx: Context): InlineKeyboardButton {
  return {
    text: ctx.t("welcome.menu-start"),
    web_app: {
      url: config.WEBAPP_URL,
    },
  };
}
