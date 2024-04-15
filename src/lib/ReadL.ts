import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { Client } from "discord.js";
import NConsole from "./Console";

const rl = readline.createInterface({ input, output });

class ReadL {
  private client: Client;
  constructor(client: Client) {
    this.client = client;
    NConsole.info("[ReadL]", "Readline initialized.");

    rl.on("line", (input) => {
      try {
        console.debug(eval(input));
      } catch (error) {
        NConsole.error(error);
      }
    });
    rl.on("close", () => {
      NConsole.info("[ReadL]", "Readline closed.");
      client.destroy();
      process.exit(0);
    });
  }
}

export default ReadL;
