import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import cryptoSlice, { getData } from "./features/crypto/cryptoSlice";
import watchListSlice from "./features/watchlist/watchlistSlice";

 const store = configureStore({
  reducer: {
    user:userSlice,
    data:cryptoSlice,
    watchList:watchListSlice
  },
});

