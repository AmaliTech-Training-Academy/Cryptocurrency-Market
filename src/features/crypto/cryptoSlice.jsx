import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDataThunk } from "./cryptoThunk";

const initialState = {
    isLoading: false,
    data: null,
  };

  export const getData = createAsyncThunk(
    "user/getData",
    async ( thunkAPI) => {
      return getDataThunk("/coins", thunkAPI);
    }
  );


  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
          .addCase(getData.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getData.fulfilled, (state,{payload}) => {
            const {data} = payload
            state.isLoading = false;
            state.data = data            
          })
          .addCase(getData.rejected, (state, { payload }) => {
            state.isLoading = false;
          })
          
      },
})


    export const {  } = userSlice.actions;
export default userSlice.reducer;