import "dotenv/config";
import NERO from "./classes/NERO.js";
import { clientOptions } from "./config/main.conf.js";
import TOKEN from "./config/token.conf.js";

const client = new NERO(clientOptions);

client.init(TOKEN);
