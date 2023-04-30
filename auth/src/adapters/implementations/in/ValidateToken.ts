import { IValidToken } from "../../../domain/in/ValidateToken"

export class validateTokenRequest implements IValidToken {
      constructor(token: string){
          this.token = token
      }
      token!: string
}