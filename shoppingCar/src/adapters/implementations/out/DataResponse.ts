import { IResponseCommandOut } from "../../../domain/out/ResponseCommandOut";
import { ICar } from "../../../domain/types";

export class ResponseData implements IResponseCommandOut {
  ok: boolean;
  message: string;
  data: ICar[] | null;

  constructor(ok: boolean, message: string, data: ICar[] | null) {
    this.ok = ok;
    this.message = message;
    this.data = data;
  }
}
