import { ClientOptions, GatewayIntentBits } from "discord.js";

/**
 * Configuration options for the client.
 * @type {ClientOptions}
 */
export const clientOptions: ClientOptions = {
  allowedMentions: { parse: ["users"] },
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
};
