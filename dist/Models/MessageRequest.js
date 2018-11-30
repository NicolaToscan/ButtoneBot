"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessageRequest {
    constructor(User, UserId, ChannelID, Message, Command = "", Args = []) {
        this.User = User;
        this.UserId = UserId;
        this.ChannelID = ChannelID;
        this.Message = Message;
        this.Command = Command;
        this.Args = Args;
    }
}
exports.default = MessageRequest;
