import { IEnterGetProductCommandIn} from "./in/GetProductCommandIn";
import { IEnterGetProductsCommandIn } from "./in/EnterGetProductsCommandIn";
import { IEnterNumPagesCommandIn } from "./in/EnterNumPagesCommandIn";
import { IGetNumPagesResponseCommandOut } from "./out/GetNumPagesCommandOut";
import { IGetProductResponseCommandOut } from "./out/GetProductCommandOut";
import { IGetProductsResponseCommandOut } from "./out/GetProductsCommandOut";

export interface IProductRepository{
    getNumberOfPages: (data: IEnterNumPagesCommandIn) => Promise<IGetNumPagesResponseCommandOut>
    getProducts: (data: IEnterGetProductsCommandIn) => Promise<IGetProductsResponseCommandOut>    
    getProduct: (data: IEnterGetProductCommandIn) => Promise<IGetProductResponseCommandOut>
}