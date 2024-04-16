// import { ClientEvents } from "discord.js";

export interface IEventClass {
  new (...args: unknown[]): {
    name: string;
    enabled: boolean;
    once: boolean;
    execute(...args: unknown[]): void;
  };
}
