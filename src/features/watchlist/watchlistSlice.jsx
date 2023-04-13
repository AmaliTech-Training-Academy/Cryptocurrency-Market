 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getDataThunk } from "./cryptoThunk";

const initialState = {
    data: [],
  };


  const watchListSlice = createSlice({
    name: "watchList",
    initialState,
    reducers: {
      storeWatchList: (state,{payload})=>{
        state.data.unshift(payload);
      }
    },
})


    export const {  storeWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;