import { performance } from "node:perf_hooks";
import { Middleware } from "grammy";
import type { Context } from "../contexts";
import { getUpdateInfo } from "../../helpers";

export function updateLogger(): Middleware<Context> {
  return async (ctx, next) => {
    ctx.api.config.use((previous: (arg0: any, arg1: any, arg2: any) => any, method: any, payload: any, signal: any) => {
      ctx.logger.debug({
        msg: "bot api call",
        method,
        payload,
      });

      return previous(method, payload, signal);
    });

    ctx.logger.debug({
      msg: "update received",
      update: getUpdateInfo(ctx),
    });

    const startTime = performance.now();
    try {
      await next();
    } finally {
      const endTime = performance.now();
      ctx.logger.debug({
        msg: "update processed",
        duration: endTime - startTime,
      });
    }
  };
}
