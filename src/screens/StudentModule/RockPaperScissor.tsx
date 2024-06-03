import {
  View,
  ImageBackground,
  Box,
  Image,
  Center,
  Pressable,
} from '@gluestack-ui/themed';
import React, {useState, useEffect, useLayoutEffect} from 'react';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import TextBold from '../../components/atoms/Text/TextBold';
import {useNavigation} from '@react-navigation/native';
import {tabBarStyle} from '../../navigation/AdminTabs';

const BackgroundImage = require('../../assets/images/tictactoe-bg.png');
const Rock = require('../../assets/images/rock.png');
const Paper = require('../../assets/images/paper.png');
const Scissors = require('../../assets/images/Scissor.png');
const Point = require('../../assets/images/1point.png');

const options = [
  {choice1: Rock, choice2: Paper, correct: Paper},
  {choice1: Rock, choice2: Scissors, correct: Rock},
  {choice1: Paper, choice2: Scissors, correct: Scissors},
];

const getRandomOption = () => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};
declare function alert(message: string): void;

const RockPaperScissor = () => {
  const [showPoint, setShowPoint] = useState(false);
  const [points, setPoints] = useState(0);
  const [currentOption, setCurrentOption] = useState(getRandomOption());
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () =>
      navigation.getParent()?.setOptions({tabBarStyle, tabBarVisible: true});
  }, [navigation]);

  useEffect(() => {
    setCurrentOption(getRandomOption());
  }, []);

  const handlePress = (choice: any) => {
    if (choice === currentOption.correct) {
      setShowPoint(true);
      setPoints(prevPoints => prevPoints + 1);
      setTimeout(() => {
        setShowPoint(false);
      }, 1000); // Adjust the delay as needed (1000 ms = 1 second)
    } else {
      // Show the notification for wrong pick
      alert('Oops! Wrong pick.');
      // Restart the point counter
      setPoints(0);
    }
    setCurrentOption(getRandomOption());
  };

  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
        <StatusBarStudent
          text=" Rock Paper Scissor"
          bgColor="#FFA360"
          textColor="black"
        />
        <Box height={'$6'} />
        <Center>
          <Pressable onPress={() => handlePress(currentOption.choice1)}>
            <Box
              borderRadius={10}
              borderColor="black"
              borderWidth={5}
              height={200}
              width={200}
              justifyContent="center"
              alignItems="center"
              marginLeft={5}>
              <Image
                source={currentOption.choice1}
                alt="choice1"
                resizeMode="contain"
                size="lg"
                h={'$40'}
                w={'$40'}
              />
            </Box>
          </Pressable>

          <Box height={'$4'} />
          <Pressable
            bgColor="#C36C6C"
            height={50}
            padding={'$2'}
            width={'$full'}
            justifyContent="center"
            alignItems="center">
            <TextBold
              text="VS"
              fontSize={'$md'}
              padding={'$1.5'}
              alignContent="center"
            />
          </Pressable>
          <Box height={'$4'} />
          <Box
            borderRadius={10}
            borderColor="black"
            borderWidth={2}
            padding={'$2'}
            alignItems="center"
            justifyContent="center">
            <TextBold text={`Points: ${points}`} fontSize={'$md'} />
          </Box>

          <Box height={'$4'} />
          <Pressable onPress={() => handlePress(currentOption.choice2)}>
            <Box
              borderRadius={10}
              borderColor="black"
              borderWidth={5}
              height={210}
              width={200}
              justifyContent="center"
              alignItems="center">
              <Image
                source={currentOption.choice2}
                alt="choice2"
                resizeMode="contain"
                size="lg"
                h={'$40'}
                w={'$40'}
              />
            </Box>
          </Pressable>
          <Box height={'$2'} />
          {showPoint && (
            <Box w={'$full'} justifyContent="center" alignItems="center">
              <Image
                source={Point}
                alt="point"
                resizeMode="contain"
                size="xs"
                h={'$32'}
                w={'$32'}
              />
            </Box>
          )}
          <Box height={'$6'} />
        </Center>
      </ImageBackground>
    </View>
  );
};

export default RockPaperScissor;
