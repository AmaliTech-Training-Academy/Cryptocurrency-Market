<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> e14c10a4edabf5371579b050cb54b4c86a7d3e07
import customFetch from "../../utils/axios";

export const updateUserProfileThunk = async(url,user,thunkAPI) => {
    try {
        const response = await customFetch.put(url, user);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}

export const changePasswordThunk = async(url,user,thunkAPI) => {
    try {
        const response = await customFetch.put(url, user);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}

<<<<<<< HEAD
>>>>>>> 977fb35 ( feature:all toggle functions done)
=======
>>>>>>> e14c10a4edabf5371579b050cb54b4c86a7d3e07
