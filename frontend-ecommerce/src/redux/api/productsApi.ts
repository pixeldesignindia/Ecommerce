import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductsResponse } from "../../types/api-types";


export const latestProductApi = createApi({
  reducerPath: "latestProductApi",
  baseQuery: fetchBaseQuery({
    baseUrl:'http://localhost:4000/api/v1/product/',
  }),
  endpoints: (builder) => ({
    latestProducts:builder.query<ProductsResponse,string>({query:()=>'latest'})
  }),
});


export const { useLatestProductsQuery } = latestProductApi;
