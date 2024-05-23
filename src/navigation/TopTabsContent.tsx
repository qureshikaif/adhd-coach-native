import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';

type TopTabsProps = {
  courses: any;
  articles: any;
};

const Tab = createMaterialTopTabNavigator();

const TopTabsContent = ({courses, articles}: TopTabsProps) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'transparent',
          marginVertical: 20,
        },
        tabBarScrollEnabled: true,
        tabBarItemStyle: {
          padding: 0,
          height: 45,
          width: 181,
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
      <Tab.Screen name="Courses" component={courses} />
      <Tab.Screen name="Articles" component={articles} />
    </Tab.Navigator>
  );
};

export default TopTabsContent;
