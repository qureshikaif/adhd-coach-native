import {Center, HStack, View, VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../atoms/Text/TextSemibold';
import TextBold from '../atoms/Text/TextBold';

const LastWeekStatistics = () => {
  return (
    <View>
      <TextSemibold text="Last Week Statistics" fontSize={'$xl'} pb={'$2'} />
      <VStack
        bg="#D7E6ED"
        w="$full"
        h="$48"
        alignItems="center"
        justifyContent="center"
        rounded={'$lg'}
        hardShadow="4">
        <HStack justifyContent="space-evenly" w="$full">
          <View>
            <VStack
              borderWidth={10}
              alignItems="center"
              justifyContent="center"
              rounded={'$full'}
              p="$4"
              borderColor="#46A2CD">
              <TextBold
                text="20+"
                color="#46A2CD"
                fontSize={'$4xl'}
                mt={'$1'}
              />
            </VStack>
            <Center>
              <TextSemibold text="Students" />
            </Center>
          </View>
          <View>
            <VStack
              borderWidth={10}
              alignItems="center"
              justifyContent="center"
              rounded={'$full'}
              p="$4"
              borderColor="#46A2CD">
              <TextBold
                text="30+"
                color="#46A2CD"
                fontSize={'$4xl'}
                mt={'$1'}
              />
            </VStack>
            <Center>
              <TextSemibold text="Teachers" />
            </Center>
          </View>
        </HStack>
      </VStack>
    </View>
  );
};

export default LastWeekStatistics;
