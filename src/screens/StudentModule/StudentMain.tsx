import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  Image,
  Center,
  Pressable,
} from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import TextRegular from '../../components/atoms/Text/TextRegular';
import MoodBoard from '../../components/molecules/MoodBoard';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const TipOfTheDay = require('../../assets/images/tip-home.png');
const BackgroundImage = require('../../assets/images/stud-main-bg.png');

type NavigationType = {
  GrandAssessment: undefined;
};

const StudentMain = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h={'$full'}>
        <StatusBarStudent text="Home" bgColor="#FFA360" textColor="black" />

        <ScrollView paddingHorizontal={'$5'}>
          <Box height={'$16'} />

          <Box
            bgColor="#FFA360"
            padding={'$2.5'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}>
            <TextBold
              text="TIP OF THE DAY"
              fontSize={'$2xl'}
              padding={'$1.5'}
            />
            <TextRegular
              text="Eating Bananas is a natural cure to reduce the effects of stress and anxiety."
              fontSize={'$md'}
              padding={'$1'}
            />
            <Center>
              <Image source={TipOfTheDay} alt="tip of the day" />
            </Center>
          </Box>
          <Box height={'$10'} />
          <MoodBoard />
          <Box height={'$10'} />

          <Pressable
            onPress={() => navigation.navigate('GrandAssessment')}
            bgColor="#D9981A"
            borderWidth={'$2'}
            paddingVertical={'$3'}
            rounded={'$2xl'}
            alignItems="center">
            <TextSemibold text="Grand Assessment" fontSize={'$lg'} />
          </Pressable>
          <Box height={useBottomTabBarHeight()} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default StudentMain;
