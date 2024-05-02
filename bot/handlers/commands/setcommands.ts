import { BotCommand } from "@grammyjs/types";
import { CommandContext } from "grammy";
import { fluent, isMultipleLocales, supportedLanguage } from "../../I18n";
import config from "../../../config";
import type { Context } from "../../contexts";

function getLanguageCommand(localeCode: string): BotCommand {
  return {
    command: "language",
    description: fluent.translate(localeCode, "language_command.description"),
  };
}

function getSocialCommand(localeCode: string): BotCommand {
  return {
    command: "socials",
    description: fluent.translate(localeCode, "socials_command.description"),
  };
}

function getHelpCommand(localeCode: string): BotCommand {
  return {
    command: "help",
    description: fluent.translate(localeCode, "help_command.description"),
  };
}

function getFriendCommand(localeCode: string): BotCommand {
  return {
    command: "friend",
    description: fluent.translate(localeCode, "friend_command.description"),
  };
}

function getProfileCommand(localeCode: string): BotCommand {
  return {
    command: "profile",
    description: fluent.translate(localeCode, "profile_command.description"),
  };
}

function getPrivateChatCommands(localeCode: string): BotCommand[] {
  return [
    {
      command: "start",
      description: fluent.translate(localeCode, "start_command.description"),
    },
  ];
}

function getPrivateChatAdminCommands(localeCode: string): BotCommand[] {
  return [
    {
      command: "setcommands",
      description: fluent.translate(localeCode, "setcommands_command.description"),
    },
  ];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGroupChatCommands(localeCode: string): BotCommand[] {
  return [];
}

export function getAllPrivateChatCommands(): BotCommand[] {
  const DEFAULT_LANGUAGE_CODE = "en";
  return [
    ...getPrivateChatCommands(DEFAULT_LANGUAGE_CODE),
    ...(isMultipleLocales ? [getLanguageCommand(DEFAULT_LANGUAGE_CODE)] : []),
    getProfileCommand(DEFAULT_LANGUAGE_CODE),
    getSocialCommand(DEFAULT_LANGUAGE_CODE),
    getFriendCommand(DEFAULT_LANGUAGE_CODE),
    getHelpCommand(DEFAULT_LANGUAGE_CODE),
  ];
}

export async function setCommandsHandler(ctx: CommandContext<Context>) {
  const DEFAULT_LANGUAGE_CODE = "en";

  await ctx.api.deleteMyCommands();
  // set private chat commands
  await ctx.api.setMyCommands(
    [
      ...getPrivateChatCommands(DEFAULT_LANGUAGE_CODE),
      ...(isMultipleLocales ? [getLanguageCommand(DEFAULT_LANGUAGE_CODE)] : []),
      getProfileCommand(DEFAULT_LANGUAGE_CODE),
      getSocialCommand(DEFAULT_LANGUAGE_CODE),
      getFriendCommand(DEFAULT_LANGUAGE_CODE),
      getHelpCommand(DEFAULT_LANGUAGE_CODE),
    ],
    {
      scope: {
        type: "all_private_chats",
      },
    },
  );

  if (isMultipleLocales) {
    const requests = supportedLanguage.map(code =>
      ctx.api.setMyCommands(
        [...getPrivateChatCommands(code), ...(isMultipleLocales ? [getLanguageCommand(DEFAULT_LANGUAGE_CODE)] : [])],
        {
          language_code: code,
          scope: {
            type: "all_private_chats",
          },
        },
      ),
    );

    await Promise.all(requests);
  }

  // set group chat commands
  await ctx.api.setMyCommands(getGroupChatCommands(DEFAULT_LANGUAGE_CODE), {
    scope: {
      type: "all_group_chats",
    },
  });

  if (isMultipleLocales) {
    const requests = supportedLanguage.map(code =>
      ctx.api.setMyCommands(getGroupChatCommands(code), {
        language_code: code,
        scope: {
          type: "all_group_chats",
        },
      }),
    );

    await Promise.all(requests);
  }

  // set private chat commands for owner
  await ctx.api.setMyCommands(
    [
      ...getPrivateChatCommands(DEFAULT_LANGUAGE_CODE),
      ...getPrivateChatAdminCommands(DEFAULT_LANGUAGE_CODE),
      ...(isMultipleLocales ? [getLanguageCommand(DEFAULT_LANGUAGE_CODE)] : []),
      getProfileCommand(DEFAULT_LANGUAGE_CODE),
      getSocialCommand(DEFAULT_LANGUAGE_CODE),
      getFriendCommand(DEFAULT_LANGUAGE_CODE),
      getHelpCommand(DEFAULT_LANGUAGE_CODE),
    ],
    {
      scope: {
        type: "chat",
        chat_id: Number(config.BOT_ADMINS),
      },
    },
  );

  return ctx.reply(ctx.t("admin.commands-updated"), { parse_mode: "HTML" });
}
