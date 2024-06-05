import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ParentMain from '../../../screens/Parent/ParentMain';
import DoctorsList from '../../../screens/Parent/DoctorList';

const Stack = createNativeStackNavigator();

const ParentHome = () => {
  return (
    <Stack.Navigator
      initialRouteName="ParentMain"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#DBC9E1',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="ParentMain" component={ParentMain} />
      <Stack.Screen name="DoctorsList" component={DoctorsList} />
    </Stack.Navigator>
  );
};

export default ParentHome;
