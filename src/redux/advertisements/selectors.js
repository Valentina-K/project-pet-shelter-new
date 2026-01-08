import { createSelector } from '@reduxjs/toolkit';
import { selectSelectedCategory } from '../categories/selectors';
export const selectAdvertisements = (state) => state.advertisements.items;

export const selectTopAdvertisements = createSelector(
  [selectAdvertisements],
  (items) => items.slice(0, 4)
);

export const selectFilteredAdvertisements = (state) =>
  state.advertisements.filterItems;

export const selectListOfAttributeCounts = (state) =>
  state.advertisements.listOfAttributeCounts;

export const selectSearchString = (state) => state.advertisements.searchString;

export const selectListAttrByCategory = createSelector(
  [selectSelectedCategory, selectListOfAttributeCounts],
  (selectedCategory, listOfAttributeCounts) =>
    selectedCategory.attribute?.map((attr) =>
      listOfAttributeCounts.filter((item) => item.name === attr.name)
    )
);

export const selectSearchQuery = (state) => state.advertisements.searchQuery;

export const selectIsLoading = (state) => state.advertisements.isLoading;

export const selectError = (state) => state.advertisements.error;

export const selectPage = (state) => state.advertisements.page;

export const selectTotalPage = (state) => state.advertisements.totalPages;

export const selectTotalElements = (state) =>
  state.advertisements.totalElements;

//export const selectSize = (state) => state.advertisements.size;

export const selectHasMore = (state) => state.advertisements.hasMore;
