import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/userApi";
import { productApi } from "./api/api";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";
// import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { latestProductApi } from "./api/productsApi";
import { cartReducer } from "./cart-reducer";
export const server = "http://localhost:4000";

    export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [latestProductApi.reducerPath]: latestProductApi.reducer,
        //   [orderApi.reducerPath]: orderApi.reducer,
        //   [dashboardApi.reducerPath]: dashboardApi.reducer,
        [userReducer.name]: userReducer.reducer,
        [cartReducer.name]: cartReducer.reducer,
    },
    middleware: (mid) => [
        ...mid(),
        userApi.middleware,
        latestProductApi.middleware,
        productApi.middleware,
        //   orderApi.middleware,
        //   dashboardApi.middleware,
    ],
    });

export type RootState = ReturnType<typeof store.getState>;

// productApi: productApi.reducer,
// userReducer: userReducer.reducer,
// cart: cartReducer.reducer,
// userApi: userApi.reducer,
// latestProductApi: latestProductApi.reducer,
