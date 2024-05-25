import React from 'react';
import {Image, View} from '@gluestack-ui/themed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../../src/navigation/stacks/HomeStack';
import CourseStack from './stacks/CourseStack';
import GameStack from './stacks/GameStack';
import ProfileStack from './stacks/ProfileStack';
import SettingStack from './stacks/SettingStack';

const Tab = createBottomTabNavigator();

const icons: {[index: string]: any} = {
  Home: require('../assets/images/navigation/Home.png'),
  Courses: require('../assets/images/navigation/Courses.png'),
  Games: require('../assets/images/navigation/Games.png'),
  Profile: require('../assets/images/navigation/Profile.png'),
  Settings: require('../assets/images/navigation/Settings.png'),
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
  {name: 'Home', component: HomeStack},
  {name: 'Courses', component: CourseStack},
  {name: 'Games', component: GameStack},
  {name: 'Profile', component: ProfileStack},
  {name: 'Settings', component: SettingStack},
];

export const DoctorTabs = () => {
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
