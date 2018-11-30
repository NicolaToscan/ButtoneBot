"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PingService_1 = require("./Services/PingService");
const SishService_1 = require("./Services/SishService");
class Router {
    static MessageRouter(cmd, args, bot, msg) {
        switch (cmd) {
            case 'ping':
                PingService_1.PingService.Ping(bot, msg);
                break;
            case 'ciao':
                SishService_1.SishService.Ciao(bot, msg);
                break;
            case 'vedere':
                SishService_1.SishService.Vedere(bot, msg);
                break;
            case 'respirare':
                SishService_1.SishService.Respirare(bot, msg);
                break;
            default: break;
        }
    }
}
exports.default = Router;
