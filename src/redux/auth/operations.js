import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApi, setAuthToken } from '../api';

/* const setAuthHeader = (token) => {
  if (token) {
    console.log('Setting auth header with token:', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    console.log('Removing auth header');
    delete axios.defaults.headers.common['Authorization'];
  }
}; */

export const isExistUser = createAsyncThunk(
  'auth/isExistUser',
  async (email) => {
    try {
      const { data } = await privateApi.get(`/api/v1/user/email/${email}`);
      console.log(data);
      return true;
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      return false;
      //return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    console.log('Dispatching loginUser with:', { email, password });
    try {
      const { data } = await privateApi.post('/api/v1/auth/login', {
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
      const { data } = await privateApi.post('/api/v1/auth/signup', userData);
      console.log('Register response data:', data);
      setAuthToken(data.token);
      return data;
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

export const getUserByEmail = createAsyncThunk(
  'auth/getUserByEmail',
  async (email, thunkAPI) => {
    try {
      const { data } = await privateApi.get(`/api/v1/user/email/${email}`);
      return data;
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
