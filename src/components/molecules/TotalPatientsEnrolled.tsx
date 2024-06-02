import {Box, View, VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../atoms/Text/TextBold';

type TotalStudentsEnrolledProps = {
  count: string;
};

const TotalPatientsEnrolled = ({count}: TotalStudentsEnrolledProps) => {
  return (
    <View>
      <VStack
        bg="#DEB5B5"
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
          borderColor="#AC7F7F">
          <TextBold
            text={`${count}+`}
            color="#AC7F7F"
            fontSize={'$4xl'}
            mt={'$2'}
          />
        </Box>
      </VStack>
    </View>
  );
};

export default TotalPatientsEnrolled;
