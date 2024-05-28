import {config as defaultConfig} from '@gluestack-ui/config';
import {GluestackUIProvider, createConfig} from '@gluestack-ui/themed';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import GrandAssessment from './src/screens/GrandAssessment';
import StudentHome from './src/screens/StudentModule/StudentHome';
import MathsCourses from './src/screens/StudentModule/MathsCourses';
import EnglishCourses from './src/screens/StudentModule/EnglishCourses';
// import FeedbackAndSupport from './src/screens/Admin/FeedbackAndSupport';
import ChatSupport from './src/screens/Admin/ChatSupport';
// import StudentCourses from './src/screens/StudentModule/StudentCourses';
// import StudentActivity from './src/screens/StudentModule/StudentActivity';

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
        <EnglishCourses/>
        {/* <ChatSupport/> */}
        <ChatSupport />
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
