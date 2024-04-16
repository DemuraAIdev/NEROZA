import type NERO from "./NERO";
import path from "path";
import fs from "fs";
import NConsole from "@/utils/Console";
import { IEventClass } from "@/types/event";

/**
 * Handles loading and executing events for the client.
 */
class eventHandler {
  private client: NERO;
  private path: string;

  /**
   * Constructs a new eventHandler instance.
   * @param client The client instance.
   * @param Epath The path to the event folder.
   */
  constructor(client: NERO, Epath: string) {
    NConsole.info("[EventH]", "Event handler initialized.");
    this.client = client;
    this.path = Epath;
  }

  /**
   * Loads and executes events from the specified path.
   * @returns An array of loaded event names.
   */
  public async loadEvents(): Promise<void> {
    const eventFiles = await (
      await fs.readdirSync(this.path)
    ).filter((file) => file.endsWith(".js"));
    for (const file of eventFiles) {
      try {
        const EventClass = (await import(path.join(this.path, file)))
          .default as IEventClass;
        const eventInstance = new EventClass();

        // check if the event is a valid not undefined
        NConsole.info("[EventH]", `Loaded event: ${eventInstance.name}`);
        if (eventInstance) {
          if (!eventInstance.enabled) {
            NConsole.warn("[EventH]", `Event disabled: ${eventInstance.name}`);
            continue;
          }
          if (eventInstance.once) {
            this.client.once(eventInstance.name, (...args) =>
              eventInstance.execute(...args)
            );
          } else {
            this.client.on(eventInstance.name, (...args) =>
              eventInstance.execute(...args)
            );
          }
        }
      } catch (error) {
        NConsole.error("[EventH]", `Error loading event: ${file}`);
        NConsole.error(error);
      }
    }
  }

  /**
   * Unloads all events from the client.
   */
  public unloadEvents(): boolean {
    this.client.removeAllListeners();
    NConsole.info("All events unloaded.");
    return true;
  }

  /**
   * Reloads all events from the client.
   * @returns An array of loaded event names.
   */
  public async reloadEvents(): Promise<void> {
    this.unloadEvents();
    await this.loadEvents();
  }

  /**
   * Compiles the events in the specified path.
   * @param options The compiler options.
   */
}

export default eventHandler;
