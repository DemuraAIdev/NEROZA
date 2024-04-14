import { Client, ClientOptions } from "discord.js";

/**
 * Represents the NERO class, which extends the Client class.
 * This class is used to create a new client instance.
 * @class
 * @extends Client
 */
class NERO extends Client {
  constructor(options: ClientOptions) {
    super(options);
  }

  /**
   * Initializes the NERO class with the provided token.
   * @async
   * @param token - The token used for authentication.
   * @returns A promise that resolves when the initialization is complete.
   */
  public async init(token: string): Promise<void> {
    await this.login(token);
  }
}

export default NERO;
