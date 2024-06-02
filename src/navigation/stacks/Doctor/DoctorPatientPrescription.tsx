import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DoctorMain from '../../../screens/Doctor/DoctorMain';

const Stack = createNativeStackNavigator();

const DoctorPatientPrescription = () => {
  return (
    <Stack.Navigator
      initialRouteName="PatientPrescriptionMain"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#DEB5B5',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="PatientPrescriptionMain" component={DoctorMain} />
    </Stack.Navigator>
  );
};

export default DoctorPatientPrescription;
