import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";
import { loginUserThunk, registerUserThunk } from "./userThunk";
import { changePasswordThunk, updateUserProfileThunk } from "./userThunk";
import { setCookie } from "../../helpers";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  refreshToken: null,
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
      state.user = { ...payload };
    },
    logoutUser: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { data } = payload;

        const accessToken = data.access_token;
        const refreshToken = data.refresh_token

        setCookie("accessToken", accessToken, 1);

        state.refreshToken = refreshToken

        delete data.access_token;
        delete data.refresh_token

        state.isLoading = false;
        state.user = data;
        addUserToLocalStorage(data);
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { data } = payload;

        const accessToken = data.access_token;
        const refreshToken = data.refresh_token
        
        setCookie("accessToken", accessToken, 1);

        state.refreshToken = refreshToken
        state.isLoading = false;
        state.user = data;

        delete data.access_token;
        delete data.refresh_token

        addUserToLocalStorage(data);
        toast.success(`Welcome back ${data.firstName}`);
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        toast.error("Invalid Email or Passsword");
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
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Password Updated");
      })
      .addCase(updatePassword.rejected, (state) => {
        state.isLoading = false;
        toast.success("Password Denied");
      });
  },
});

export const { toggleSidebar, logoutUser, storeUser } = userSlice.actions;

export default userSlice.reducer;