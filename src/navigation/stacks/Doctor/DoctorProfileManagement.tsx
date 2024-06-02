import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PersonalInfo from '../../../screens/Doctor/PersonalInfo.';
import ProfileSetting from '../../../screens/Doctor/ProfileSetting';
import PersonalProfile from '../../../screens/Doctor/PersonalProfile';

const Stack = createNativeStackNavigator();

const DoctorProfileManagement = () => {
  return (
    <Stack.Navigator
      initialRouteName="DoctorProfileMain"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#DEB5B5',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="DoctorProfileMain" component={PersonalProfile} />
      <Stack.Screen name="DoctorPersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="DoctorProfileSettings" component={ProfileSetting} />
    </Stack.Navigator>
  );
};

export default DoctorProfileManagement;
