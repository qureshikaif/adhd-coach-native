import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  Image,
  VStack,
  HStack,
  Pressable,
} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const Counting = require('../../assets/images/counting.png');
const Operations = require('../../assets/images/plus-minus.png');
const BackgroundImage = require('../../assets/images/Stud-course-bg.png');
// const MathsImage = require('../../assets/images/counting-maths-img.png');
// const BasicOpt = require('../../assets/images/Basic-opt.png');

type NavigationType = {
  MathsBasicOperation: undefined;
  MathsCounting: undefined;
};

const MathsCourses = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
        <StatusBarStudent text="Maths" bgColor="#FFA360" textColor="black" />
        <Box height={'$3'} />
        {/* <Image source={MathsImage} alt='MathsImage' h='$25%' w = '$full'/> */}

        <ScrollView
          paddingHorizontal={'$10'}
          marginRight={'$16'}
          marginLeft={'-$16'}>
          <Box height={'$10'} />
          <VStack>
            <Box>
              <HStack
                justifyContent="center"
                alignItems="center"
                paddingHorizontal={'$48'}>
                <Image
                  source={Counting}
                  alt="couting"
                  paddingHorizontal={'$20'}
                />
              </HStack>
            </Box>

            <Box height={'$10'} />
            <Pressable
              onPress={() => navigation.navigate('MathsCounting')}
              bgColor="#FFA360"
              height={70}
              padding={'$1'}
              borderRadius={'$3xl'}
              borderWidth={'$2'}
              marginRight={'$12'}>
              <TextSemibold
                text="Counting"
                fontSize={'$2xl'}
                marginLeft={'$12'}
                padding={'$1.5'}
              />
            </Pressable>
          </VStack>
          <Box height={'$10'} />
          <VStack>
            <Box>
              <HStack
                justifyContent="center"
                alignItems="center"
                paddingHorizontal={'$48'}>
                <Image
                  source={Operations}
                  alt="basic operations"
                  paddingHorizontal={'$20'}
                  h={'$40'}
                />
              </HStack>
            </Box>
            <Box height={'$10'} />
            <Pressable
              onPress={() => navigation.navigate('MathsBasicOperation')}
              bgColor="#FFA360"
              height={70}
              width={'$full'}
              padding={'$1'}
              borderRadius={'$3xl'}
              borderWidth={'$2'}
              marginRight={'$12'}>
              <TextSemibold
                text="Operations"
                fontSize={'$2xl'}
                marginLeft={'$12'}
                padding={'$1.5'}
              />
            </Pressable>
          </VStack>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default MathsCourses;
