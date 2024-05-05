import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeMain from '../../screens/Home/HomeMain';
import Signup from '../../screens/Authentication/Signup';
import Signin from '../../screens/Authentication/Signin';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home Main"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#8D5A39',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="Home Main" component={HomeMain} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
};

export default HomeStack;
