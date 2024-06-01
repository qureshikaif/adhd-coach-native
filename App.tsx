import {config as defaultConfig} from '@gluestack-ui/config';
import {GluestackUIProvider, createConfig} from '@gluestack-ui/themed';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MathsCounting from './src/screens/StudentModule/MathsCounting';
import MathsCourses from './src/screens/StudentModule/MathsCourses';
// import MainNavigator from './src/navigation/MainNavigator';
// import ChatSupport from './src/screens/Admin/ChatSupport';
// import MathsCounting from './src/screens/StudentModule/MathsCounting';
// import MainNavigator from './src/navigation/MainNavigator';
import ChatSupport from './src/screens/Admin/ChatSupport';
import MainNavigator from './src/navigation/MainNavigator';
import EnglishCourses from './src/screens/StudentModule/EnglishCourses';
import ShapesEnglish from './src/screens/StudentModule/ShapesEnglish';
import ShapesStart from './src/screens/StudentModule/ShapesStart';
// import MathsCourses from './src/screens/StudentModule/MathsCourses';
import MathsCount from './src/components/molecules/MathsCount';
// import MathsCounting from './src/screens/StudentModule/MathsCounting';
import StudentActivity from './src/screens/StudentModule/StudentActivity';
import StudentHome from './src/screens/StudentModule/StudentHome';
// import ChatSupport from './src/screens/Admin/ChatSupport';
// import ChatSupport from './src/screens/Admin/ChatSupport';

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
        {/* <MathsCourses/> */}
        {/* <MathsCounting /> */}
        {/* <MainNavigator /> */}
        {/* <ChatSupport /> */}
        {/* <EnglishCourses/> */}
        <StudentHome/>
        {/* <ShapesStart/> */}
        {/* <MainNavigator /> */}
        {/* <ChatSupport /> */}
        {/* <MainNavigator /> */}
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
