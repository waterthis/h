import { Stage } from 'telegraf/scenes';
import { Telegraf ,session,Context} from 'telegraf';
// import { about_command,help_command,user_command} from './commands';

import {default_handler} from "./text"
// import { about } from './commands';
// import { greeting } from './text';
import { VercelRequest, VercelResponse } from '@vercel/node';
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

//prod mode (Vercel)
export const startVercel = async (req: VercelRequest, res: VercelResponse) => {
  await production(req, res, bot);
};
//dev mode
ENVIRONMENT !== 'production' && development(bot);



// ======================================

default_handler(bot);

