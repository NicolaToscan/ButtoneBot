
import { Client, Message, Channel } from 'discord.js';
import * as logger from "winston";
import Router from './Router';

logger.remove(logger.transports.Console);
logger.configure({ level: 'debug' });
logger.format.colorize();

let bot = new Client();

bot.on('ready', () => {
    console.log("Wee");
});

bot.on('message', (message: Message) => {
    
    let args: string[] = [];
    let cmd: string = "";
    if (message.content.substring(0, 1) == '!') {
        args = message.content.substring(1).split(' ');
        cmd = args[0].toLocaleLowerCase();
        args = args.splice(1);
    }

    Router.MessageRouter(cmd, args, bot, message);
});

bot.login("BOT-TOKEN")
