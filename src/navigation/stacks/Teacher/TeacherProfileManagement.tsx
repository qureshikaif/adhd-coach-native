import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TeacherProfileSetting from '../../../screens/Teacher/TeacherProfileSetting';
import TeacherEditPersonalInfo from '../../../screens/Teacher/TeacherEditPersonalInfo';
import TeacherProfile from '../../../screens/Teacher/TeacherProfile';

const Stack = createNativeStackNavigator();

const TeacherProfileManagement = () => {
  return (
    <Stack.Navigator
      initialRouteName="TeacherProfileSettings"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#F0CCCC',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="TeacherProfile" component={TeacherProfile} />
      <Stack.Screen
        name="TeacherProfileSettings"
        component={TeacherProfileSetting}
      />
      <Stack.Screen
        name="TeacherEditPersonalInfo"
        component={TeacherEditPersonalInfo}
      />
    </Stack.Navigator>
  );
};

export default TeacherProfileManagement;
