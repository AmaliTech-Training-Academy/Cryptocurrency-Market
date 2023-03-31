import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
<<<<<<< HEAD
userSlice

export const store = configureStore({
  reducer: {
    user:userSlice,
=======


export const store = configureStore({
  reducer: {
    user: userSlice,
>>>>>>> 977fb35 ( feature:all toggle functions done)
  },
});
