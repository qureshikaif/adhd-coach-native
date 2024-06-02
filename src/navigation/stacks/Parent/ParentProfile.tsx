import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ParentProfileSetting from '../../../screens/Parent/ProfileSetting';

const Stack = createNativeStackNavigator();

const ParentProfile = () => {
  return (
    <Stack.Navigator
      initialRouteName="ParentProfileSettings"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#A3BACD',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen
        name="ParentProfileSettings"
        component={ParentProfileSetting}
      />
    </Stack.Navigator>
  );
};

export default ParentProfile;
