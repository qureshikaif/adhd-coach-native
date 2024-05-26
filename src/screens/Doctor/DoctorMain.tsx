import {View, ImageBackground, ScrollView, Box} from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import TextMedium from '../../components/atoms/Text/TextMedium';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import Table from '../../components/molecules/DoctorTable';

const BackgroundImage = require('../../assets/images/DoctorMain.png');

const DoctorMain = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} style={{ minHeight: '100%' }}>
        <Box height={'$10'} />
        <ScrollView paddingHorizontal={'$12'}>
          <TextBold text="Morning" fontSize={'$2xl'} />
          <TextSemibold text="Sana Zehra" fontSize={'$xl'} />
          <Box height={'$12'} />
          <TextBold text="Appointment Schedule" fontSize={'$2xl'} />
          <Box height={'$12'} />
          <Table/>
          {/* <AddNewButton text="Add a new teacher" ModalComponent={AddTeacher} /> */}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default DoctorMain;
