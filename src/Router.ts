import { Client } from "discord.io";
import MessageRequest from "./Models/MessageRequest";
import { PingService } from "./Services/PingService";

export default class Router {

    static MessageRouter(bot: Client, req: MessageRequest) {

        switch (req.Command) {
            case 'ping': PingService.Ping(bot, req); break;
            default: break;
        }
    }


}