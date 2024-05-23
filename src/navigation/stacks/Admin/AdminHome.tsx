import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AdminMain from '../../../screens/Admin/AdminMain';
import AdminProfile from '../../../screens/Admin/AdminProfile';

const Stack = createNativeStackNavigator();

const AdminHome = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdminPanel"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#8D5A39',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="AdminPanel" component={AdminMain} />
      <Stack.Screen name="AdminProfileSettings" component={AdminProfile} />
    </Stack.Navigator>
  );
};

export default AdminHome;
