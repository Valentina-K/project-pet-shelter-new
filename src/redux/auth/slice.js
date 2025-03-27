import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  registerUser,
  isExistUser,
  getUserById,
} from './operations';
import { privateApi } from '../api';

const initialState = {
  user: null,
  id: null,
  token: null,
  isExistUser: false,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.id = action.payload.id;
  state.token = action.payload.accessToken;
  state.isExistUser = true;
  state.error = null;
  //localStorage.setItem('accessToken',action.payload.accessToken); //add to localStorage
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.user = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.id = null;
      state.token = null;
      //localStorage.removeItem('accessToken');
      delete privateApi.defaults.headers.common['Authorization'];
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
      .addCase(getUserById.pending, handlePending)
      .addCase(getUserById.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getUserById.rejected, handleRejected);
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
