import cryptoFecth from "../../utils/url";



export const getDataThunk = async (url, thunkAPI) => {
  try {
    const resp = await cryptoFecth.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

// export const loginUserThunk = async (url, user, thunkAPI) => {
//   try {
//     const resp = await cryptoFecth.post(url, user);
//     return resp.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data.msg);
//   }
// };
