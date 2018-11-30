import { Client, Message } from "discord.js";

export class SishService {

    public static Ciao(bot: Client, msg: Message): void {
        msg.channel.send(msg.channel.id).then(x => {
        })
        setTimeout(() => {
            msg.delete()
        }, 2000)
    }

    public static Vedere(bot: Client, msg: Message): void {
        msg.channel.send("I can see", {
            files: ["https://media.tenor.com/images/b2ccb082e478cc375b4d0ae5da8f5968/tenor.gif"]
        });
        setTimeout(() => {
            msg.channel.send("I can fight");
        }, 500);
    }

    public static Respirare(bot: Client, msg: Message): void {
        msg.channel.send("I can breath", {
            files: ["https://i.imgur.com/pkCRIR4.gif"]
        });
        setTimeout(() => {
            msg.channel.send("I can fight");
        }, 500);
    }


}