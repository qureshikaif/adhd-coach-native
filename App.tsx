import {config} from '@gluestack-ui/config';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeMain from './src/screens/Home/HomeMain';

// const RootStack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <GluestackUIProvider config={config}>
          <HomeMain />
        </GluestackUIProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
