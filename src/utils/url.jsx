import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";


export const cryptoFecth = axios.create({
    baseURL : `https://api.coinranking.com/v2`
})


  export const  checkForUnauthorizedResponse = (error,thunkAPI) =>{
    if (error.response.status === 401) {
      thunkAPI.dispatch(clearStore());
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }

export default cryptoFecth