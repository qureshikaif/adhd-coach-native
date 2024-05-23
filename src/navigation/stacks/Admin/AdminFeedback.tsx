import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppAnalytics from '../../../screens/Admin/AppAnalytics';

const Stack = createNativeStackNavigator();

const AdminFeedback = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdminFeedbackMain"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#8D5A39',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="AdminFeedbackMain" component={AppAnalytics} />
    </Stack.Navigator>
  );
};

export default AdminFeedback;
