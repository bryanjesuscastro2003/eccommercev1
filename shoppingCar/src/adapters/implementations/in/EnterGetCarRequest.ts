import { IGetCarCommandIn } from "../../../domain/in";

export class EnterGetCarRequest implements IGetCarCommandIn {
  user: string;
  constructor(user: string) {
    this.user = user;
  }
}
