import { IEnterNumPagesCommandIn } from "../../../domain/in/EnterNumPagesCommandIn";
import { TSections, TType } from "../../../domain/types";

export class EnterNumPagesRequest implements IEnterNumPagesCommandIn {
  constructor(section: any, type: any) {
    this.section = section;
    this.type = type;
  }
  section!: TSections;
  type!: TType;
}
