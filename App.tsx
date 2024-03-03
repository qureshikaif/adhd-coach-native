import {config} from '@gluestack-ui/config';
import {GluestackUIProvider, VStack} from '@gluestack-ui/themed';
import React from 'react';
import {SafeAreaView} from 'react-native';
import TextSemibold from './src/components/atoms/TextSemibold';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <GluestackUIProvider config={config}>
        <VStack
          alignItems="center"
          justifyContent="center"
          bgColor="red"
          height={'100%'}>
          <TextSemibold
            text="Hello"
            bgColor="white"
            padding={10}
            color="black"
          />
        </VStack>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

export default App;
