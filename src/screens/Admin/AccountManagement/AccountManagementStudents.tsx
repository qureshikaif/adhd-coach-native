import {ImageBackground, ScrollView, Box, VStack} from '@gluestack-ui/themed';
import React from 'react';
import ViewOrRemove from '../../../components/atoms/Buttons/ViewOrRemove';
import TextSemibold from '../../../components/atoms/Text/TextSemibold';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../Loading';
import {User} from '../../../types/User';

const BackgroundImage = require('../../../assets/images/admin-bg-main.png');

const AccountManagementStudents = () => {
  const height = useBottomTabBarHeight();
  const {data: students, isLoading} = useQuery({
    queryKey: ['students'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://192.168.27.143:8080/student/get-students',
      );
      return data;
    },
  });

  if (isLoading) {
    return <Loading bgImage={BackgroundImage} />;
  }
  return (
    <ImageBackground source={BackgroundImage} minHeight={'$full'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space="xs">
          <TextSemibold text="View/Remove" fontSize={'$xl'} />
          {students.map((student: User, index: number) => (
            <ViewOrRemove key={index} user={student} />
          ))}
        </VStack>
        <Box height={height * 2.5} />
      </ScrollView>
    </ImageBackground>
  );
};

export default AccountManagementStudents;
