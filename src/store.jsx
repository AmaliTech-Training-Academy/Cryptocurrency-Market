import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import cryptoSlice, { getData } from "./features/crypto/cryptoSlice";
import watchlistSlice from "./features/watchlist/watchlistSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key:'root',
  storage
}

const reducer = combineReducers({
  user:userSlice,
  data:cryptoSlice,
  watchList:watchlistSlice 
})

const persistedReducer = persistReducer(persistConfig,reducer)
 export const store = configureStore({
  reducer: persistedReducer
});

