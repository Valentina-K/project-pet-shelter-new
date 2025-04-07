import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApi, publicApi } from '../api';

export const getAllAttributes = createAsyncThunk(
  'attributes/getAll',
  async (_, thunkAPI) => {
    try {
      const response = publicApi.get(`/api/v1/attribute`);

      console.log('response getAllAttributes', response);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const createNewAttribute = createAsyncThunk(
  'attributes/createNew',
  async (_, thunkAPI) => {
    try {
      const response = privateApi.post('/api/v1/attribute');

      console.log('response createNewAttributes', response);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getAttributeById = createAsyncThunk(
  'attributes/getAttributeById',
  async ({ attrId }, thunkAPI) => {
    try {
      const response = publicApi.get(`/api/v1/attribute${attrId}`);

      console.log('response getAtrById', response);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
