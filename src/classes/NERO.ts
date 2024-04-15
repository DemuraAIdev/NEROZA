import { Client, ClientOptions } from "discord.js";
import NConsole from "../lib/Console";
import eventHandler from "./eventHandler";
import path from "path";
import ReadL from "../lib/ReadL";

/**
 * Represents the NERO class, which extends the Client class.
 * This class is used to create a new client instance.
 * @class
 * @extends Client
 */
class NERO extends Client {
  constructor(options: ClientOptions) {
    super(options);
    NConsole.info("[NERO]", "Client initialized.");
  }

  public readonly eventHandler = new eventHandler(
    this,
    path.join(__dirname, "../module/events")
  );
  public readonly readL = new ReadL(this);

  /**
   * Initializes the NERO class with the provided token.
   * @async
   * @param token - The token used for authentication.
   * @returns A promise that resolves when the initialization is complete.
   */

  public async init(token: string): Promise<NERO> {
    await this.login(token);
    await this.eventHandler.loadEvents();
    return this;
  }
}

export default NERO;
