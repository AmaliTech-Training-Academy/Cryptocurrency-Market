import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    storePortfolio: (state, { payload }) => {
      state.data.unshift(payload);
    },
    deletePortfolio: (state, { payload }) => {
      state.data = state.data.filter((item) => item.uuid !== payload);
    },
  },
});

export const { storePortfolio, deletePortfolio } = portfolioSlice.actions;
export default portfolioSlice.reducer;
