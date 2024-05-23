import {Box, HStack, View, VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../atoms/Text/TextSemibold';
import TextRegular from '../atoms/Text/TextRegular';

const CourseStatistics = () => {
  return (
    <View>
      <TextSemibold text="Course Statistics" fontSize={'$xl'} pb={'$2'} />
      <VStack
        bg="#D7E6ED"
        w="$full"
        h="$48"
        rounded={'$lg'}
        hardShadow="4"
        p="$4">
        <TextSemibold text="Voice Recognition" fontSize={'$xl'} />
        <Box height={'$6'} />
        <HStack justifyContent="space-between" alignItems="center">
          <TextRegular text="Total students enrolled:" fontSize={'$sm'} />
          <Box p="$2" bg="#A3CCDF" rounded={'$full'}>
            <TextSemibold text="20+" fontSize={'$sm'} />
          </Box>
        </HStack>
        <HStack justifyContent="space-between" alignItems="center" mt={'$4'}>
          <TextRegular text="Course Reviews:" fontSize={'$sm'} />
          <Box p="$2" bg="#A3CCDF" rounded={'$full'}>
            <TextSemibold text="4/5" fontSize={'$sm'} />
          </Box>
        </HStack>
      </VStack>
    </View>
  );
};

export default CourseStatistics;
