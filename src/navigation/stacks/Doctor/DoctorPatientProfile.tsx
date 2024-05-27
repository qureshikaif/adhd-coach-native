import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PatientProfileHistory from '../../../screens/Doctor/PatientProfileHistory';

const Stack = createNativeStackNavigator();

const DoctorPatientProfile = () => {
  return (
    <Stack.Navigator
      initialRouteName="PatientProfile"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#A3BACD',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="PatientProfile" component={PatientProfileHistory} />
    </Stack.Navigator>
  );
};

export default DoctorPatientProfile;
