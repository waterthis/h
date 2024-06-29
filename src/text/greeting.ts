
import { Context, Composer } from "telegraf";
import createDebug from "debug";
const debug = createDebug('bot:greeting_text');


const default_handler = (bot: Composer<Context>) => {
  bot.on(["message"], async (ctx: Context) => {
    const message = `Bot is under maintainance 🤗.`;
    debug(`Triggered "about" command with message \n${message}`);
    await ctx.replyWithMarkdownV2(message, { parse_mode: "Markdown" });
  });
};

export { default_handler };
