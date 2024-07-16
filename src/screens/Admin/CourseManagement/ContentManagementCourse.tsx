import {ImageBackground, ScrollView, Box, VStack} from '@gluestack-ui/themed';
import React from 'react';
import AddNewButton from '../../../components/atoms/Buttons/AddNewButton';
import TextSemibold from '../../../components/atoms/Text/TextSemibold';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import AddCourse from '../../../components/molecules/popup/AddCourse';
import Modify from '../../../components/atoms/Buttons/Modify';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../Loading';
import {Course} from '../../../types/Course';

const BackgroundImage = require('../../../assets/images/admin-content-bg.png');

const ContentManagementCourse = () => {
  const height = useBottomTabBarHeight();

  const {data: courses, isLoading} = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const {data} = await axios.get(
        'https://adhd-coach-backend.vercel.app/admin/get-courses',
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
          <AddNewButton text="Add a new course" ModalComponent={AddCourse} />
          <TextSemibold text="Modify" fontSize={'$xl'} />
          {courses.map((course: Course, index: number) => (
            <Modify key={index} content={course} />
          ))}
        </VStack>
        <Box height={height * 2.5} />
      </ScrollView>
    </ImageBackground>
  );
};

export default ContentManagementCourse;
