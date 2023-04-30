import { IEnterGetProductsCommandIn } from "../../../domain/in/EnterGetProductsCommandIn";
import { TSections, TType } from "../../../domain/types";

export class EnterGetProductsRequest implements IEnterGetProductsCommandIn {
  constructor(section: any, type: any, page: any) {
    this.section = section;
    this.page = page;
    this.type = type;
  }
  section!: TSections;
  type!: TType;
  page!: number;
}
