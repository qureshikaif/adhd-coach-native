import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TeacherChatbox from '../../../screens/Teacher/TeacherChat';
import TeacherChatBoxOpen from '../../../screens/Teacher/TeacherChatBoxOpen';

const Stack = createNativeStackNavigator();

const TeacherProgressReport = () => {
  return (
    <Stack.Navigator
      initialRouteName="TeacherChat"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#A3BACD',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="TeacherChat" component={TeacherChatbox} />
      <Stack.Screen name="TeacherChatOpen" component={TeacherChatBoxOpen} />
    </Stack.Navigator>
  );
};

export default TeacherProgressReport;
