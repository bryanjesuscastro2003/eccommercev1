import { TSections, TType } from "./types"

export interface IProductEntity{
    _id?: string,
    section: TSections
    type: TType,
    name: string,
    description: string,
    specification: string,
    price: number,
    images: string[]
    value: number
    available: boolean
    stock_available: number
}