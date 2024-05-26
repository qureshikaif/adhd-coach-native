import React from 'react';
import {Image, View} from '@gluestack-ui/themed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AdminAppAnalytics from './stacks/Admin/AdminAppAnalytics';
import AdminFeedback from './stacks/Admin/AdminFeedback';
import AdminAccountManagement from './stacks/Admin/AdminAccountManagement';
import ParentHome from '../navigation/stacks/Parent/ParentHome';
import DoctorPatientProfile from './stacks/Doctor/DoctorPatientProfile';

const Tab = createBottomTabNavigator();

const icons: {[index: string]: any} = {
  ParentHome: require('../assets/images/navigation/Home.png'),
  DoctorPatientProfile: require('../assets/images/navigation/Courses.png'),
  DoctorPatientPrescription: require('../assets/images/navigation/Analytics.png'),
  DoctorChat: require('../assets/images/navigation/Feedback.png'),
  DoctorProfile: require('../assets/images/navigation/Profile.png'),
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
  {name: 'DoctorPatientProfile', component: DoctorPatientProfile},
  {name: 'DoctorPatientPrescription', component: AdminAppAnalytics},
  {name: 'DoctorChat', component: AdminFeedback},
  {name: 'DoctorProfile', component: AdminAccountManagement},
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
