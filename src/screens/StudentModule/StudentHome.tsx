import {View, ImageBackground, ScrollView, Box, Button, Center} from '@gluestack-ui/themed';
import React from 'react';
import { Image } from 'react-native-svg';
import TextBold from '../../components/atoms/Text/TextBold';
import TextMedium from '../../components/atoms/Text/TextMedium';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import TextRegular from '../../components/atoms/Text/TextRegular';

const BackgroundImage = require('../../assets/images/stud-main-bg.png');

const StudentHome = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} style={{ minHeight: '100%' }}>
      <Box bgColor='#FFA360' height={70} padding={'$3'}> 
          <TextSemibold text="Home" fontSize={'$3xl'} marginLeft={"$40"}  /> 
            </Box>
        <Box height={'$10'} />
        <Box height={'$10'} />
        <ScrollView paddingHorizontal={'$10'}>
        <Box bgColor='#FFA360' height={200} padding={'$3.5'} borderRadius={'$3xl'} borderWidth={'$2'}>  
        <TextSemibold text="TIP OF THE DAY" fontSize={'$2xl'} marginLeft={"$16"} padding={'$1.5'}/>
        <TextRegular text="Eating Bananas is a natural cure to reduce the effects of stress and anxiety." fontSize={'$xl'} padding={'$1'}/> 
        </Box>
        <Box height={'$10'} />
        <Box height={'$10'} />
        <Box bgColor='#FFA360' height={200} padding={'$3.5'} borderRadius={'$3xl'} borderWidth={'$2'}>  
        <TextSemibold text="HOW ARE YOU TODAY?" fontSize={'$xl'} marginLeft={"$12"} padding={'$1.5'}/>
        </Box>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default StudentHome;
