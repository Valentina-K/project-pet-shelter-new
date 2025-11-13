import { createSlice } from '@reduxjs/toolkit';
import {
  getAllAds,
  fetchAdvertisements,
  addNewAdvertisement,
  deleteAdvertisement,
  fetchSearchAdvertisements,
} from './operations';

const advertisementSlice = createSlice({
  name: 'advertisements',
  initialState: {
    items: [],
    filterItems: [],
    searchItems: [],
    /* page: 0, */
    /* size: 8, */
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
      /* state.page = 0; */
      state.totalElements = 0;
      state.totalPages = 0;
      state.hasMore = false;
    },
    /* setPage(state, action) {
      state.page = action.payload;
    }, */
    /* setSize(state, action) {
      state.size = action.payload;
    }, */
    setHasMore(state, action) {
      state.hasMore = action.payload;
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
      .addCase(getAllAds.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllAds.fulfilled, (state, action) => {
        console.log(state.hasMore);
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
        console.log('from state 1', state.items);
        state.isLoading = false;
        if (state.hasMore) state.items.push(...action.payload.page.content);
        else state.filterItems = action.payload.page.content;
        state.totalPages = action.payload.page.page.totalPages;
        state.totalElements = action.payload.page.page.totalElements;
        state.listOfAttributeCounts = action.payload.listOfAttributeCounts;
        state.error = null;
        console.log('from state 2', state.items);
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
        state.items = action.payload.page.content;
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

export const { setSearchQuery, setPage, setSize, setHasMore, resetData } =
  advertisementSlice.actions;

export default advertisementSlice.reducer;
