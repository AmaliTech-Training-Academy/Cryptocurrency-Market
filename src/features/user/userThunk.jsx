import axios from "axios";


const url =`https://address-book-system.onrender.com/api/v1/`

export const registerUserThunk = async ( user, thunkAPI) => {
    try {
      const resp = await axios.post(url, user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  };
  
  export const loginUserThunk = async (user, thunkAPI) => {
    try {
      const resp = await axios.post(url, user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  };