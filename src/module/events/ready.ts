import { Events } from "discord.js";
import type NERO from "@/classes/NERO";
import NConsole from "@/utils/Console";
import { EventOptions } from "@/decorator";
import { activityConf } from "@/config/main.conf";
// import { ActivityPresence } from "../../config/main.conf";

@EventOptions({
  name: Events.ClientReady,
  once: true,
})
class ReadyEvent {
  async execute(client: NERO) {
    NConsole.info("[ReadyE]", "Client Onlines.");

    // Set the client's presence. every 5 minute change the presence.
    let i: number = 0;
    setInterval(() => {
      if (i >= activityConf.activityOptions.length) i = 0;
      client.user?.setActivity(activityConf.activityOptions[i]);
      i++;
    }, activityConf.activityTime);
  }
}

export default ReadyEvent;
