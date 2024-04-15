import { EventOptions } from "../../decorator";
import { Events, Message } from "discord.js";
import NConsole from "../../lib/Console";

@EventOptions({
  name: Events.MessageCreate,
})
class MessageCreate {
  async execute(message: Message) {
    NConsole.info("[MessageE]", `Message received: ${message.content}`);
  }
}

export default MessageCreate;
