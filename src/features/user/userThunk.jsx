import axios from "axios";
import customFetch from "../../utils/axios";
customFetch



export const registerUserThunk = async ( url,user, thunkAPI) => {
    
    try {
      const resp = await customFetch.post(url, user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  };
  
  export const loginUserThunk = async (url,user, thunkAPI) => {
    try {
      const resp = await customFetch.post(url, user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  };