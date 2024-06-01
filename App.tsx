import {config as defaultConfig} from '@gluestack-ui/config';
import {GluestackUIProvider, createConfig} from '@gluestack-ui/themed';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import GrandAssessment from './src/screens/GrandAssessment';
import StudentHome from './src/screens/StudentModule/StudentHome';
import StudentActivity from './src/screens/StudentModule/StudentActivity';
import StudentCourses from './src/screens/StudentModule/StudentCourses';
import ChatSupport from './src/screens/Admin/ChatSupport';
import ParentChatbox from './src/screens/Parent/ParentChat';
import ChatBox from './src/screens/Parent/ParentChatOpen';
import DoctorChatbox from './src/screens/Doctor/DoctorChat';
import DoctorChatBoxOpen from './src/screens/Doctor/DoctorChatOpen';
import TeacherChatbox from './src/screens/Teacher/TeacherChat';
import TeacherChatBoxOpen from './src/screens/Teacher/TeacherChatBoxOpen';
import AdminChatbox from './src/screens/Admin/AdminChat';
import { RootTabs } from './src/navigation/RootTabs';
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
    <RootTabs/>
       
      
      </GluestackUIProvider>
    </NavigationContainer>
  );
}

export default App;
