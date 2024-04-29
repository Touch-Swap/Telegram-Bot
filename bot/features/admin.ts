import { chatAction } from "@grammyjs/auto-chat-action";
import { Composer } from "grammy";
import type { Context } from "../contexts";
import { isAdmin } from "../filters/index.js";
import { setCommandsHandler } from "../handlers/index";
import { logHandle } from "../../helpers";

const composer = new Composer<Context>();

const feature = composer.chatType("private").filter(isAdmin);

feature.command("setcommands", logHandle("command-setcommands"), chatAction("typing"), setCommandsHandler);

export { composer as adminFeature };
