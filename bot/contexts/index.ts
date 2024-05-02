import { Update, UserFromGetMe } from "@grammyjs/types";
import { Context as DefaultContext, SessionFlavor, type Api } from "grammy";
import type { AutoChatActionFlavor } from "@grammyjs/auto-chat-action";
import type { HydrateFlavor } from "@grammyjs/hydrate";
import type { ParseModeFlavor } from "@grammyjs/parse-mode";
import type { Logger } from "../logger";
import { LanguageType } from "../I18n";
import { FluentContextFlavor } from "@grammyjs/fluent";

export type SessionData = {
  __language_code: LanguageType;
  // field?: string;
};

type ExtendedContextFlavor = {
  logger: Logger;
};

export type Context = ParseModeFlavor<
  HydrateFlavor<
    DefaultContext & ExtendedContextFlavor & SessionFlavor<SessionData> & FluentContextFlavor & AutoChatActionFlavor
  >
>;

interface Dependencies {
  logger: Logger;
}

export function createContextConstructor({ logger }: Dependencies) {
  return class extends DefaultContext implements ExtendedContextFlavor {
    logger: Logger;

    constructor(update: Update, api: Api, me: UserFromGetMe) {
      super(update, api, me);

      this.logger = logger.child({
        update_id: this.update.update_id,
      });
    }
  } as unknown as new (update: Update, api: Api, me: UserFromGetMe) => Context;
}
