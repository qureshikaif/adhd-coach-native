import {Box, View, VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../atoms/Text/TextSemibold';
import TextBold from '../atoms/Text/TextBold';

type TotalStudentsEnrolledProps = {
  count: string;
  bgColor?: string;
  borderTextColor?: string;
};

const TotalStudentsEnrolled = ({
  count,
  bgColor,
  borderTextColor,
}: TotalStudentsEnrolledProps) => {
  return (
    <View>
      <TextSemibold text="Total Students Enrolled" fontSize={'$xl'} pb={'$2'} />
      <VStack
        bg={bgColor ? bgColor : '#D7E6ED'}
        w="$full"
        h="$48"
        alignItems="center"
        justifyContent="center"
        rounded={'$lg'}
        hardShadow="4">
        <Box
          borderWidth={10}
          alignItems="center"
          justifyContent="center"
          rounded={'$full'}
          w="$32"
          h="$32"
          borderColor={borderTextColor ? borderTextColor : '#46A2CD'}>
          <TextBold
            text={`${count}+`}
            color={borderTextColor ? borderTextColor : '#46A2CD'}
            fontSize={'$4xl'}
            mt={'$2'}
          />
        </Box>
      </VStack>
    </View>
  );
};

export default TotalStudentsEnrolled;
