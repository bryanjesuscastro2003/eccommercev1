import { TType } from "../types"

export interface IEnterGetProductCommandIn {
    section: string
    type: TType
    idProduct: string
}