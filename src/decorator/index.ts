import { Events } from "discord.js";

export function EventOptions(options: { name: Events; once: boolean }) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (constructor: Function) {
    constructor.prototype.name = options.name;
    constructor.prototype.once = options.once;
  };
}
