import { createSlice } from '@reduxjs/toolkit';
import {
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from './operations';

const initialState = {
  categories: [],
  selectedFilters: {},
  selectedCategory: {},
  selectedAttributes: [],
  selectedHeaderAttributes: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.selectedFilters = { ...action.payload };
    },
    toggleFilter: (state, action) => {
      const categoryId = action.payload.category;
      const currentValue = state.selectedFilters['category'];
      if (currentValue === categoryId) {
        state.selectedFilters = {};
        state.selectedCategory = {};
      } else state.selectedFilters = { category: categoryId };
    },
    clearFilters: (state) => {
      state.selectedFilters = {};
      state.selectedCategory = {};
    },
    addAttributes: (state, action) => {
      state.selectedAttributes.push(action.payload);
      const value = Object.values(action.payload);
      state.selectedHeaderAttributes.push(value[0]);
    },
    toggleAttributes: (state, action) => {
      const value = Object.values(action.payload);
      const index = state.selectedAttributes.findIndex((attr) =>
        Object.values(attr).includes(value[0])
      );
      if (index !== -1) {
        state.selectedAttributes.splice(index, 1);
      } else state.selectedAttributes.push(action.payload);

      const headerIndex = state.selectedHeaderAttributes.indexOf(value[0]);
      if (headerIndex !== -1) {
        state.selectedHeaderAttributes.splice(headerIndex, 1);
      } else state.selectedHeaderAttributes.push(value[0]);
    },
    clearAttributes: (state) => {
      state.selectedAttributes = [];
      state.selectedHeaderAttributes = [];
    },
    clearAttributeByName: (state, action) => {
      const index = state.selectedAttributes.findIndex((attr) =>
        Object.values(attr).includes(action.payload)
      );
      if (index !== -1) {
        state.selectedAttributes.splice(index, 1);
      }
      const headerIndex = state.selectedHeaderAttributes.indexOf(
        action.payload
      );
      if (headerIndex !== -1) {
        state.selectedHeaderAttributes.splice(headerIndex, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, handlePending)
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, handleReject)
      .addCase(getCategoryById.pending, handlePending)
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCategory = action.payload;
      })
      .addCase(getCategoryById.rejected, handleReject)
      .addCase(updateCategory.pending, handlePending)
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.categories.findIndex(
          (category) => category.id === action.payload.id
        );
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(updateCategory.rejected, handleReject)
      .addCase(deleteCategory.pending, handlePending)
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = state.categories.filter(
          (category) => category.id !== action.payload
        );
      })
      .addCase(deleteCategory.rejected, handleReject);
  },
});

export const {
  toggleFilter,
  clearFilters,
  addFilter,
  addAttributes,
  clearAttributes,
  clearAttributeByName,
  toggleAttributes,
} = categorySlice.actions;

export const categoriesReducer = categorySlice.reducer;
