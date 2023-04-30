import express from "express";
import * as http from "http";

export class Server {
  private readonly _port: string;
  private readonly _app: express.Express;
  private _httpServer?: http.Server;

  constructor(port: string) {
    this._port = port;
    this._app = express();
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: true }));
  }

  listen = async (): Promise<void> => {
    return await new Promise((resolve) => {
      this._httpServer = this._app.listen(this._port, () => {
        console.log(`Product service Running on port  ${this._port} `);
      });
      resolve();
    });
  };

  stop = async () : Promise<void> => {
    return await new Promise((resolve, reject) => {
        if(this._httpServer !== null)
            this._httpServer?.close(e => {
                   if(e !== null) return reject(e)
                       return resolve()
            })
        return resolve()
    })
  }

}
