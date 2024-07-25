import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  Image,
  Center,
} from '@gluestack-ui/themed';
import React, { useState, useEffect } from 'react';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import TextRegular from '../../components/atoms/Text/TextRegular';
import GameBoard from '../../components/molecules/GameBoard';

const BackgroundImage = require('../../assets/images/tictactoe-bg.png');
const MathsImage = require('../../assets/images/TicTacToe-img.png');

const questions = [
  {
    text: 'Select the cells whose sum is 7 to win the game',
    winSum: 7,
  },
  {
    text: 'Select the cells whose sum is 10 to win the game',
    winSum: 10,
  },
  {
    text: 'Select the cells whose sum is 15 to win the game',
    winSum: 15,
  },
  {
    text: 'Select the cells whose sum is 20 to win the game',
    winSum: 20,
  },
  {
    text: 'Select the cells whose sum is 25 to win the game',
    winSum: 25,
  },
];

const TicTacToeGame = () => {
  const [question, setQuestion] = useState(questions[0]);

  useEffect(() => {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    setQuestion(randomQuestion);
  }, []);

  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} style={{ height: '100%' }}>
        <Box />
        <StatusBarStudent
          text="TIC TAC TOE"
          bgColor="#FFA360"
          textColor="black"
        />
        <Box height={'$12'} />
        <Center>
          <Image source={MathsImage} alt="MathsImage" style={{ height: 128, width: 160 }} />
        </Center>
        <ScrollView paddingHorizontal={'$10'}>
          <Box height={'$12'} />
          <Box
            bgColor="$amber100"
            height={90}
            padding={'$2'}
            borderRadius={'$xl'}
            borderWidth={'$2'}
            style={{ marginLeft: '10%' }}>
            <TextRegular
              text={`Q. ${question.text}`}
              fontSize={'$md'}
              padding={'$1.5'}
            />
          </Box>
          <Box height={'$4'} />
          <GameBoard winSum={question.winSum} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default TicTacToeGame;
