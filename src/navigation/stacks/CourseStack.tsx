import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AdminMain from '../../screens/Admin/AdminMain';
import AccountManagementMain from '../../screens/Admin/AccountManagement/AccountManagementMain';
import ContentManagementMain from '../../screens/Admin/CourseManagement/ContentManagementMain';
import AddNewArticle from '../../screens/Admin/CourseManagement/AddNewArticle';
import AdminProfile from '../../screens/Admin/AdminProfile';
import AppAnalytics from '../../screens/Admin/AppAnalytics';

const Stack = createNativeStackNavigator();

const CourseStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdminMain"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#A3BACD',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="AdminMain" component={AdminMain} />
      <Stack.Screen
        name="AccountManagementMain"
        component={AccountManagementMain}
      />
      <Stack.Screen
        name="ContentManagementMain"
        component={ContentManagementMain}
      />
      <Stack.Screen name="AddNewArticle" component={AddNewArticle} />
      <Stack.Screen name="AdminProfile" component={AdminProfile} />
      <Stack.Screen name="AppAnalytics" component={AppAnalytics} />
    </Stack.Navigator>
  );
};

export default CourseStack;
