import { LogUpResponse } from "../../../domain/out/LogupResponse";

export class LogUpRes implements LogUpResponse {

    constructor(token: string, ok: boolean, message: string){
         this.token = token
         this.message = message
         this.ok = ok
    }

    token!: string;
    ok!: boolean;
    message!: string; 
}