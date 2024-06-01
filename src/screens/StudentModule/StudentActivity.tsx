import {ImageBackground, ScrollView, Box} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

// const BackgroundImage = require('../../assets/images/stud-activity.png');
const BackgroundImage = require('../../assets/images/Stud-course-bg.png');

/* Change images path */
//const MathsImage = require('../../assets/images/Stud-course-bg.png');
//const EnglishImage = require('../../assets/images/Stud-course-bg.png');

const StudentActivity = () => {
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

        {/* Tic Tace Toe */}
        <Box
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
        </Box>
        <Box height={'$10'} />
        {/* Make A Face */}
        <Box
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
        </Box>

        <Box height={'$12'} />

        <TextSemibold
          text="Games"
          w={'$full'}
          textAlign="center"
          fontSize={'$2xl'}
        />
        <Box height={'$10'} />
        <Box
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
        </Box>
        <Box height={'$10'} />
        {/* Make A Face */}
        <Box
          bgColor="#FFA169"
          height={60}
          w={'$3/4'}
          padding={'$1'}
          borderRadius={'$3xl'}
          borderWidth={'$2'}
          marginLeft={'-$16'}>
          <TextSemibold
            textAlign="center"
            text="Make A Face"
            fontSize={'$xl'}
            marginLeft={'$12'}
            padding={'$1.5'}
          />
        </Box>

        <Box height={'$10'} />
        {/* Rock Paper Scissors */}
        <Box
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
        </Box>
        <Box height={useBottomTabBarHeight()} />
      </ScrollView>
    </ImageBackground>
  );
};

export default StudentActivity;
