export const selectAdvertisements = (state) => state.advertisements.items;

export const selectFilteredAdvertisements = (state) =>
  state.advertisements.filteredItems;

export const selectSearchQuery = (state) => state.advertisements.searchQuery;

export const selectIsLoading = (state) => state.advertisements.isLoading;

export const selectError = (state) => state.advertisements.error;

export const selectPage = (state) => state.advertisements.page;

export const selectTotalPage = (state) => state.advertisements.totalPages;

export const selectTotalElements = (state) =>
  state.advertisements.totalElements;

export const selectSize = (state) => state.advertisements.size;

//export const selectHasMore = (state) => state.advertisements.hasMore;
