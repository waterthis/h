import { Telegraf ,session,Context} from 'telegraf';
import { Stage } from 'telegraf/scenes';
import { VercelRequest, VercelResponse } from '@vercel/node';

import { about_command,help_command} from './commands';
import {default_handler} from "./text"
import { development, production } from './core';

const BOT_TOKEN = process.env.BOT_TOKEN || '';
const ENVIRONMENT = process.env.NODE_ENV || '';

interface SessionData {
  group_data:any
}

interface BotContext extends Context {
  session?: SessionData
}



const bot = new Telegraf<BotContext>(BOT_TOKEN);
// bot.command('about', about());
// bot.on('message', greeting());

about_command(bot);
default_handler(bot);
help_command(bot);
// user_command(bot);



//prod mode (Vercel)
export const startVercel = async (req: VercelRequest, res: VercelResponse) => {
  await production(req, res, bot);
};

//dev mode
ENVIRONMENT !== 'production' && development(bot);

