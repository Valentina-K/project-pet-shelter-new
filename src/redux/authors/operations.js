import { createAsyncThunk } from '@reduxjs/toolkit';
import { publicApi } from '../api';

export const fetchUserById = createAsyncThunk(
  'auth/getUserById',
  async (id, thunkAPI) => {
    try {
      const { data } = await publicApi.get(`/api/v1/user/${id}`);
      console.log('get user by id', data);
      return data;
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
