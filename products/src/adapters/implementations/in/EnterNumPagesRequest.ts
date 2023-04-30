import { IEnterNumPages } from "../../../domain/in/EnterNumPagesCommandIn";
import { TSections, TType } from "../../../domain/types";

export class EnterNumPagesRequest implements IEnterNumPages{
    section!: TSections;
    type!: TType;
}


