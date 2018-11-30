import { Client, Message } from "discord.js";
import { PingService } from "./Services/PingService";
import { SishService } from "./Services/SishService";

export default class Router {

    static MessageRouter(cmd: string, args: string[], bot: Client, msg: Message) {

        switch (cmd) {
            case 'ping': PingService.Ping(bot, msg); break;
            case 'ciao': SishService.Ciao(bot, msg); break;
            case 'vedere': SishService.Vedere(bot, msg); break;
            case 'respirare': SishService.Respirare(bot, msg); break;
            default: break;
        }
    }


}