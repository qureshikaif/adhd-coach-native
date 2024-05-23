import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppAnalytics from '../../../screens/Admin/AppAnalytics';

const Stack = createNativeStackNavigator();

const AdminAppAnalytics = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdminAppAnalyticsMain"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#8D5A39',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="AdminAppAnalyticsMain" component={AppAnalytics} />
    </Stack.Navigator>
  );
};

export default AdminAppAnalytics;
