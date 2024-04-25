import fastify from "fastify";
import { webhookCallback } from "grammy";
import type { Bot } from "../bot";
import logger from "../logger";


export const createServer = async (bot: Bot) => {
  const server = fastify({
    logger,
  });

  server.setErrorHandler(async (error, request, response) => {
    logger.error(error);

    await response.status(500).send({ error: "Oops! Something went wrong." });
  });

  server.get("/", () => ({ status: true }));

  server.post(`/${bot.token}`, webhookCallback(bot, "fastify"));

  return server;
};

export type Server = Awaited<ReturnType<typeof createServer>>;