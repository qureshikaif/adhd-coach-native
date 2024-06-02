import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ParentArticleList from '../../../screens/Parent/ParentArticleList';
import ParentArticle from '../../../screens/Parent/ParentArticle';

const Stack = createNativeStackNavigator();

const ParentArticles = () => {
  return (
    <Stack.Navigator
      initialRouteName="ParentArticleList"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#DBC9E1',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="ParentArticleList" component={ParentArticleList} />
      <Stack.Screen name="ParentArticle" component={ParentArticle} />
    </Stack.Navigator>
  );
};

export default ParentArticles;
