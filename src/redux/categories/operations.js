import { privateApi, publicApi } from '../api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCategories = createAsyncThunk(
  'category/getCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await publicApi.get('/api/v1/category/counted');
      return data.content;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
//api/v1/ad/counted?category=1
//listOfAttributeCounts
export const getCategoryById = createAsyncThunk(
  'category/getCategoryById',
  async (categoryId, thunkAPI) => {
    try {
      const { data } = await publicApi.get(`/api/v1/category/${categoryId}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
// /api/v1/category/counted
export const updateCategory = createAsyncThunk(
  'category/updateCategory',
  async ({ id, payload }, thunkAPI) => {
    try {
      const { data } = await privateApi.put(`/api/v1/category/${id}`, payload);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  'category/deleteCategory',
  async (id, thunkAPI) => {
    try {
      await privateApi.delete(`/api/v1/category/${id}`);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
