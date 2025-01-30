import { createSelector } from '@reduxjs/toolkit';

const selectCategoriesState = (state) => state.category;

export const selectCategories = createSelector(
  [selectCategoriesState],
  (categoriesState) => (categoriesState ? categoriesState.categories : [])
);

export const selectIsLoading = (state) => state.category.isLoading;

export const selectError = (state) => state.category.error;

export const selectSelectedFilters = createSelector(
  /* [selectCategoriesState],
  (categoriesState) => (categoriesState ? categoriesState.selectedFilters : {}) */
  [selectCategoriesState],
  (categoriesState) => {
    if (categoriesState) {
      const mergedAttributes = categoriesState.selectedAttributes.reduce(
        (acc, obj) => {
          return { ...acc, ...obj };
        },
        {}
      );
      return { ...categoriesState.selectedFilters, ...mergedAttributes };
    } else return {};
  }
);

export const selectSelectedCategory = createSelector(
  [selectCategoriesState],
  (categoriesState) =>
    categoriesState ? categoriesState.selectedCategory : null
);

export const selectSelectedAttributes = createSelector(
  [selectCategoriesState],
  (categoriesState) =>
    categoriesState ? categoriesState.selectedHeaderAttributes : []
);
