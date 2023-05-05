import { IUserEntity } from "../../../domain/User.entity";
import { IUserRepository } from "../../../domain/UserRepository";
import { EnterLogin } from "../../../domain/in/EnterLogin";
import { EnterLogup } from "../../../domain/in/EnterLogup";
import { IValidToken } from "../../../domain/in/ValidateToken";
import { IBaseResponse } from "../../../domain/out/BsseResponse";
import { LoginResponse } from "../../../domain/out/LoginResponse";
import { LogUpResponse } from "../../../domain/out/LogupResponse";
import { IAuthServiceRepository } from "../../../domain/services/AuthServiceRepository";
import { connection } from "../../driven-adapters/mongo/Connection"; 
import UserModel from "../../driven-adapters/mongo/models/User.model";
import { LogInRes, LogUpRes } from "../out";

export class MongoDbPersistence implements IUserRepository{
    
    constructor(){
            try {
                  this.connectDB()
            } catch (error) {}
    }

     connectDB = async () : Promise<void> => {
            await connection()
     }


    login = async (data: EnterLogin, service: IAuthServiceRepository): Promise<LoginResponse> => {
        try{
                const user: IUserEntity | null = await UserModel.findOne({
                      username: data.username
                })
                if(user == null) throw new Error("Not found")
                if(! await service.validatePassword(data.password, user.password))
                         throw new Error("Invalid password");
                const token = await service.generateJwt(user.username);
                return new LogInRes(token, true, "Login ok");
            }catch(e){
                console.log(e)
                let error = e instanceof Error ? e.message : "Unexpected error"
                if(error.includes("Not found"))
                     error = "User not found"
                else if(error.includes("Invalid password"))
                     error = "Invalid password"
                else
                    error = "Unexpected error try again later :/"
                return new LogInRes("", false, "Login error : " + error );
            }
    }
  
    logup = async (data: EnterLogup, service: IAuthServiceRepository) : Promise<LogUpResponse> => {
            try{
                const validateData = await service.validateUsernameAndEmal(data.username, data.email)
                if(!validateData.username.state)
                    throw new Error("Invalid data : username is already used")
                if(!validateData.email.state)
                    throw new Error("Invalid data : email is already used")
                const passwordHashed = await service.ecryptPassoword(data.password)
                const newUser = await UserModel.create({...data, password: passwordHashed})
                const token = await service.generateJwt(newUser.username);
                return new LogUpRes(token, true, "Account created ok");
            }catch(e){
                console.log(e)
                let error = e instanceof Error ? e.message : "Unexpected error"
                if(error.includes("Not found"))
                     error = "User not found"
                else if(error.includes("Invalid password"))
                     error = "Invalid password"
                else if(error.includes("Invalid data"))
                     error = e instanceof Error ? e.message : "Unexpected error"
                else
                    error = "Unexpected error try again later :/"
                return new LogUpRes("", false, error);
            }            
    }

    validateToken = async (data: IValidToken, service: IAuthServiceRepository) : Promise<IBaseResponse> => {
             try{
                const tokenValidation = await service.validateJwt(data.token)
                if(tokenValidation === null)
                     throw new Error("Invalid token")
                return new LogInRes(data.token, true, "Healthy token")
             }catch(e){
                return new LogUpRes("", false, "Unhealthy token");
             }
    } 

    findByUsernameOrEmail = async (username: string, email: string) : Promise<{ username: { state: boolean; }; email: { state: boolean; }; }> => {
           try{
                 const responseDt = await Promise.all([
                        UserModel.findOne({username}),
                         UserModel.findOne({email})        
                 ]) 
                 const usernameState = responseDt[0] === null
                 const emailState = responseDt[1] === null
                 return {
                      username: {
                         state : usernameState
                      },
                      email: {
                         state: emailState
                      }
                 }
           } catch(e){
            return {
                username: {
                   state : false
                },
                email: {
                   state: false
                }
           }
           }       
    }
}