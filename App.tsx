import {config as defaultConfig} from '@gluestack-ui/config';
import {GluestackUIProvider, createConfig} from '@gluestack-ui/themed';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootTabs} from './src/navigation/RootTabs';
import AdminMain from './src/screens/Admin/AdminMain';
import TeacherEditPersonalInfo from './src/screens/Teacher/TeacherEditPersonalInfo';
import TeacherProfile from './src/screens/Teacher/TeacherProfile';
import PersonalProfile from './src/screens/Doctor/PersonalProfile';
import TeacherCourse from './src/screens/Teacher/TeacherCourse';
import TeacherProfileSetting from './src/screens/Teacher/TeacherProfileSetting';
import TopTabs from './src/navigation/TopTabs';
import AccountManagementMain from './src/screens/Admin/AccountManagementMain';
import AccountManagementDoctor from './src/screens/Admin/AccountManagementDoctor';

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
        {/* <AccountManagementDoctor /> */}
        <AccountManagementMain />
        {/* <TeacherProfileSetting /> */}
      </GluestackUIProvider>
    </NavigationContainer>
  );
}

export default App;
