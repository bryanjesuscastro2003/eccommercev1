import { IUserRepository } from "../domain/UserRepository";
import { EnterLogin } from "../domain/in/EnterLogin";
import { LoginResponse } from "../domain/out/LoginResponse";
import { IAuthServiceRepository } from "../domain/services/AuthServiceRepository";


export class LoginUseCase{
     private readonly _userRepository: IUserRepository
     private readonly _authService: IAuthServiceRepository

     constructor(
                     userRepository: IUserRepository,
                     authService: IAuthServiceRepository                   
                     ){
            this._userRepository = userRepository
            this._authService = authService
     }
     run = async (data: EnterLogin): Promise<LoginResponse> => {
            return this._userRepository.login(data, this._authService);
     }
}