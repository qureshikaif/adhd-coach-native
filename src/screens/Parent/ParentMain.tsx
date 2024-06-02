import {View, ImageBackground, ScrollView, Box} from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import ParentMainTable from '../../components/molecules/ParentMainTable';
import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';
import StatusBarParent from '../../components/molecules/StatusBarParent';

const BackgroundImage = require('../../assets/images/parent-main-bg.png');

const ParentMain = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
        <StatusBarParent text="Home" />
        <ScrollView paddingHorizontal={'$5'}>
          <Box height={'$10'} />
          <TextBold text="Morning" fontSize={'$2xl'} />
          <Box height={'$2'} />
          <TextSemibold text="Mrs Ahmed" fontSize={'$xl'} />
          <Box height={'$6'} />
          <TextSemibold
            text="“EDUCATION, LIKE NEUROSIS, BEGINS AT HOME”"
            fontSize={'$xl'}
          />
          <Box height={'$12'} />
          <ParentMainTable />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ParentMain;
