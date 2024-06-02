import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ParentChat from '../../../screens/Parent/ParentChat';
import ParentChatOpen from '../../../screens/Parent/ParentChatOpen';

const Stack = createNativeStackNavigator();

const ParentChats = () => {
  return (
    <Stack.Navigator
      initialRouteName="ParentChat"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#DBC9E1',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="ParentChat" component={ParentChat} />
      <Stack.Screen name="ParentChatOpen" component={ParentChatOpen} />
    </Stack.Navigator>
  );
};

export default ParentChats;
