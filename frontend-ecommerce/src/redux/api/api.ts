import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productApi = createApi({
    reducerPath:'productApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://fakestoreapi.com/',
    }),
    endpoints:(builder)=>({
        getProducts:builder.query<Product[],string>({query:()=>'products/'})
    })
})

export {productApi}
export const {useGetProductsQuery}=productApi