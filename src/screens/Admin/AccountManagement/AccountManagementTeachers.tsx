import React from 'react';
import {ImageBackground, ScrollView, Box, VStack} from '@gluestack-ui/themed';
import AddNewButton from '../../../components/atoms/Buttons/AddNewButton';
import ViewOrRemove from '../../../components/atoms/Buttons/ViewOrRemove';
import TextSemibold from '../../../components/atoms/Text/TextSemibold';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import AddTeacher from '../../../components/molecules/popup/AddTeacher';

const BackgroundImage = require('../../../assets/images/admin-bg-main.png');

const AccountManagementTeachers = () => {
  const height = useBottomTabBarHeight();
  return (
    <ImageBackground source={BackgroundImage} minHeight={'$full'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space="xs">
          <AddNewButton text="Add a new teacher" ModalComponent={AddTeacher} />
          <TextSemibold text="View/Remove" fontSize={'$xl'} />
          {Array.from({length: 10}).map((_, index) => (
            <ViewOrRemove key={index} />
          ))}
        </VStack>
        <Box height={height * 2.5} />
      </ScrollView>
    </ImageBackground>
  );
};

export default AccountManagementTeachers;
