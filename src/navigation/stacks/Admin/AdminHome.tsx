import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AdminMain from '../../../screens/Admin/AdminMain';
import AdminProfile from '../../../screens/Admin/AdminProfile';
import HomeMain from '../../../screens/Home/HomeMain';

const Stack = createNativeStackNavigator();

const AdminHome = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdminPanel"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#A3BACD',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="AdminPanel" component={AdminMain} />
      <Stack.Screen name="AdminProfileSettings" component={AdminProfile} />
      <Stack.Screen name="AppMain" component={HomeMain} />
    </Stack.Navigator>
  );
};

export default AdminHome;
