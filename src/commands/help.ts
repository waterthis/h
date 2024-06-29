import { Context, Composer } from "telegraf";
import { help_message } from "../data/config";

const help_command = (bot: Composer<Context>) => {
  bot.command(["help"], async (ctx: Context) => {
    try {
      await ctx.reply(help_message);
    } catch (error: any) {
      console.log("Something went wrong when replying to user");
      console.log(error.message);
    }
  });
};

export {help_command};