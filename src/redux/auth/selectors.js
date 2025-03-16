import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoggedIn = (state) => state.auth?.isLoggedIn;

export const selectIsLoading = (state) => state.auth.isLoading;

export const selectError = (state) => state.auth.error;

export const selectAuth = createSelector(
  [(state) => state.auth], // Input селекторы
  (auth) => ({
    user: auth.user,
    token: auth.token,
  }) // Результирующее значение
);

/* export const selectAuth = (state) => {
  return {
    user: state.auth.user,
    token: state.auth.token,
  };
}; */
