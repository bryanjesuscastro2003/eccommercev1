import { IEnterGetProduct } from "../../../domain/in/GetProductCommandIn";
import { TType } from "../../../domain/types";

export class EnterGetProductRequest implements IEnterGetProduct{
    section!: string;
    type!: TType;
    idProduct!: string;    
} 