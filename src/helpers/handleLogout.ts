export const handleLogout = (store: any) => {
  store.setAuthenticated(false);
  store.setUser(null);
};
