import {IBaseResponse} from "./BsseResponse"

export interface LoginResponse extends  IBaseResponse{
         token: string
}