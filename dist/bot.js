"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const logger = require("winston");
const Router_1 = require("./Router");
logger.remove(logger.transports.Console);
logger.configure({ level: 'debug' });
logger.format.colorize();
let bot = new discord_js_1.Client();
bot.on('ready', () => {
    console.log("Wee");
});
bot.on('message', (message) => {
    let args = [];
    let cmd = "";
    if (message.content.substring(0, 1) == '!') {
        args = message.content.substring(1).split(' ');
        cmd = args[0].toLocaleLowerCase();
        args = args.splice(1);
    }
    Router_1.default.MessageRouter(cmd, args, bot, message);
});
bot.login("NTE3OTY2MTQ4NzEzNTc4NTA2.DuJ7eA.gTcLgg8nM1vLSbm4oC6VkTni9hY");
