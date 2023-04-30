import { LoginResponse } from "../../../domain/out/LoginResponse";

export class LogInRes implements LoginResponse{

    constructor(token: string, ok: boolean, message: string){
        this.token = token
        this.message = message
        this.ok = ok
   }

    token!: string;
    ok!: boolean;
    message!: string;
}