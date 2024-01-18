import { Product } from "./types"

export type MessageResponse={
    success:boolean,
    message:string,
}
export type ProductsResponse={
    success:boolean,
    products:Product[],
}