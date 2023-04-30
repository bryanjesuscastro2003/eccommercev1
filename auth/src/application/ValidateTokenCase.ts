import { IUserRepository } from "../domain/UserRepository";
import { IValidToken } from "../domain/in/ValidateToken";
import { IBaseResponse } from "../domain/out/BsseResponse";
import { IAuthServiceRepository } from "../domain/services/AuthServiceRepository";

export class ValidateTokenUseCase {
  private readonly _userRepository: IUserRepository;
  private readonly _authService: IAuthServiceRepository

  constructor(
        userRepository: IUserRepository,
        authService: IAuthServiceRepository
        ) {
    this._userRepository = userRepository;
    this._authService = authService
  }

  run = async (data: IValidToken): Promise<IBaseResponse> => {
    return this._userRepository.validateToken(data, this._authService);
  };
}
