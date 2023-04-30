import { EnterLogin } from "../../../domain/in/EnterLogin";

export class LoginRequest implements EnterLogin{

    constructor(username:string, password: string){
            this.username = username
            this.password = password
    }

    username!: string;
    password!: string;
}