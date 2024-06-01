import React from 'react';
import {config as defaultConfig} from '@gluestack-ui/config';
import {GluestackUIProvider, createConfig} from '@gluestack-ui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import MainNavigator from './src/navigation/MainNavigator';
import TicTacToeGame from './src/screens/StudentModule/TicTacToeGame';
import PatientProfileHistory from './src/screens/Doctor/PatientProfileHistory';
import StudentProfileView from './src/screens/Teacher/StudentProfileView';
import ParentArticleView from './src/screens/Parent/PrentArticle';
import TeacherCourse from './src/screens/Teacher/TeacherCourse';
import InputTable from './src/screens/Doctor/PatientPrescription';
import PatientMedicalHistory from './src/screens/Doctor/PatientMedicalHistory';
import AddQuiz from './src/screens/Teacher/AddQuiz';

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
  const queryClient = new QueryClient();
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <GluestackUIProvider config={config}>
          <AddQuiz/>
          {/* <TicTacToeGame /> */}
        </GluestackUIProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
