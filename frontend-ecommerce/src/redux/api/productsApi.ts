import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoriesResponse, ProductsResponse, SearchProductResponse,SearchProductRequest, NewProductRequest, MessageResponse } from "../../types/api-types";


export const latestProductApi = createApi({
  reducerPath: "latestProductApi",
  baseQuery: fetchBaseQuery({
    baseUrl:'http://localhost:4000/api/v1/product/',
  }),
  endpoints: (builder) => ({
    latestProducts:builder.query<ProductsResponse,string>({query:()=>'latest'}),
    allProducts :builder.query<ProductsResponse,string>({query:(id)=>`admin-products?id=${id}`}),
    categories :builder.query<CategoriesResponse,string>({query:()=>'categories'}),
    searchProducts :builder.query<SearchProductResponse,SearchProductRequest >({query:        ({price,search,sort,category,page})=>{
      let base=`all?search=${search}&page=${page}`
      if(price) base+= `&price=${price}`
      if(sort) base+= `&sort=${sort}`
      if(category) base+= `&category=${category}`
      return base
    }}),
    newProduct:builder.mutation<MessageResponse,NewProductRequest>({query:({formData,id})=>({
      url:`new?id=${id}`,
      method:'POST',
      body:formData
    })}),
  }),
});


export const { useLatestProductsQuery,useAllProductsQuery, useCategoriesQuery,useSearchProductsQuery,useNewProductMutation } = latestProductApi;
