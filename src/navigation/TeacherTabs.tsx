import React from 'react';
import {Image, View} from '@gluestack-ui/themed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TeacherHome from '../navigation/stacks/Teacher/TeacherHome';
import TeacherCourses from './stacks/Teacher/TeacherCourses';
import TeacherProgressReport from './stacks/Teacher/TeacherProgressReport';
import TeacherChats from './stacks/Teacher/TeacherChats';
import TeacherProfileManagement from './stacks/Teacher/TeacherProfileManagement';

const Tab = createBottomTabNavigator();

const icons: {[index: string]: any} = {
  TeacherHome: require('../assets/images/navigation/Home.png'),
  TeacherCourses: require('../assets/images/navigation/Courses.png'),
  TeacherProgressReport: require('../assets/images/navigation/Analytics.png'),
  TeacherChats: require('../assets/images/navigation/Feedback.png'),
  TeacherProfileManagement: require('../assets/images/navigation/Profile.png'),
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
      <View bg="#A3BACD" rounded={'$full'} padding={'$2'}>
        <Image source={iconSource} alt="Tab Bar Icons" width={30} height={30} />
      </View>
    );
  }
  return (
    <Image source={iconSource} alt="Tab Bar Icons" width={30} height={30} />
  );
};

const screens = [
  {name: 'TeacherHome', component: TeacherHome},
  {name: 'TeacherCourses', component: TeacherCourses},
  {name: 'TeacherProgressReport', component: TeacherProgressReport},
  {name: 'TeacherChats', component: TeacherChats},
  {name: 'TeacherProfileManagement', component: TeacherProfileManagement},
];

export const TeacherTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="TeacherHome"
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
