import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PatientPrescription from '../../../screens/Doctor/PatientPrescription';

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
      <Stack.Screen
        name="PatientPrescriptionMain"
        component={PatientPrescription}
      />
    </Stack.Navigator>
  );
};

export default DoctorPatientPrescription;
