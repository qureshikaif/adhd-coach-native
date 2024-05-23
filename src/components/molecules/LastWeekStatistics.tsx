import {View, VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../atoms/Text/TextSemibold';
import TextBold from '../atoms/Text/TextBold';

const LastWeekStatistics = () => {
  return (
    <View>
      <TextSemibold text="Total Students Enrolled" fontSize={'$xl'} pb={'$2'} />
      <VStack
        bg="#D7E6ED"
        w="$full"
        h="$48"
        alignItems="center"
        justifyContent="center"
        rounded={'$lg'}
        hardShadow="4">
        <VStack
          borderWidth={10}
          alignItems="center"
          justifyContent="center"
          rounded={'$full'}
          p="$4"
          borderColor="#46A2CD">
          <TextBold text="20+" color="#46A2CD" fontSize={'$4xl'} mt={'$2'} />
        </VStack>
      </VStack>
    </View>
  );
};

export default LastWeekStatistics;
