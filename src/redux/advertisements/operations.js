import { privateApi, publicApi } from '../api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllAds = createAsyncThunk(
  'advertisements/getAll',
  async ({ size, page }, thunkAPI) => {
    try {
      const { data } = await publicApi.get('/api/v1/ad', {
        params: { size, page },
      });
      console.log('data', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getHotAds = createAsyncThunk(
  'advertisements/getHot',
  async ({ size, page }, thunkAPI) => {
    try {
      const { data } = await publicApi.get('/api/v1/ad', {
        params: { size, page },
      });
      console.log('data', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
      const { data } = await privateApi.post('/api/v1/ad', formData, {
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
      await privateApi.delete(`/api/v1/ad/${adId}`);
      return adId;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
