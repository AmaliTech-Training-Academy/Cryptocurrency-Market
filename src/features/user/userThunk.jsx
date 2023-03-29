import axios from "axios";

const url =`https://address-book-system.onrender.com/api/v1`

export const registerUserThunk = async ( endPoint,user, thunkAPI) => {
    
    try {
      const resp = await axios.post(`${url}/${endPoint}`, user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  };
  
  export const loginUserThunk = async (endPoint,user, thunkAPI) => {
    try {
      const resp = await axios.post(`${url}/${endPoint}`, user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  };