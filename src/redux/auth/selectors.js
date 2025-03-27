import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoggedIn = (state) => !!state.auth.token;

export const selectIsLoading = (state) => state.auth.isLoading;

export const selectError = (state) => state.auth.error;

export const selectAuth = createSelector([(state) => state.auth], (auth) => ({
  user: auth.user,
  token: auth.token,
}));
