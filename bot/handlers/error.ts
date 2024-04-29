import { ErrorHandler } from "grammy";
import type { Context } from "../contexts";
import { getUpdateInfo } from "../../helpers";

export const errorHandler: ErrorHandler<Context> = error => {
  const { ctx } = error;

  ctx.logger.error({
    err: error.error,
    update: getUpdateInfo(ctx),
  });
};
