import { Context, Composer } from "telegraf";
import createDebug from "debug";

import { author, name, version } from "../../package.json";

const debug = createDebug("bot:about_command");

const about_command = (bot: Composer<Context>) => {
  bot.command(["about"], async (ctx: Context) => {
    const message = `This Bot designed to inform G53 students about their ratings on *Codeforces*.`;
    debug(`Triggered "about" command with message \n${message}`);
    await ctx.replyWithMarkdownV2(message, { parse_mode: "Markdown" });
  });
};

export { about_command };
