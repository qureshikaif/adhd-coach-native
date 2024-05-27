import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ParentMain from '../../../screens/Parent/ParentMain';

const Stack = createNativeStackNavigator();

const ParentHome = () => {
  return (
    <Stack.Navigator
      initialRouteName="ParentMain"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#A3BACD',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="ParentMain" component={ParentMain} />
    </Stack.Navigator>
  );
};

export default ParentHome;
