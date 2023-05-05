import { ICar } from "../types";

export interface IResponseCommandOut{
    ok: boolean,
    message: string,
    data: ICar[] | null       
}