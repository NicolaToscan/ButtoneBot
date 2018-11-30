
import { Client } from 'discord.io';
import * as logger from "winston";
import Router from './Router';
import MessageRequest from './Models/MessageRequest';

logger.remove(logger.transports.Console);
logger.configure({ level: 'debug' });
logger.format.colorize();

let bot = new Client({
    token: "NTE3OTY2MTQ4NzEzNTc4NTA2.DuJ7eA.gTcLgg8nM1vLSbm4oC6VkTni9hY",
    autorun: true
});

bot.on('ready', (evt) => {
    bot.sendMessage({
        to: "517971055856320512",
        message: "Boyyyyyy, I'm woke"
    })
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', (user, userID, channelID, message, evt) => {

    let req: MessageRequest = new MessageRequest(user, userID, channelID, message);
    if (req.Message.substring(0, 1) == '!') {
        let args = req.Message.substring(1).split(' ');
        req.Command = args[0];
        req.Args = args.splice(1);
    }

    Router.MessageRouter(bot, req);
});