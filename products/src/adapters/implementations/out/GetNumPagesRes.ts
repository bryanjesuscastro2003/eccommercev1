import { IGetNumPagesResponseCommandOut } from "../../../domain/out/GetNumPagesCommandOut";

export class GetNumPagesRes implements IGetNumPagesResponseCommandOut {
  constructor(pages: number, ok: boolean, message: string) {
    this.pages = pages;
    this.ok = ok;
    this.message = message;
  }

  pages: number;
  ok: boolean;
  message: string;
}
