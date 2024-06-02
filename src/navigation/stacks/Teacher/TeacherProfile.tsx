import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TeacherProfileSetting from '../../../screens/Teacher/TeacherProfileSetting';
import TeacherEditPersonalInfo from '../../../screens/Teacher/TeacherEditPersonalInfo';

const Stack = createNativeStackNavigator();

const TeacherProfile = () => {
  return (
    <Stack.Navigator
      initialRouteName="TeacherProfile"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#A3BACD',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="TeacherProfile" component={TeacherProfile} />
      <Stack.Screen
        name="TeacherProfileSetting"
        component={TeacherProfileSetting}
      />
      <Stack.Screen
        name="TeacherEditPersonalInfo"
        component={TeacherEditPersonalInfo}
      />
    </Stack.Navigator>
  );
};

export default TeacherProfile;
