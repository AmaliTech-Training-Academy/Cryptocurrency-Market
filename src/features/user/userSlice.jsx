import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";
import { loginUserThunk, registerUserThunk } from "./userThunk";
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


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUser: (state, { payload }) => {
      console.log(payload);
      state.user = { ...payload };
    },
    logoutUser: (state,) => {
      state.user = null;
      removeUserFromLocalStorage();
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const {data} = payload
        state.isLoading = false;
        state.user = data
        addUserToLocalStorage(data);
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state,{payload}) => {
        const {data} = payload
        state.isLoading = false;
        state.user = data
        addUserToLocalStorage(data);
        toast.success(`Welcome back ${data.firstName}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("User Updated");
      })
      .addCase(updateUserProfile.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updatePassword.pending, (state, ) => {
        state.isLoading = true;
      })
      .addCase(updatePassword.fulfilled, (state,) => {
        state.isLoading = false;
        toast.success("Password Updated");
      })
      .addCase(updatePassword.rejected, (state) => {
        state.isLoading = false;
        toast.success("Password Denied");
      })
    
      
  },
});

export const { toggleSidebar, logoutUser, storeUser } = userSlice.actions;

export default userSlice.reducer;
