import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    user: null,
  };


  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      
    },
})


  export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;