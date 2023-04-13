import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getDataThunk } from "./cryptoThunk";

const initialState = {
    data: [],
  };


  const portfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {
      storePortfolio: (state,{payload})=>{
        state.data.unshift(payload);
      },
      deletePortfolio:(state,{payload})=>{
        state.data = state.data.filter((item)=>item.uuid !== payload)
      }
    },
})


    export const {  storePortfolio, deletePortfolio} = portfolioSlice.actions;
export default portfolioSlice.reducer;