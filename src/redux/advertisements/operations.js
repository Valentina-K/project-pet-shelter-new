import { publicApi } from '../api';
import { createAsyncThunk } from '@reduxjs/toolkit';

//axios.defaults.baseURL = import.meta.env.VITE_API_URL;
// /api/v1/ad/counted?category=3&page=0&size=7&sort=price,desc
export const fetchAdvertisements = createAsyncThunk(
  'advertisements/fetchAll',
  async ({ page, size, filters = {} }, thunkAPI) => {
    console.log(page, size, filters);
    try {
      const { data } = await publicApi.get('/api/v1/ad/counted', {
        params: { page, size, ...filters },
      });
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchSearchAdvertisements = createAsyncThunk(
  'advertisements/fetchSearchAll',
  async ({ page, size, query = {} }, thunkAPI) => {
    try {
      const { data } = await publicApi.get('/api/v1/ad/counted', {
        params: { page, size, ...query },
      });
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addNewAdvertisement = createAsyncThunk(
  'advertisement/addNew',
  async (formData, thunkAPI) => {
    try {
      const { data } = await publicApi.post('/api/v1/ad', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (err) {
      console.error(
        'Error adding advertisement:',
        err.response ? err.response.data : err.message
      );
      return thunkAPI.rejectWithValue(
        err.response ? err.response.data : err.message
      );
    }
  }
);

export const deleteAdvertisement = createAsyncThunk(
  'advertisements/delete',
  async (adId, thunkAPI) => {
    try {
      await publicApi.delete(`/api/v1/ad/${adId}`);
      return adId;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
