import React from 'react';
import {ImageBackground, ScrollView, Box, VStack} from '@gluestack-ui/themed';
import AddNewButton from '../../../components/atoms/Buttons/AddNewButton';
import ViewOrRemove from '../../../components/atoms/Buttons/ViewOrRemove';
import TextSemibold from '../../../components/atoms/Text/TextSemibold';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import AddTeacher from '../../../components/molecules/popup/AddTeacher';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import Loading from '../../Loading';
import {User} from '../../../types/User';

const BackgroundImage = require('../../../assets/images/admin-bg-main.png');

const AccountManagementTeachers = () => {
  const height = useBottomTabBarHeight();

  const {data: teachers, isLoading} = useQuery({
    queryKey: ['teachers'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://10.133.136.53:8080/teacher/get-teachers',
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
          <AddNewButton text="Add a new teacher" ModalComponent={AddTeacher} />
          <TextSemibold text="View/Remove" fontSize={'$xl'} />
          {teachers.map((teacher: User, index: number) => (
            <ViewOrRemove key={index} user={teacher} />
          ))}
        </VStack>
        <Box height={height * 2.5} />
      </ScrollView>
    </ImageBackground>
  );
};

export default AccountManagementTeachers;
