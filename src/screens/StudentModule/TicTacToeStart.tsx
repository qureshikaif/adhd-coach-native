import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  Image,
  Center,
} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';

const BackgroundImage = require('../../assets/images/tictactoe-bg.png');
const MathsImage = require('../../assets/images/TicTacToe-img.png');
// const HappyKid = require('../../assets/images/happy-kid.png');

const TicTacToe = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
        <Box />
        <StatusBarStudent text="TIC TAC TOE" bgColor="#FFA360" />
        <Box height={'$12'} />

        <Center>
          <Image source={MathsImage} alt="MathsImage" h="$32" w="$40" />
        </Center>

        <ScrollView paddingHorizontal={'$10'}>
          <Box height={'$8'} />
          <Box height={'$12'} />

          <Center>
            <Box
              bgColor="#FFA360"
              height={50}
              padding={'$1'}
              borderRadius={'$2xl'}
              borderWidth={'$2'}>
              <TextSemibold text="  PLAY  " fontSize={'$xl'} padding={'$1'} />
            </Box>
          </Center>
          <Box height={'$32'} />
        </ScrollView>

        <Box height={'$16'} />
      </ImageBackground>
    </View>
  );
};

export default TicTacToe;
