import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import SideButton from '../../components/atoms/Buttons/VORDoctor';
import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';

const BackgroundImage = require('../../assets/images/parent-main-bg.png');

const ParentArticleList = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarTeacher text="Articles" />

        <ScrollView paddingHorizontal={'$5'}>
          <Box height={'$10'} />
          <TextBold text="Articles List" fontSize={'$2xl'} />
          <Box height={'$9'} />
          <Box height={'$3'} />
          <VStack space={'2xl'}>
            <SideButton text="Articles" />
            <SideButton text="Article 2" />
            <SideButton text="Article 3" />
            <SideButton text="Article 4" />
            <SideButton text="Article 5" />
          </VStack>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ParentArticleList;
