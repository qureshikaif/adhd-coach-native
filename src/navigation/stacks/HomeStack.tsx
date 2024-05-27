import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeMain from '../../screens/Home/HomeMain';
import Signup from '../../screens/Authentication/Signup';
import Signin from '../../screens/Authentication/Signin';
import ForgotPassword from '../../screens/Authentication/ForgotPassword/ForgotPassword';
import ForgotPasswordVerify from '../../screens/Authentication/ForgotPassword/ForgotPasswordVerify';
import ForgotPasswordLast from '../../screens/Authentication/ForgotPassword/ForgotPasswordLast';
import Assessment from '../../screens/Assessment';

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
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen
        name="ForgotPasswordVerify"
        component={ForgotPasswordVerify}
      />
      <Stack.Screen name="ForgotPasswordLast" component={ForgotPasswordLast} />
      <Stack.Screen
        name="Assessment"
        component={Assessment}
        initialParams={{questionIndex: 0}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
