import {View, ImageBackground, ScrollView, Box} from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import TextMedium from '../../components/atoms/Text/TextMedium';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import Table from '../../components/molecules/DoctorTable';
import ParentMainTable from '../../components/molecules/ParentMainTable';


const BackgroundImage = require('../../assets/images/parent-main-bg.png');
const Motivation = require('../../../assets/images/Motivation-parent.png');

const ParentMain = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} style={{ minHeight: '100%' }}>
        <Box height={'$10'} />
        <Box height={'$10'} />
        <ScrollView paddingHorizontal={'$12'}>
          <TextBold text="Morning" fontSize={'$2xl'} />
          <Box height={'$2'} />
          <TextSemibold text="Mrs Ahmed" fontSize={'$xl'} />
          <Box height={'$12'}  />
          <TextSemibold text="“EDUCATION, LIKE NEUROSIS, BEGINS AT HOME”" fontSize={'$xl'} />
          <Box height={'$12'} />
          <ParentMainTable />
          
          {/* <AddNewButton text="Add a new teacher" ModalComponent={AddTeacher} /> */}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ParentMain;
