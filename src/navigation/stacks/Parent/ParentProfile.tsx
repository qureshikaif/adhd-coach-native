import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ParentProfileSetting from '../../../screens/Parent/ProfileSetting';
import ParentPersonalProfile from '../../../screens/Parent/ParentPersonaProfile';

const Stack = createNativeStackNavigator();

const ParentProfile = () => {
  return (
    <Stack.Navigator
      initialRouteName="ParentPersonalProfile"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#DBC9E1',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen
        name="ParentPersonalProfile"
        component={ParentPersonalProfile}
      />
      <Stack.Screen
        name="ParentProfileSettings"
        component={ParentProfileSetting}
      />
    </Stack.Navigator>
  );
};

export default ParentProfile;
