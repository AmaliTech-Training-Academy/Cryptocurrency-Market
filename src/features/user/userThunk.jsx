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

