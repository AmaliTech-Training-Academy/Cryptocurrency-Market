import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
<<<<<<< HEAD
import { loginUserThunk, registerUserThunk } from "./userThunk";
=======
import { changePasswordThunk, updateUserProfileThunk } from "./userThunk";
>>>>>>> 977fb35 ( feature:all toggle functions done)

const initialState = {
  isLoading: false,
  user: null,
};

<<<<<<< HEAD
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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUser: (state,{payload})=>{
      state.user = {...state.user,email:payload.email}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state,{payload}) => {
        console.log(payload);
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
        toast.success("Welcome Back");
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
      
  },
});

export const { toggleSidebar, logoutUser,storeUser } = userSlice.actions;
=======
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = { ...payload.data };
        toast.success("User Updated");
      })
      .addCase(updateUserProfile.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updatePassword.pending, (state, { payload }) => {
        state.isLoading = true;
        toast.success("Password Updated");
      })
      .addCase(updatePassword.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(updatePassword.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.success("Password Denied");
      });
  },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;
>>>>>>> 977fb35 ( feature:all toggle functions done)
export default userSlice.reducer;
