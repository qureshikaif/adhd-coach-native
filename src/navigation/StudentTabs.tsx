import React from 'react';
import {Image, View} from '@gluestack-ui/themed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StudentHome from './stacks/Student/StudentHome';
import StudentCourse from './stacks/Student/StudentCourse';
import StudentGames from './stacks/Student/StudentGames';
import StudentQuiz from './stacks/Student/StudentQuiz';
import StudentHealth from './stacks/Student/StudentHealth';

const Tab = createBottomTabNavigator();

const icons: {[index: string]: any} = {
  Home: require('../assets/images/navigation/Home.png'),
  Courses: require('../assets/images/navigation/Courses.png'),
  Games: require('../assets/images/navigation/Games.png'),
  Quizzes: require('../assets/images/navigation/Profile.png'),
  Health: require('../assets/images/navigation/Settings.png'),
};

export const tabBarStyle = {
  borderTopWidth: 0,
  backgroundColor: '#1A1616',
  paddingBottom: 10,
  height: 70,
  paddingHorizontal: 10,
};

const TabBarIcon = (focused: boolean, routeName: string) => {
  const iconSource = icons[routeName];
  if (focused) {
    return (
      <View bg="#8D5A39" rounded={'$full'} padding={'$2'}>
        <Image source={iconSource} alt="Tab Bar Icons" width={30} height={30} />
      </View>
    );
  }
  return (
    <Image source={iconSource} alt="Tab Bar Icons" width={30} height={30} />
  );
};

const screens = [
  {name: 'Home', component: StudentHome},
  {name: 'Courses', component: StudentCourse},
  {name: 'Games', component: StudentGames},
  {name: 'Quizzes', component: StudentQuiz},
  {name: 'Health', component: StudentHealth},
];

export const StudentTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle,
        lazy: true,
        tabBarHideOnKeyboard: true,
      })}>
      {screens.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Tab.Navigator>
  );
};
