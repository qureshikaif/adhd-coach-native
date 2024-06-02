import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChildProgressReport from '../../../screens/Parent/ChildProgressReport';

const Stack = createNativeStackNavigator();

const ParentChildProgress = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChildProgressReport"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#A3BACD',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen
        name="ChildProgressReport"
        component={ChildProgressReport}
      />
    </Stack.Navigator>
  );
};

export default ParentChildProgress;
