import { publicApi } from '../api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getHotAds = createAsyncThunk(
  'hotads/getHot',
  async ({ isHot = true }, thunkAPI) => {
    try {
      const { data } = await publicApi.get('/api/v1/ad', {
        params: { isHot },
      });
      console.log('data', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllHotAds = createAsyncThunk(
  'hotads/getAllHot',
  async ({ isHot, size, query = {} }, thunkAPI) => {
    try {
      const { data } = await publicApi.get('/api/v1/ad', {
        params: { isHot, size, ...query },
      });
      console.log('data', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
