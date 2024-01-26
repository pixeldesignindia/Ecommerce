import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userApi } from "./api/userApi";
import { userReducer } from "./userReducer";
import { latestProductApi } from "./api/productsApi";
import { cartReducer } from "./cart-reducer";
import { orderApi } from "./api/orderApi";

export const server = "http://localhost:4000";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [latestProductApi.reducerPath]: latestProductApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [userReducer.name]: userReducer.reducer,
    [cartReducer.name]: cartReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      latestProductApi.middleware,
      orderApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
