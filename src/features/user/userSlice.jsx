import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { loginUserThunk, registerUserThunk } from "./userThunk";

const initialState = {
  isLoading: false,
  user: {},
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk("auth/register", user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    return loginUserThunk("auth/login", user, thunkAPI);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUser: (state,{payload})=>{
      console.log(payload);
      state.user = {...state.user,email:payload.email}
      console.log(state.user);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state,{payload}) => {
        state.isLoading = false;
        state.user = {...state.user,...payload.data}
        toast.success("User Created");
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state,{payload}) => {
        state.isLoading = false;
        state.user = {...state.user,...payload.data}
        toast.success("User Created");
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
      
  },
});

export const { toggleSidebar, logoutUser,storeUser } = userSlice.actions;
export default userSlice.reducer;
