import {config as defaultConfig} from '@gluestack-ui/config';
import {GluestackUIProvider, createConfig} from '@gluestack-ui/themed';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootTabs} from './src/navigation/RootTabs';
import AdminProfile from './src/screens/Admin/AdminProfile';
import DoctorMain from './src/screens/Doctor/DoctorMain';
import PatientProfileHistory from './src/screens/Doctor/PatientHistoryProfile';
import PersonalProfile from './src/screens/Doctor/PersonalProfile';
import MainNavigator from './src/navigation/MainNavigator';

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
        {/* <PatientProfileHistory /> */}
        <MainNavigator />

        {/*<RootTabs />*/}
        {/* <AdminProfile /> */}
        {/* <AccountManagementDoctor /> */}
        {/* <AccountManagementMain /> */}
        {/* <TeacherProfileSetting /> */}
      </GluestackUIProvider>
    </NavigationContainer>
  );
}

export default App;
