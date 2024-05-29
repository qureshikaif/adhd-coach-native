import {config as defaultConfig} from '@gluestack-ui/config';
import {GluestackUIProvider, createConfig} from '@gluestack-ui/themed';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
// import ChatSupport from './src/screens/Admin/ChatSupport';
import MathsCounting from './src/screens/StudentModule/MathsCounting';
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
        <MathsCounting />
        {/* <ChatSupport /> */}
        {/* <StudentActivity /> */}
        {/* <GrandAssessment /> */}
        {/* <AccountManagementDoctor/> */}
        {/* <DoctorMain/> */}
        {/*<PatientProfileHistory/>*/}
        {/*<RootTabs/>*/}
      </GluestackUIProvider>
    </NavigationContainer>
  );
}

export default App;
