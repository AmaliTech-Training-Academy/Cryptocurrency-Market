import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import cryptoSlice from "./features/crypto/cryptoSlice";
import watchlistSlice from "./features/watchlist/watchlistSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import portfolio from "./features/portfolio/portfolioSlice";
import asset from "./features/asset/assetSlice"


const persistConfig = {
  key:'root',
  storage
}

const reducer = combineReducers({
  user:userSlice,
  data:cryptoSlice,
  watchList:watchlistSlice, 
<<<<<<< HEAD
  portfolio:portfolio,
  asset:asset
=======
  portfolio:portfolio
  
>>>>>>> 8180bf2 (feature:style readjustment)
})

const persistedReducer = persistReducer(persistConfig,reducer)
 export const store = configureStore({
  reducer: persistedReducer
});

