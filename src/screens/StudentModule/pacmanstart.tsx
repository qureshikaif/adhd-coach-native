import {
  View,
  ImageBackground,
  Box,
  Image,
  Center,
  // Pressable,
} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import TextBold from '../../components/atoms/Text/TextBold';
//   import TextSemibold from '../../components/atoms/Text/TextSemibold';
//   import {NavigationProp, useNavigation} from '@react-navigation/native';
const BackgroundImage = require('../../assets/images/tictactoe-bg.png');
const pacman = require('../../assets/images/pacman.png');
const RockPaper2 = require('../../assets/images/rps2.png');

//   type NavigationType = {
//     RockPaperScissor: undefined;
//   };

const pacmanstart = () => {
  // const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
        <StatusBarStudent text="Pac Man" bgColor="#FFA169" textColor="black" />
        <Box height={'$10'} />
        <Center>
          <Box
            borderRadius={10}
            borderColor="black"
            borderWidth={5}
            height={240}
            width={200}
            paddingHorizontal={10}
            paddingTop={5}>
            <Image source={pacman} alt="rockpaper" h="$56" w="$40" />
          </Box>

          <Box height={'$6'} />
          {/* <Pressable
              onPress={() => navigation.navigate('RockPaperScissor')}
              bgColor="#DEB5B5"
              paddingHorizontal={'$8'}
              paddingVertical={'$2'}
              rounded={'$2xl'}>
              <TextSemibold text="Go" fontSize={'$lg'} />
            </Pressable> */}
          <Box height={'$6'} />
        </Center>
      </ImageBackground>
    </View>
  );
};
export default pacmanstart;
