import { ICar } from "../types";

export interface IEnterProductCarCommandIn{
      user: string,
      action: "ADD"|"SUBSTRACT"|"DELETE",
      product: ICar
}