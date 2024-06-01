import {View, Box, HStack, VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../atoms/Text/TextSemibold';

const MathsCount = () => {
  return (
    <View height={'$full'}>
      <VStack space="lg">
        <HStack justifyContent="space-between">
          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center">
            <TextSemibold text="1" fontSize={'$2xl'} />
          </Box>
          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center">
            <TextSemibold text="2" fontSize={'$2xl'} />
          </Box>

          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center">
            <TextSemibold text="3" fontSize={'$2xl'} />
          </Box>

          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center">
            <TextSemibold text="4" fontSize={'$2xl'} />
          </Box>
        </HStack>
        <HStack justifyContent="space-between">
          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center">
            <TextSemibold text="5" fontSize={'$2xl'} />
          </Box>

          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center">
            <TextSemibold text="6 " fontSize={'$2xl'} />
          </Box>

          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center">
            <TextSemibold text="7" fontSize={'$2xl'} />
          </Box>

          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center">
            <TextSemibold text="8" fontSize={'$2xl'} />
          </Box>
        </HStack>

        <HStack space="3xl" justifyContent="center">
          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center">
            <TextSemibold text="9" fontSize={'$2xl'} />
          </Box>

          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center">
            <TextSemibold text="0" fontSize={'$2xl'} />
          </Box>
        </HStack>
      </VStack>
    </View>
  );
};

export default MathsCount;
