export default class MessageRequest {
    constructor(
        public User: string,
        public UserId: string,
        public ChannelID: string,
        public Message: string,
        public Command: string = "",
        public Args: string[] = []
    ) {
    }

}