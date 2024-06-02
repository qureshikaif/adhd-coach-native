import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DoctorChatbox from '../../../screens/Doctor/DoctorChat';
import DoctorChatBoxOpen from '../../../screens/Doctor/DoctorChatOpen';

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
      <Stack.Screen name="DoctorChat" component={DoctorChatbox} />
      <Stack.Screen name="DoctorChatOpen" component={DoctorChatBoxOpen} />
    </Stack.Navigator>
  );
};

export default DoctorChats;
