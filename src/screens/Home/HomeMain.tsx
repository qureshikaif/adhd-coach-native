import {Text, VStack} from '@gluestack-ui/themed';
import React from 'react';

const HomeMain = () => {
  return (
    <VStack
      alignItems="center"
      justifyContent="center"
      bg="red"
      flex={1}
      height={'100%'}>
      <Text color="white">HomeMain</Text>
    </VStack>
  );
};

export default HomeMain;
