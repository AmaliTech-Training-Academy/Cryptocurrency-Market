import customFetch from "../../utils/axios";


export const registerUserThunk = async ( endPoint,user, thunkAPI) => {
    
    try {
      const resp = await customFetch.post(`${url}/${endPoint}`, user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  };
  
  export const loginUserThunk = async (endPoint,user, thunkAPI) => {
    try {
      const resp = await customFetch.post(`${url}/${endPoint}`, user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  };