import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';

type TopTabsProps = {
  doctors: any;
  teachers: any;
  students: any;
  parents: any;
};

const Tab = createMaterialTopTabNavigator();

const TopTabs = ({doctors, teachers, students, parents}: TopTabsProps) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'transparent',
        },
        tabBarScrollEnabled: true,
        tabBarItemStyle: {
          padding: 0,
          height: 45,
          width: 120,
        },
        tabBarIndicatorStyle: {
          height: 43,
          backgroundColor: '#41A2CF',
          borderRadius: 10,
        },

        tabBarLabelStyle: {
          fontSize: 15,
          color: 'white',
          fontFamily: 'Poppins-Regular',
        },
      }}>
      <Tab.Screen name="Doctors" component={doctors} />
      <Tab.Screen name="Teachers" component={teachers} />
      <Tab.Screen name="Students" component={students} />
      <Tab.Screen name="Parents" component={parents} />
    </Tab.Navigator>
  );
};

export default TopTabs;
