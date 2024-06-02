import React from 'react';
import {Image, View} from '@gluestack-ui/themed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ParentHome from '../navigation/stacks/Parent/ParentHome';
import ParentChildProgress from './stacks/Parent/ParentChildProgress';
import ParentArticles from './stacks/Parent/ParentArticles';
import ParentChats from './stacks/Parent/ParentChats';
import ParentProfile from './stacks/Parent/ParentProfile';

const Tab = createBottomTabNavigator();

const icons: {[index: string]: any} = {
  ParentHome: require('../assets/images/navigation/Home.png'),
  ParentChildReport: require('../assets/images/navigation/Courses.png'),
  ParentArticles: require('../assets/images/navigation/Analytics.png'),
  ParentChats: require('../assets/images/navigation/Feedback.png'),
  ParentProfile: require('../assets/images/navigation/Profile.png'),
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
  {name: 'ParentHome', component: ParentHome},
  {name: 'ParentChildReport', component: ParentChildProgress},
  {name: 'ParentArticles', component: ParentArticles},
  {name: 'ParentChats', component: ParentChats},
  {name: 'ParentProfile', component: ParentProfile},
];

export const ParentTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="ParentHome"
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
