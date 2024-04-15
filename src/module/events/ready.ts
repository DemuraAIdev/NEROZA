import { Events, ActivityType } from "discord.js";
import type NERO from "../../classes/NERO";
import NConsole from "../../lib/Console";
import { EventOptions } from "../../decorator";

@EventOptions({
  name: Events.ClientReady,
  once: true,
})
class ReadyEvent {
  async execute(client: NERO) {
    NConsole.info("[ReadyE]", "Client Online.");
    client.user?.setActivity({
      name: "NERO",
      type: ActivityType.Listening,
    });
  }
}

export default ReadyEvent;
