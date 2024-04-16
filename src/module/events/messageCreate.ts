import { EventOptions } from "@/decorator";
import { Events, Message } from "discord.js";
import NConsole from "@/utils/Console";

@EventOptions({
  name: Events.MessageCreate,
})
class MessageCreate {
  async execute(message: Message) {
    NConsole.info("[MesgeE]", `Message received: ${message.content}`);
  }
}

export default MessageCreate;
