export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
