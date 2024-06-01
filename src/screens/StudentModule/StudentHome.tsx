import { View, ImageBackground, ScrollView, Box, Button, Center, HStack, Image, VStack, Pressable } from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import TextMedium from '../../components/atoms/Text/TextMedium';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import TextRegular from '../../components/atoms/Text/TextRegular';
import MoodBoard from '../../components/molecules/MoodBoard';

const TipOfTheDay = require('../../assets/images/totd-kid (1).png')
const BackgroundImage = require('../../assets/images/stud-main-bg.png');

const StudentHome = () => {
  return (
    <View height={'$full'}>
      <ScrollView>
        <ImageBackground source={BackgroundImage} style={{ minHeight: '100%' }}>
          <Box bgColor='#FFA360' height={70} padding={'$3'} alignItems='center'>
            <TextSemibold text="Home" fontSize={'$3xl'} paddingHorizontal={10} />
          </Box>
          <Box height={'$20'} />

          <ScrollView paddingHorizontal={'$10'}>
            <Box bgColor='#FFA360' height={400} padding={'$2.5'} borderRadius={'$3xl'} borderWidth={'$2'}>
              <TextBold text="TIP OF THE DAY" fontSize={'$2xl'} padding={'$1.5'} />
              <TextRegular text="Eating Bananas is a natural cure to reduce the effects of stress and anxiety." fontSize={'$xl'} padding={'$1'} />
              <VStack>
                <Image source={TipOfTheDay} alt='tip of the day' />
                </VStack>
            </Box>
            <Box height={'$10'} />
            <Box height={'$10'} />
            <Box bgColor='#FFA360' height={200} padding={'$3.5'} borderRadius={'$3xl'} borderWidth={'$2'}>
              <TextBold text="HOW ARE YOU TODAY?" fontSize={'$xl'} padding={'$1.5'} />
            
                <MoodBoard/>
                <Box height={20}/>
                <VStack alignItems='center'>
                <Pressable
                bgColor="#D9981A"
                paddingHorizontal={'$5'}
                paddingVertical={'$2'}
                rounded={'$2xl'} 
                width={110} 
                alignItems='center'>
                <TextSemibold text="Submit" fontSize={'$lg'} />
              </Pressable>
              </VStack>
            </Box>
            <Box height={10} />
          </ScrollView>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default StudentHome;
