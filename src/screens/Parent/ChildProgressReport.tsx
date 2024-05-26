import {View, ImageBackground, ScrollView, Box} from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import TextMedium from '../../components/atoms/Text/TextMedium';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import Table from '../../components/molecules/DoctorTable';
import ChildReportTable from '../../components/molecules/ChildReportTable';
import { Animated } from 'react-native';

const BackgroundImage = require('../../assets/images/ChildReport-bg.png');

const ChildProgressReport = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} style={{ minHeight: '100%' }}>
        <Box height={'$10'} />
        <Box height={'$10'} />
        <ScrollView paddingHorizontal={'$12'}>
        
            <Box bgColor='pink' height={60} padding={'$3'} > 
            <TextSemibold text="Child Progress Report" fontSize={'$2xl'} marginLeft={'$7'}/>
            </Box>
        
          <Box height={'$12'} />




          <ChildReportTable/>
          
          {/* <AddNewButton text="Add a new teacher" ModalComponent={AddTeacher} /> */}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ChildProgressReport;
