import { autoChatAction } from "@grammyjs/auto-chat-action";
import { hydrate } from "@grammyjs/hydrate";
import { hydrateReply, parseMode } from "@grammyjs/parse-mode";
import { BotConfig, StorageAdapter, Bot as TelegramBot, session } from "grammy";
import { Context, SessionData, createContextConstructor } from "./contexts";
import logger from "./logger";
import config from "../config";
import { errorHandler } from "./handlers/error";
import { isMultipleLocales, fluent } from "./I18n";
import { updateLogger } from "./middleware";
import {
  welcomeFeature,
  unhandledFeature,
  languageFeature,
  adminFeature,
  friendFeature,
  socialFeature,
  helpFeature,
  profileFeature,
} from "./features";
import path from "node:path";
import { useFluent } from "@grammyjs/fluent";

console.log(path.resolve(process.cwd(), "locales"));

type Options = {
  sessionStorage?: StorageAdapter<SessionData>;
  config?: Omit<BotConfig<Context>, "ContextConstructor">;
};

export default function createBot(token: string, options: Options = {}) {
  const { sessionStorage } = options;
  const bot = new TelegramBot(token, {
    ...options.config,
    ContextConstructor: createContextConstructor({ logger }),
  });
  const protectedBot = bot.errorBoundary(errorHandler);

  // Middlewares
  //bot.api.setMyCommands()
  bot.api.config.use(parseMode("HTML"));
  bot.api.config.use(parseMode("MarkdownV2"));

  if (config.isDev) {
    protectedBot.use(updateLogger());
  }

  protectedBot.use(autoChatAction(bot.api));
  protectedBot.use(hydrateReply);
  protectedBot.use(hydrate());
  protectedBot.use(
    session({
      initial: () => ({
        __language_code: "en",
      }),
      storage: sessionStorage,
    }),
  );

  protectedBot.use(
    useFluent({
      fluent,
      defaultLocale: "en",
      localeNegotiator: async context => context.session.__language_code,
    }),
  );

  //protectedBot.use(i18n);

  // Handlers
  protectedBot.use(welcomeFeature);
  protectedBot.use(adminFeature);
  protectedBot.use(friendFeature);
  protectedBot.use(socialFeature);
  protectedBot.use(profileFeature);
  protectedBot.use(helpFeature);

  if (isMultipleLocales) {
    protectedBot.use(languageFeature);
  }

  // // must be the last handler
  protectedBot.use(unhandledFeature);

  return bot;
}

export type Bot = ReturnType<typeof createBot>;
