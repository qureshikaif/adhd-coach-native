import {config as defaultConfig} from '@gluestack-ui/config';
import {GluestackUIProvider, createConfig} from '@gluestack-ui/themed';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootTabs} from './src/navigation/RootTabs';
import AdminMain from './src/screens/Admin/AdminMain';
import TeacherEditPersonalInfo from './src/screens/Teacher/TeacherEditPersonalInfo';
import TeacherProfile from './src/screens/Teacher/TeacherProfile';
import PersonalProfile from './src/screens/Doctor/PersonalProfile';
import DoctorMain from './src/screens/Doctor/DoctorMain';


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
        {/* <RootTabs />
        */}
        <DoctorMain/>

       {/* <PersonalProfile/> */}

      </GluestackUIProvider>
    </NavigationContainer>
  );
}

export default App;
