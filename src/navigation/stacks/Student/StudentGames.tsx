import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentActivity from '../../../screens/StudentModule/StudentActivity';

const Stack = createNativeStackNavigator();

const StudentGames = () => {
  return (
    <Stack.Navigator
      initialRouteName="StudentActivity"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#FFA360',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="StudentActivity" component={StudentActivity} />
    </Stack.Navigator>
  );
};

export default StudentGames;
