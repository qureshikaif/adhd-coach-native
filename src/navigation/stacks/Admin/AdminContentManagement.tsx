import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContentManagementMain from '../../../screens/Admin/CourseManagement/ContentManagementMain';
import AddNewArticle from '../../../screens/Admin/CourseManagement/AddNewArticle';

const Stack = createNativeStackNavigator();

const AdminContentManagement = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdminContentManagementMain"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#A3BACD',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen
        name="AdminContentManagementMain"
        component={ContentManagementMain}
      />
      <Stack.Screen name="AddNewArticle" component={AddNewArticle} />
    </Stack.Navigator>
  );
};

export default AdminContentManagement;
