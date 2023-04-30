import { IUserRepository } from "../domain/UserRepository";
import { EnterLogup } from "../domain/in/EnterLogup";
import { LogUpResponse } from "../domain/out/LogupResponse";
import { IAuthServiceRepository } from "../domain/services/AuthServiceRepository";

export class LogupUseCase {
  private readonly _userRepository: IUserRepository;
  private readonly _authService: IAuthServiceRepository

  constructor(
          userRepository: IUserRepository,
          authService: IAuthServiceRepository     
          ) {
      this._userRepository = userRepository
      this._authService = authService
  }

  run = async (data: EnterLogup) : Promise<LogUpResponse> => {
    return this._userRepository.logup(data, this._authService);
  }

}
