import {Box, HStack, View, VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../atoms/Text/TextSemibold';
import TextRegular from '../atoms/Text/TextRegular';

export type CourseStatisticsType = {
  id: string;
  title: string;
  student_count: number;
};

type CourseStatisticsProps = {
  courses: CourseStatisticsType[];
};

const CourseStatistics = ({courses}: CourseStatisticsProps) => {
  return (
    <View>
      <TextSemibold text="Course Statistics" fontSize={'$xl'} pb={'$2'} />
      {courses?.map((course, index) => (
        <VStack
          key={index}
          bg="#D7E6ED"
          w="$full"
          h="$40"
          rounded={'$lg'}
          hardShadow="4"
          mb={'$4'}
          p="$4">
          <TextSemibold text={course.title} fontSize={'$xl'} />
          <Box height={'$6'} />
          <HStack justifyContent="space-between" alignItems="center">
            <TextRegular text="Total students enrolled:" fontSize={'$sm'} />
            <HStack
              alignItems="center"
              justifyContent="center"
              w="$8"
              h="$8"
              bg="#A3CCDF"
              rounded={'$full'}>
              <TextSemibold text={course.student_count} fontSize={'$sm'} />
            </HStack>
          </HStack>
          {/* <HStack justifyContent="space-between" alignItems="center" mt={'$4'}>
          <TextRegular text="Course Reviews:" fontSize={'$sm'} />
          <Box p="$2" bg="#A3CCDF" rounded={'$full'}>
            <TextSemibold text="4/5" fontSize={'$sm'} />
          </Box>
        </HStack> */}
        </VStack>
      ))}
    </View>
  );
};

export default CourseStatistics;
