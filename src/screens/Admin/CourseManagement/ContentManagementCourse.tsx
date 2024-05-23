import {ImageBackground, ScrollView, Box, VStack} from '@gluestack-ui/themed';
import React from 'react';
import AddNewButton from '../../../components/atoms/Buttons/AddNewButton';
import TextSemibold from '../../../components/atoms/Text/TextSemibold';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import AddCourse from '../../../components/molecules/popup/AddCourse';
import Modify from '../../../components/atoms/Buttons/Modify';

const BackgroundImage = require('../../../assets/images/admin-content-bg.png');

const ContentManagementCourse = () => {
  const height = useBottomTabBarHeight();
  return (
    <ImageBackground source={BackgroundImage} minHeight={'$full'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space="xs">
          <AddNewButton text="Add a new course" ModalComponent={AddCourse} />
          <TextSemibold text="Modify" fontSize={'$xl'} />
          {Array.from({length: 6}).map((_, index) => (
            <Modify key={index} />
          ))}
        </VStack>
        <Box height={height * 2.5} />
      </ScrollView>
    </ImageBackground>
  );
};

export default ContentManagementCourse;
