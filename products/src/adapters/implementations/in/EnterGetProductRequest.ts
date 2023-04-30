import { IEnterGetProductCommandIn } from "../../../domain/in/GetProductCommandIn";
import { TType } from "../../../domain/types";

export class EnterGetProductRequest implements IEnterGetProductCommandIn {
  constructor(section: string, type: any, _id: string) {
    this.section = section;
    this._id = _id;
    this.type = type;
  }
  section!: string;
  type!: TType;
  _id!: string;
}
