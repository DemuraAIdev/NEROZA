import { Events } from "discord.js";

export function EventOptions(options: {
  name: Events;
  once?: boolean;
  enabled?: boolean;
}) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function <T extends Function>(target: T) {
    target.prototype.name = options.name;
    target.prototype.once = options.once ?? false;
    target.prototype.enabled = options.enabled ?? true;
  };
}
