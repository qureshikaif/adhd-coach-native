import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountManagementMain from '../../../screens/Admin/AccountManagement/AccountManagementMain';

const Stack = createNativeStackNavigator();

const AdminAccountManagement = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdminAccountManagementMain"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#8D5A39',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen
        name="AdminAccountManagementMain"
        component={AccountManagementMain}
      />
    </Stack.Navigator>
  );
};

export default AdminAccountManagement;
