import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedbackAndSupport from '../../../screens/Admin/FeedbackAndSupport';
import AdminChat from '../../../screens/Admin/AdminChat';
import ChatSupport from '../../../screens/Admin/ChatSupport';

const Stack = createNativeStackNavigator();

const AdminFeedback = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdminFeedbackMain"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#A3BACD',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="AdminFeedbackMain" component={FeedbackAndSupport} />
      <Stack.Screen name="ChatSupport" component={AdminChat} />
      <Stack.Screen name="Chat" component={ChatSupport} />
    </Stack.Navigator>
  );
};

export default AdminFeedback;
