import React from 'react';
import {Image, View} from '@gluestack-ui/themed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DoctorHome from './stacks/Doctor/DoctorHome';
import DoctorPatientProfile from './stacks/Doctor/DoctorPatientProfile';
import DoctorPatientPrescription from './stacks/Doctor/DoctorPatientPrescription';
import DoctorChats from './stacks/Doctor/DoctorChats';
import DoctorProfileManagement from './stacks/Doctor/DoctorProfileManagement';

const Tab = createBottomTabNavigator();

const icons: {[index: string]: any} = {
  DoctorHome: require('../assets/images/navigation/Home.png'),
  DoctorPatientProfile: require('../assets/images/navigation/Patient.png'),
  DoctorPatientPrescription: require('../assets/images/navigation/Prescription.png'),
  DoctorChat: require('../assets/images/navigation/Chat.png'),
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
      <View bg="#DEB5B5" rounded={'$full'} padding={'$2'}>
        <Image source={iconSource} alt="Tab Bar Icons" width={30} height={30} />
      </View>
    );
  }
  return (
    <Image source={iconSource} alt="Tab Bar Icons" width={30} height={30} />
  );
};

const screens = [
  {name: 'DoctorHome', component: DoctorHome},
  {name: 'DoctorPatientProfile', component: DoctorPatientProfile},
  {name: 'DoctorPatientPrescription', component: DoctorPatientPrescription},
  {name: 'DoctorChat', component: DoctorChats},
  {name: 'DoctorProfile', component: DoctorProfileManagement},
];

export const DoctorTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="DoctorHome"
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
