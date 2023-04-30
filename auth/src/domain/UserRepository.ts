import { EnterLogin } from "./in/EnterLogin";
import { EnterLogup } from "./in/EnterLogup";
import { IValidToken } from "./in/ValidateToken";
import { IBaseResponse } from "./out/BsseResponse";
import { LoginResponse } from "./out/LoginResponse";
import { LogUpResponse } from "./out/LogupResponse";
import { IAuthServiceRepository } from "./services/AuthServiceRepository";

export interface IUserRepository{
      login: (data: EnterLogin, service: IAuthServiceRepository) => Promise<LoginResponse>;
      logup: (data: EnterLogup, servuce: IAuthServiceRepository) => Promise<LogUpResponse>;
      validateToken: (data: IValidToken, servuce: IAuthServiceRepository) => Promise<IBaseResponse>;

      findByUsernameOrEmail: (username: string, email: string) => Promise<{username: {state: boolean}, email: {state: boolean}}>

}