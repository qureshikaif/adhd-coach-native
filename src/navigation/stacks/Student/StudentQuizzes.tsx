import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentGames from '../../../screens/StudentModule/StudentGames';

const Stack = createNativeStackNavigator();

const StudentQuizzes = () => {
  return (
    <Stack.Navigator
      initialRouteName="StudentGames"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#FFA360',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="StudentGames" component={StudentGames} />
    </Stack.Navigator>
  );
};

export default StudentQuizzes;
