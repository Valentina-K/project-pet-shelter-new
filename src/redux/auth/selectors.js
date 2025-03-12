export const selectIsLoggedIn = (state) => state.auth?.isLoggedIn;

export const selectIsLoading = (state) => state.auth.isLoading;

export const selectError = (state) => state.auth.error;

export const selectAuth = (state) => {
  return {
    user: state.auth.user,
    token: state.auth.token,
  };
};
