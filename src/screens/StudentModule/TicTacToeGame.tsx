import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  Image,
  Center,
} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import TextRegular from '../../components/atoms/Text/TextRegular';
import GameBoard from '../../components/molecules/GameBoard';
const BackgroundImage = require('../../assets/images/tictactoe-bg.png');
const MathsImage = require('../../assets/images/TicTacToe-img.png');

const TicTacToeGame = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
        <Box />
        <StatusBarStudent
          text="TIC TAC TOE"
          bgColor="#FFA360"
          textColor="black"
        />
        <Box height={'$12'} />
        <Center>
          <Image source={MathsImage} alt="MathsImage" h="$32" w="$40" />
        </Center>
        <ScrollView paddingHorizontal={'$10'}>
          <Box height={'$12'} />
          <Box
            bgColor="$amber100"
            height={90}
            padding={'$2'}
            borderRadius={'$xl'}
            borderWidth={'$2'}
            margin-left={'$40'}>
            <TextRegular
              text=" Q. Select the following numbers
              whose sum is 10 to win the game"
              fontSize={'$xl'}
              padding={'$1.5'}
            />
          </Box>
          <Box height={'$4'} />
          <GameBoard />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default TicTacToeGame;
