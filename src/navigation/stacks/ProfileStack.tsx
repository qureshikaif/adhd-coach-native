import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeMain from '../../screens/Home/HomeMain';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home Main"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#171E26',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="Home Main" component={HomeMain} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
