import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChildProgressReport from '../../../screens/Parent/ChildProgressReport';
import ChildProgressList from '../../../screens/Parent/ChildProgressList';

const Stack = createNativeStackNavigator();

const ParentChildProgress = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChildProgressList"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#DBC9E1',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="ChildProgressList" component={ChildProgressList} />
      <Stack.Screen
        name="ChildProgressReport"
        component={ChildProgressReport}
      />
    </Stack.Navigator>
  );
};

export default ParentChildProgress;
