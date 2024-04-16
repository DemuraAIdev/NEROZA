import "dotenv/config";
import { clientOptions } from "./config/main.conf";
import TOKEN from "./config/token.conf";
import NERO from "./classes/NERO";
import NConsole from "./utils/Console";

const client = new NERO(clientOptions);

client.init(TOKEN);

process.on("unhandledRejection", (error) => {
  NConsole.error("Unhandled rejection:", error);
});

process.on("uncaughtException", (error) => {
  NConsole.error("Uncaught exception:", error);
});

process.on("SIGINT", () => {
  client.destroy();
  process.exit(0);
});
