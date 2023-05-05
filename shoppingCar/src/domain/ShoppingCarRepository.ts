import { IGetCarCommandIn, IEnterProductCarCommandIn } from "./in";
import { IResponseCommandOut } from "./out/ResponseCommandOut";

export interface IShoppingCarRepository{
     addorSubstractProduct: (data : IEnterProductCarCommandIn) => Promise<IResponseCommandOut>   
     getCar: (data: IGetCarCommandIn) => Promise<IResponseCommandOut>    
}