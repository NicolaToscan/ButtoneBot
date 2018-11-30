import MessageRequest from "../Models/MessageRequest";
import { Client } from "discord.io";

export class PingService {

    public static Ping(bot: Client, req: MessageRequest): void {
        bot.sendMessage({
            to: req.ChannelID,
            message: 'PongPongCiao'
        });
    }

}