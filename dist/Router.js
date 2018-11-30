"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PingService_1 = require("./Services/PingService");
class Router {
    static MessageRouter(bot, req) {
        switch (req.Command) {
            case 'ping':
                PingService_1.PingService.Ping(bot, req);
                break;
            default: break;
        }
    }
}
exports.default = Router;
