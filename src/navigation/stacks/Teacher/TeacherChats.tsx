import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TeacherChatbox from '../../../screens/Teacher/TeacherChat';
import TeacherChatBoxOpen from '../../../screens/Teacher/TeacherChatOpen';

const Stack = createNativeStackNavigator();

const TeacherChats = () => {
  return (
    <Stack.Navigator
      initialRouteName="TeacherChat"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#F0CCCC',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="TeacherChat" component={TeacherChatbox} />
      <Stack.Screen name="TeacherChatOpen" component={TeacherChatBoxOpen} />
    </Stack.Navigator>
  );
};

export default TeacherChats;
