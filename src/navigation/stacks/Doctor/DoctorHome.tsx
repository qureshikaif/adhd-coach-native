import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DoctorMain from '../../../screens/Doctor/DoctorMain';

const Stack = createNativeStackNavigator();

const DoctorHome = () => {
  return (
    <Stack.Navigator
      initialRouteName="DoctorMain"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#A3BACD',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="DoctorMain" component={DoctorMain} />
    </Stack.Navigator>
  );
};

export default DoctorHome;
