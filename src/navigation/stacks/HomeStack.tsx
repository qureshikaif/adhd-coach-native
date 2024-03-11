import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeMain from '../../screens/Home/HomeMain';
import Signup from '../../screens/Authentication/Signup';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#8D5A39',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="Home Main" component={HomeMain} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default HomeStack;
