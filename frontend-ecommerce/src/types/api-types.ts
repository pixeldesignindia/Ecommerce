import { Product } from "./types";

    export type MessageResponse = {
    success: boolean;
    message: string;
    };
    export type ProductsResponse = {
    success: boolean;
    products: Product[];
    };
    export type CategoriesResponse = {
    success: boolean;
    categories: string[];
    };
    export type CustomError = {
    status: number;
    data: {
        message: string;
        success: boolean;
    };
    };
    export interface SearchProductResponse{
        success:boolean;
        products:Product[];
        totalPage:number;
    }
    export type SearchProductRequest = {
        price:number;
        page:number;
        category:string;
        sort:string;
        search:string;
    }
    export type ProductResponse = {
        success: boolean;
        product:Product;
    }
    export type NewProductRequest = {
        id:string;
        formData:FormData;
    }
    export type UpdateProductRequest = {
        userId:string;
        productId:string;
        formData:FormData;
    }
    export type DeleteProductRequest = {
        userId:string;
        productId:string;
    }
