import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/userApi";
import { productApi } from "./api/api";
import cartReducer from './reducer'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
export const server = import.meta.env.VITE_API_URL
const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const reducer = combineReducers({
    productApi: productApi.reducer,
    userReducer: userReducer.reducer,
    cart: cartReducer,
    userApi: userApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }).concat(productApi.middleware).concat(userApi.middleware),
})
