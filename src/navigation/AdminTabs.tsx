import React from 'react';
import {Image, View} from '@gluestack-ui/themed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AdminContentManagement from './stacks/Admin/AdminContentManagement';
import AdminAppAnalytics from './stacks/Admin/AdminAppAnalytics';
import AdminFeedback from './stacks/Admin/AdminFeedback';
import AdminAccountManagement from './stacks/Admin/AdminAccountManagement';
import AdminMain from '../screens/Admin/AdminMain';

const Tab = createBottomTabNavigator();

const icons: {[index: string]: any} = {
  AdminHome: require('../assets/images/navigation/Home.png'),
  AdminContentManagement: require('../assets/images/navigation/Courses.png'),
  AdminAppAnalytics: require('../assets/images/navigation/Games.png'),
  AdminFeedback: require('../assets/images/navigation/Profile.png'),
  AdminAccountManagement: require('../assets/images/navigation/Settings.png'),
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
  {name: 'AdminHome', component: AdminMain},
  {name: 'AdminContentManagement', component: AdminContentManagement},
  {name: 'AdminAppAnalytics', component: AdminAppAnalytics},
  {name: 'AdminFeedback', component: AdminFeedback},
  {name: 'AdminAccountManagement', component: AdminAccountManagement},
];

export const AdminTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="AdminHome"
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
