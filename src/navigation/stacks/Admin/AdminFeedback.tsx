import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedbackAndSupport from '../../../screens/Admin/FeedbackAndSupport';

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
    </Stack.Navigator>
  );
};

export default AdminFeedback;
