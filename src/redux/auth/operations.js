import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApi, publicApi, setAuthToken } from '../api';

export const isExistUser = createAsyncThunk(
  'auth/isExistUser',
  async (email, thunkAPI) => {
    console.log(email);
    try {
      const { data } = await publicApi.get(`/api/v1/user/email/${email}`);
      console.log(data); // true or false
      return data;
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    console.log('Dispatching loginUser with:', { email, password });
    try {
      const { data } = await publicApi.post('/api/v1/auth/login', {
        email,
        password,
      });
      console.log('Login response data:', data);
      setAuthToken(data.accessToken);
      return data;
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    console.log('Dispatching registerUser with:', userData);
    try {
      const result = await publicApi.post(
        '/api/v1/auth/signup_verify',
        userData
      );
      console.log('Register response data:', result);
      //setAuthToken(data.token);
      return result.status;
    } catch (err) {
      console.error('Register error:', err);
      console.error('Register error status:', err.response?.status);
      console.error('Register error message:', err.message);
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);

export const verifyEmail = createAsyncThunk(
  'auth/verify',
  async (token, thunkAPI) => {
    console.log('Dispatching registerUser with:', token);
    try {
      const result = await publicApi.get(
        `/api/v1/auth/verify-email?token=${token}`
      );
      console.log('Verify response data:', result);
      //setAuthToken(data.token);
      return result.status;
    } catch (err) {
      console.error('Register error:', err);
      console.error('Register error status:', err.response?.status);
      console.error('Register error message:', err.message);
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);

/* /api/v1/auth/verify-email?token={token}) */

export const getUserById = createAsyncThunk(
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

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (userData, thunkAPI) => {
    try {
      console.log('userData', userData);
      const { data } = await privateApi.put(`/api/v1/user`, userData);
      return data;
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
