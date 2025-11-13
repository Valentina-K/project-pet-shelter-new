import { createSlice } from '@reduxjs/toolkit';
import { getHotAds, getAllHotAds } from './operations';

const hotadsSlice = createSlice({
  name: 'hotads',
  initialState: {
    items: [],
    searchItems: [],
    totalPages: 0,
    totalElements: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    resetData(state) {
      state.items = [];
      state.totalElements = 0;
      state.totalPages = 0;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getHotAds.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getHotAds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.content;
        state.totalPages = action.payload.page.totalPages;
        state.totalElements = action.payload.page.totalElements;
        state.error = null;
      })
      .addCase(getHotAds.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch hot advertisements';
      })
      .addCase(getAllHotAds.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllHotAds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.content;
        state.totalPages = action.payload.page.totalPages;
        state.totalElements = action.payload.page.totalElements;
        state.error = null;
      })
      .addCase(getAllHotAds.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch hot advertisements';
      });
  },
});

export const { resetData } = hotadsSlice.actions;

export default hotadsSlice.reducer;
