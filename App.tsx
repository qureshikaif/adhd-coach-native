import {config as defaultConfig} from '@gluestack-ui/config';
import {GluestackUIProvider, createConfig} from '@gluestack-ui/themed';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootTabs} from './src/navigation/RootTabs';
import FeedbackAndSupport from './src/screens/Admin/FeedbackAndSupport';
// import AccountManagementDoctor from './src/screens/Admin/AccountManagementDoctor';
import DoctorMain from './src/screens/Doctor/DoctorMain';
import MainNavigator from './src/navigation/MainNavigator';
import ParentMain from './src/screens/ParentModule/ParentMain';
import ChildProgressReport from './src/screens/ParentModule/ChildProgressReport';

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

{/* <AccountManagementDoctor/> */}
        < ChildProgressReport/>
        {/* <DoctorMain/> */}
      {/*<PatientProfileHistory/>*/}
        {/*<RootTabs/>*/}
      </GluestackUIProvider>
    </NavigationContainer>
  );
}

export default App;
