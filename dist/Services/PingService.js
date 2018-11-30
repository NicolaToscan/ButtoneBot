"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PingService {
    static Ping(bot, msg) {
        msg.channel.send("Pong");
    }
}
exports.PingService = PingService;
