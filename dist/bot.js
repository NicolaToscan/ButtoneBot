"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_io_1 = require("discord.io");
const logger = require("winston");
const Router_1 = require("./Router");
const MessageRequest_1 = require("./Models/MessageRequest");
logger.remove(logger.transports.Console);
logger.configure({ level: 'debug' });
logger.format.colorize();
let bot = new discord_io_1.Client({
    token: "NTE3OTY2MTQ4NzEzNTc4NTA2.DuJ7eA.gTcLgg8nM1vLSbm4oC6VkTni9hY",
    autorun: true
});
bot.on('ready', (evt) => {
    bot.sendMessage({
        to: "517971055856320512",
        message: "Boyyyyyy, I'm woke"
    });
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', (user, userID, channelID, message, evt) => {
    console.log(channelID);
    let req = new MessageRequest_1.default(user, userID, channelID, message);
    if (req.Message.substring(0, 1) == '!') {
        let args = req.Message.substring(1).split(' ');
        req.Command = args[0];
        req.Args = args.splice(1);
    }
    Router_1.default.MessageRouter(bot, req);
});
