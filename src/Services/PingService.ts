import { Client, Message } from "discord.js";

export class PingService {

    public static Ping(bot: Client, msg: Message): void {
        msg.channel.send("Pong");

    }

}