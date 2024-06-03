import {
  ImageBackground,
  ScrollView,
  Box,
  Pressable,
} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const BackgroundImage = require('../../assets/images/Stud-course-bg.png');

type NavigationType = {
  TicTacToe: undefined;
  EnglishCourses: undefined;
  MathsCourses: undefined;
  RockPaperScissorStart: undefined;
};

const StudentActivity = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <ImageBackground source={BackgroundImage} h="$full" w={'$full'}>
      <StatusBarStudent text="Activities" bgColor="#FFA169" textColor="black" />
      <ScrollView>
        <Box height={'$10'} />
        <TextSemibold
          text="Practice Exercises"
          w={'$full'}
          textAlign="center"
          fontSize={'$2xl'}
        />
        <Box height={'$10'} />

        <Pressable
          onPress={() => navigation.navigate('EnglishCourses')}
          bgColor="#FFA169"
          height={60}
          w={'$3/4'}
          padding={'$1'}
          borderRadius={'$3xl'}
          borderWidth={'$2'}
          marginLeft={'-$16'}>
          <TextSemibold
            textAlign="center"
            text="English"
            fontSize={'$xl'}
            marginLeft={'$12'}
            padding={'$1.5'}
          />
        </Pressable>
        <Box height={'$10'} />
        <Pressable
          onPress={() => navigation.navigate('MathsCourses')}
          bgColor="#FFA169"
          height={60}
          w={'$3/4'}
          padding={'$1'}
          borderRadius={'$3xl'}
          borderWidth={'$2'}
          marginLeft={'-$16'}>
          <TextSemibold
            textAlign="center"
            text="Maths"
            fontSize={'$xl'}
            marginLeft={'$12'}
            padding={'$1.5'}
          />
        </Pressable>

        <Box height={'$12'} />

        <TextSemibold
          text="Games"
          w={'$full'}
          textAlign="center"
          fontSize={'$2xl'}
        />
        <Box height={'$10'} />
        <Pressable
          onPress={() => navigation.navigate('TicTacToe')}
          bgColor="#FFA169"
          height={60}
          w={'$3/4'}
          padding={'$1'}
          borderRadius={'$3xl'}
          borderWidth={'$2'}
          marginLeft={'-$16'}>
          <TextSemibold
            textAlign="center"
            text="Tic Tac Toe"
            fontSize={'$xl'}
            marginLeft={'$12'}
            padding={'$1.5'}
          />
        </Pressable>
        {/* Make A Face */}

        <Box height={'$10'} />
        {/* Rock Paper Scissors */}
        <Pressable
          onPress={() => navigation.navigate('RockPaperScissorStart')}
          bgColor="#FFA169"
          height={60}
          w={'93%'}
          padding={'$1'}
          borderRadius={'$3xl'}
          borderWidth={'$2'}
          marginLeft={'-$16'}>
          <TextSemibold
            textAlign="center"
            text="Rock Paper Scissors"
            fontSize={'$xl'}
            marginLeft={'$12'}
            padding={'$1.5'}
          />
        </Pressable>
        <Box height={useBottomTabBarHeight()} />
      </ScrollView>
    </ImageBackground>
  );
};

export default StudentActivity;
