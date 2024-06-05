import AsyncStorage from '@react-native-async-storage/async-storage';

export const handleLogout = (store: any) => {
  store.setAuthenticated(false);
  store.setUser(null);
  AsyncStorage.removeItem('lastSubmissionTime');
};
