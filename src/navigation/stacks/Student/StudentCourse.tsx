import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentCourses from '../../../screens/StudentModule/StudentCourses';
import StudentCoursesLectures from '../../../screens/StudentModule/StudentCoursesLectures';
import StudentAttemptQuiz from '../../../screens/StudentModule/StudentAttemptQuiz';

const Stack = createNativeStackNavigator();

const StudentCourse = () => {
  return (
    <Stack.Navigator
      initialRouteName="StudentCourses"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#FFA360',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="StudentCourses" component={StudentCourses} />
      <Stack.Screen
        name="StudentCoursesLectures"
        component={StudentCoursesLectures}
      />
      <Stack.Screen name="StudentAttemptQuiz" component={StudentAttemptQuiz} />
    </Stack.Navigator>
  );
};

export default StudentCourse;
