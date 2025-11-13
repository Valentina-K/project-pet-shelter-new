export const selectAuthorById = (authorId) => (state) =>
  state.authors?.entities[authorId];
