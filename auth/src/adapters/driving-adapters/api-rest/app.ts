import { Server } from "./Server";
import "dotenv/config";

export class AuthService {
  server?: Server;

  start = async (): Promise<void> => {
    const port = process.env.PORT || "4001";
    this.server = new Server(port);
    return await this.server.listen();
  };

  stop = async (): Promise<void> => {
    return await this.server?.stop();
  };
}
