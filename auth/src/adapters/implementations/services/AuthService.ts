import { IAuthServiceRepository } from "../../../domain/services/AuthServiceRepository";
import jwt from "jsonwebtoken";
import "dotenv/config";
import bcrypt from "bcrypt";
import { IUserRepository } from "../../../domain/UserRepository";

export class AuthService implements IAuthServiceRepository {
  private readonly _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  ecryptPassoword = async (plainPassword: string): Promise<string> => {
    try {
      return await bcrypt.hash(plainPassword, 10);
    } catch (error) {
      throw error;
    }
  };
  validatePassword = async (
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean> => {
    try {
      return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (e) {
      return false;
    }
  };
  validateUsernameAndEmal = async (
    username: string,
    email: string
  ): Promise<{
    username: { state: boolean; };
    email: { state: boolean;  };
  }> => {
       return await this._userRepository.findByUsernameOrEmail(username, email);
  };
  generateJwt = (body: string): string => {
    return jwt.sign({data: body}, process.env.SECRET_CODE || "secret", {expiresIn : "5h"});
  };

  validateJwt = async (token: string): Promise<string | null> => {
    try{
           const data = await jwt.verify(token, process.env.SECRET_CODE || "secret")
           return data.toString()
    }catch(e){
          return null;
    }
  };
}
