import {config as defaultConfig} from '@gluestack-ui/config';
import {GluestackUIProvider, createConfig} from '@gluestack-ui/themed';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootTabs} from './src/navigation/RootTabs';
import AdminMain from './src/screens/Admin/AdminMain';
import TeacherEditPersonalInfo from './src/screens/Teacher/TeacherEditPersonalInfo';
import TeacherProfile from './src/screens/Teacher/TeacherProfile';
import PersonalProfile from './src/screens/Doctor/PersonalProfile';
import PersonalInfo from './src/screens/Doctor/PersonalInfo.';
import ParentProfileSetting from './src/screens/ParentModule/ProfileSetting';
import DoctorProfile from './src/screens/Doctor/ProfileSetting';
import ParentPersonalInfo from './src/screens/ParentModule/ParentPersonalInfo';
import ChildInfo from './src/screens/ParentModule/ChildInfo';
import ParentPersonalProfile from './src/screens/ParentModule/ParentPersonaProfile';


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
       
        {/* <ParentPersonalInfo/> */}
<DoctorProfile/>
     

      </GluestackUIProvider>
    </NavigationContainer>
  );
}

export default App;
