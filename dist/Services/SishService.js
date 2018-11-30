"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SishService {
    static Ciao(bot, msg) {
        msg.channel.send(msg.channel.id).then(x => {
            console.log(x);
        });
        setTimeout(() => {
            msg.delete();
        }, 2000);
    }
    static Vedere(bot, msg) {
        msg.channel.send("I can see", {
            files: ["https://media.tenor.com/images/b2ccb082e478cc375b4d0ae5da8f5968/tenor.gif"]
        });
        setTimeout(() => {
            msg.channel.send("I can fight");
        }, 500);
    }
    static Respirare(bot, msg) {
        msg.channel.send("I can breath", {
            files: ["https://i.imgur.com/pkCRIR4.gif"]
        });
        setTimeout(() => {
            msg.channel.send("I can fight");
        }, 500);
    }
}
exports.SishService = SishService;
