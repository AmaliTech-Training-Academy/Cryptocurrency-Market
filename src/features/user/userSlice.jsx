import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
} from "../../utils/localStorage";
import { getUserThunk, loginUserThunk, registerUserThunk } from "./userThunk";
import { changePasswordThunk, updateUserProfileThunk } from "./userThunk";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk("/auth/register", user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginUserThunk("/auth/login", user, thunkAPI);
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (user, thunkAPI) => {
    return updateUserProfileThunk("/auth/update-user", user, thunkAPI);
  }
);

export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async (user, thunkAPI) => {
    return changePasswordThunk("/auth/update-user", user, thunkAPI);
  }
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async (user, thunkAPI) => {
    return getUserThunk("/auth/find-user", user, thunkAPI);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

    storeUser: (state,{payload})=>{
      console.log(payload);
      state.user = {...state.user,firstName:payload.firstName,lastName:payload.lastName,email:payload.email}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
    
      .addCase(registerUser.fulfilled, (state,{payload}) => {
        const {data} = payload
        state.isLoading = false;
        addUserToLocalStorage(data)
        
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state,{payload}) => {
        const data = {...payload}
        state.isLoading = false;
        state.user ={ firstName : data.data.firstName,lastName : data.data.lastName,email : data.data.email}
        addUserToLocalStorage(data)
        toast.success(`Welcome back ${data.data.firstName}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success("User Updated");
      })
      .addCase(updateUserProfile.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updatePassword.pending, (state, { payload }) => {
        state.isLoading = true;
        
      })
      .addCase(updatePassword.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success("Password Updated");
      })
      .addCase(updatePassword.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.success("Password Denied");
      })
      .addCase(getUser.pending, (state, { payload }) => {
        state.isLoading = true;
        
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        const { data } = payload;
        state.isLoading = false;
        state.user = { data };
        // toast.success("Password Updated");
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        // toast.success("Password Denied");
      })
  },
});

export const { toggleSidebar, logoutUser, storeUser } = userSlice.actions;

export default userSlice.reducer;
