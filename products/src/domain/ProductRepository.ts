import { IEnterGetProductCommandIn, IEnterGetProductsCommandIn, IEnterNumPagesCommandIn} from "./in";
import { IGetNumPagesResponseCommandOut, IGetProductResponseCommandOut, IGetProductsResponseCommandOut } from "./out";

export interface IProductRepository{
    getNumberOfPages: (data: IEnterNumPagesCommandIn) => Promise<IGetNumPagesResponseCommandOut>
    getProducts: (data: IEnterGetProductsCommandIn) => Promise<IGetProductsResponseCommandOut>    
    getProduct: (data: IEnterGetProductCommandIn) => Promise<IGetProductResponseCommandOut>
}