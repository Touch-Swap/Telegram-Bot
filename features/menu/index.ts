import { Menu } from "@grammyjs/menu";

// Create a bot.
// Create a simple menu.
const menu = new Menu("my-menu-identifier")
  .text("A", ctx => ctx.reply("You pressed A!"))
  .row()
  .text("B", ctx => ctx.reply("You pressed B!"));

export default menu;
