import { IEnterGetProducts } from "../../../domain/in/EnterGetProductsCommandIn";
import { TSections, TType } from "../../../domain/types";

export class EnterGetProductsRequest implements IEnterGetProducts{
    section!: TSections;
    type!: TType;
    page!: number;
} 