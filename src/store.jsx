import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import cryptoSlice, { getData } from "./features/crypto/cryptoSlice";

 const store = configureStore({
  reducer: {
    user:userSlice,
    data:cryptoSlice,
  },
});

store.dispatch(getData())

export default store