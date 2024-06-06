import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DoctorChat from '../../../screens/Doctor/DoctorChat';
import DoctorChatOpen from '../../../screens/Doctor/DoctorChatOpen';

const Stack = createNativeStackNavigator();

const DoctorChats = () => {
  return (
    <Stack.Navigator
      initialRouteName="DoctorChat"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#DEB5B5',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="DoctorChat" component={DoctorChat} />
      <Stack.Screen name="DoctorChatOpen" component={DoctorChatOpen} />
    </Stack.Navigator>
  );
};

export default DoctorChats;
