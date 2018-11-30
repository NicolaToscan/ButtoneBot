"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PingService {
    static Ping(bot, req) {
        bot.sendMessage({
            to: req.ChannelID,
            message: 'PongPongCiao'
        });
    }
}
exports.PingService = PingService;
