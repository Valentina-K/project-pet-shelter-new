import { createSlice } from '@reduxjs/toolkit';
import {
  getAllAds,
  fetchAdvertisements,
  addNewAdvertisement,
  deleteAdvertisement,
  fetchSearchAdvertisements,
  fetchAdvertisementById,
} from './operations';

const advertisementSlice = createSlice({
  name: 'advertisements',
  initialState: {
    advertisement: null,
    items: [],
    filterItems: [],
    searchItems: [],
    totalPages: 0,
    totalElements: 0,
    hasMore: false,
    filteredItems: [],
    searchString: '',
    listOfAttributeCounts: [],
    searchQuery: {
      categoryId: '',
      breed: '',
      age: '',
      size: '',
      gender: '',
      color: '',
      furLength: '',
      priceRange: { min: '', max: '' },
    },
    isLoading: false,
    error: null,
  },
  reducers: {
    resetData(state) {
      state.items = [];
      state.totalElements = 0;
      state.totalPages = 0;
      state.hasMore = false;
    },

    setHasMore(state, action) {
      state.hasMore = action.payload;
    },

    setSearchString(state, action) {
      state.searchString = action.payload;
      state.page = 0;
    },

    clearSearchString(state) {
      state.searchString = '';
      state.page = 0;
    },

    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
      const {
        categoryId,
        breed,
        age,
        size,
        gender,
        color,
        furLength,
        priceRange,
      } = action.payload;
      const minPrice = priceRange.min || '';
      const maxPrice = priceRange.max || '';

      state.filteredItems = state.items.filter((advert) => {
        const matchesCategory = !categoryId || advert.categoryId === categoryId;
        const matchesBreed = !breed || advert.breed === breed;
        const matchesAge = !age || advert.age === age;
        const matchesSize = !size || advert.size === size;
        const matchesGender = !gender || advert.gender === gender;
        const matchesColor = !color || advert.color === color;
        const matchesFurLength = !furLength || advert.furLength === furLength;
        const matchesPriceRange =
          (!minPrice || advert.price >= minPrice) &&
          (!maxPrice || advert.price <= maxPrice);

        return (
          matchesCategory &&
          matchesBreed &&
          matchesAge &&
          matchesSize &&
          matchesGender &&
          matchesColor &&
          matchesFurLength &&
          matchesPriceRange
        );
      });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvertisementById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.advertisement = null;
      })
      .addCase(fetchAdvertisementById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.advertisement = action.payload;
      })
      .addCase(fetchAdvertisementById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        state.advertisement = null;
      })
      .addCase(getAllAds.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllAds.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.hasMore) state.items.push(...action.payload.content);
        else state.items = action.payload.content;
        state.totalPages = action.payload.page.totalPages;
        state.totalElements = action.payload.page.totalElements;
        state.error = null;
      })
      .addCase(getAllAds.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch advertisements';
      })
      .addCase(fetchAdvertisements.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAdvertisements.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filterItems = action.payload.page.content;
        state.totalPages = action.payload.page.page.totalPages;
        state.totalElements = action.payload.page.page.totalElements;
        state.listOfAttributeCounts = action.payload.listOfAttributeCounts;
        state.error = null;
      })
      .addCase(fetchAdvertisements.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch advertisements';
      })
      .addCase(fetchSearchAdvertisements.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSearchAdvertisements.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filterItems = action.payload.page.content;
        state.totalPages = action.payload.page.page.totalPages;
        state.totalElements = action.payload.page.page.totalElements;
        state.listOfAttributeCounts = action.payload.listOfAttributeCounts;
        state.error = null;
      })
      .addCase(fetchSearchAdvertisements.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch advertisements';
      })
      .addCase(addNewAdvertisement.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addNewAdvertisement.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
        state.filteredItems = state.items;
      })
      .addCase(addNewAdvertisement.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to add new advertisement';
      })
      .addCase(deleteAdvertisement.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteAdvertisement.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (advert) => advert.id !== action.payload
        );
        state.filteredItems = state.items.filter((advert) =>
          advert.title.includes(state.searchQuery.title)
        );
      })
      .addCase(deleteAdvertisement.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to delete advertisement';
      });
  },
});

export const {
  setSearchQuery,
  setPage,
  setSize,
  setHasMore,
  resetData,
  setSearchString,
  clearSearchString,
} = advertisementSlice.actions;

export default advertisementSlice.reducer;
