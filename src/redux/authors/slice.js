// usersSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { fetchUserById } from './operations';

const authorsSlice = createSlice({
  name: 'authors',
  initialState: {
    entities: {}, // userId -> userData
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        const user = action.payload;
        state.entities[user.id] = user;
        state.loading = false;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.error = action.error.message ?? null;
        state.loading = false;
      });
  },
});

export default authorsSlice.reducer;
