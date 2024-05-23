import { View,ImageBackground,ScrollView,Box, }
 from '@gluestack-ui/themed';
  import React from 'react';
  import Text from '../../components/atoms/Text/TextMedium';
  import TextBold from '../../components/atoms/Text/TextBold';
  import TextSemibold from '../../components/atoms/Text/TextSemibold';
 import TextMedium from '../../components/atoms/Text/TextMedium';


  const BackgroundImage = require('../../assets/images/PatientProfile-bg.png');
  
  const PatientProfileHistory = () => {
    return (
      <View height={'$full'}>
        <ImageBackground source={BackgroundImage} minHeight={'$full'}>
          <Box height={'$10'}/>
          <ScrollView paddingHorizontal={'$12'}>
          <Box height={'$10'}/>
            <TextBold text="Patient Profile" fontSize={'$2xl'} />
            <Box height={'$12'}/>
            <Box height={'$3'}/>
            <TextBold text="Patients" fontSize={'$xl'} />
            {/* <AddNewButton text="Add a new teacher" ModalComponent={AddTeacher} /> */}
          </ScrollView>
        </ImageBackground>
      </View>
    );
  };
  
  export default PatientProfileHistory;
  