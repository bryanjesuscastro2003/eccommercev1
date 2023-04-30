import { EnterLogup } from "../../../domain/in/EnterLogup";

export class LogUpRequest implements EnterLogup{

    constructor(name: string, username: string, email: string, password: string){
         this.email = email
         this.username = username
         this.name = name
         this.password = password
    }

    name!: string;
    username!: string;
    email!: string;
    password!: string;
}