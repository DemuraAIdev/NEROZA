import {
  ActivityOptions,
  ActivityType,
  ClientOptions,
  GatewayIntentBits,
} from "discord.js";

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

/**
 * The activity presence options for the client.
 * @type {ActivityOptions[]}
 */
const activityOptions: ActivityOptions[] = [
  { name: "NERO", type: ActivityType.Listening },
  { name: "NERO", type: ActivityType.Watching },
  { name: "NERO", type: ActivityType.Playing },
];

export const activityConf = {
  activityOptions,
  activityTime: 300000,
};
