import { chatAction } from "@grammyjs/auto-chat-action";
import { Composer } from "grammy";
import type { Context } from "../contexts";
import { isAdmin } from "../../filter";
import { setCommandsHandler } from "../handlers";
import { logHandle } from "../../helpers";

const composer = new Composer<Context>();

const feature = composer.chatType("private").filter(isAdmin);

feature.command("setcommands", logHandle("command-setcommands"), chatAction("typing"), setCommandsHandler);

export { composer as setCommandFeature };
