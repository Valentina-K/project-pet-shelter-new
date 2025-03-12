import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  registerUser,
  isExistUser,
  getUserByEmail,
} from './operations';
import axios from 'axios';

const initialState = {
  user: null,
  email: null,
  token: null,
  isExistUser: false,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.email = action.payload.email;
  state.token = action.payload.accessToken;
  state.isExistUser = true;
  state.isLoggedIn = true;
  state.error = null;
  //localStorage.setItem('accessToken',action.payload.accessToken); //add to localStorage
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.user = null;
  state.email = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      //localStorage.removeItem('accessToken');
      delete axios.defaults.headers.common['Authorization'];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(isExistUser.pending, handlePending)
      .addCase(isExistUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isExistUser = true;
        state.error = null;
      })
      .addCase(isExistUser.rejected, handleRejected)
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, handleFulfilled)
      .addCase(registerUser.rejected, handleRejected)
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, handleFulfilled)
      .addCase(loginUser.rejected, handleRejected)
      .addCase(getUserByEmail.pending, handlePending)
      .addCase(getUserByEmail.fulfilled, (state, action) => {
        state.user = action.payload;
        state.email = action.payload.email;
        state.error = null;
      })
      .addCase(getUserByEmail.rejected, handleRejected);
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
