import {View, ImageBackground, ScrollView, Box} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';

const BackgroundImage = require('../../assets/images/stud-activity.png');

/* Change images path */
//const MathsImage = require('../../assets/images/Stud-course-bg.png');
//const EnglishImage = require('../../assets/images/Stud-course-bg.png');

const StudentActivity = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
        <StatusBarStudent
          text="Activities"
          bgColor="#FFA169"
          textColor="black"
        />

        <ScrollView
          paddingHorizontal={'$10'}
          marginRight={'$16'}
          marginLeft={'-$16'}>
          <Box height={'$10'} />
          <Box height={'$10'} />
          {/* Tic Tace Toe */}
          <Box
            bgColor="#FFA169"
            height={60}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            marginRight={'$4'}>
            <TextSemibold
              text="Tic Tac Toe"
              fontSize={'$xl'}
              marginLeft={'$12'}
              padding={'$1.5'}
            />
          </Box>
          <Box height={'$24'} />
          <Box height={'$5'} />
          {/* Make A Face */}
          <Box
            bgColor="#FFA169"
            height={60}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            marginRight={'$4'}>
            <TextSemibold
              text="Make A Face"
              fontSize={'$xl'}
              marginLeft={'$12'}
              padding={'$1.5'}
            />
          </Box>

          <Box height={'$24'} />
          <Box height={'$5'} />
          {/* Rock Paper Scissors */}
          <Box
            bgColor="#FFA169"
            height={60}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            marginRight={'$4'}>
            <TextSemibold
              text="Rock Paper Scissors"
              fontSize={'$xl'}
              marginLeft={'$12'}
              padding={'$1.5'}
            />
          </Box>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default StudentActivity;
