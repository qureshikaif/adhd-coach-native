import {config as defaultConfig} from '@gluestack-ui/config';
import {GluestackUIProvider, createConfig} from '@gluestack-ui/themed';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import { RootTabs } from './src/navigation/RootTabs';
import DoctorMain from './src/screens/Doctor/DoctorMain';
import TeacherCourse from './src/screens/Teacher/TeacherCourse';
import FeedbackAndSupport from './src/screens/Admin/FeedbackAndSupport';
import AppAnalytics from './src/screens/Admin/AppAnalytics';
import AdminAppAnalytics from './src/navigation/stacks/Admin/AdminAppAnalytics';

const config = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    fonts: [
      'Poppins-Regular',
      'Poppins-Bold',
      'Poppins-SemiBold',
      'Poppins-Light',
      'Poppins-Medium',
      'Poppins-ExtraBold',
      'Poppins-Black',
    ],
  },
});

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        {/* <RootTabs /> */}
      <AdminAppAnalytics/>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}

export default App;
