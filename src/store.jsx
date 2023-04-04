import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import cryptoSlice from "./features/crypto/cryptoSlice";

export const store = configureStore({
  reducer: {
    user:userSlice,
    data:cryptoSlice,
  },
});
