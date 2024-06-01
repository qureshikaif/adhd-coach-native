import {Center, HStack, View, VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../atoms/Text/TextSemibold';
import TextBold from '../atoms/Text/TextBold';

type LastWeekStatisticsProps = {
  studentCount: string;
  teacherCount: string;
};

const LastWeekStatistics = ({
  studentCount,
  teacherCount,
}: LastWeekStatisticsProps) => {
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
              w={'$32'}
              h={'$32'}
              borderColor="#46A2CD">
              <TextBold
                text={`${studentCount}+`}
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
              w={'$32'}
              h={'$32'}
              borderColor="#46A2CD">
              <TextBold
                text={`${teacherCount}+`}
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
