import { View, ImageBackground, ScrollView, Box, Image, HStack, VStack } from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../atoms/Text/TextSemibold';
import StatusBarStudent from './StatusBarStudent';
import TextBold from '../atoms/Text/TextBold';

const BackgroundImage = require('../../assets/images/MathsCounting-img.png');
// const MathsImage = require('../../assets/images/couting-maths-img.png');

type CountProps = {
  isSettingsVisible?: boolean;
}


const MathsCount = ({
  isSettingsVisible }: CountProps) => {
  return (
    <View height={'$full'}>
      <VStack>

        <HStack space='xs'>
          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems='center'
            justifyContent='center'>

            <TextSemibold
              text="1     ONE"
              fontSize={'$2xl'}
            />
          </Box>
          <Box height={'$4'} />
          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems='center'
            justifyContent='center'
          >

            <TextSemibold
              text="2     TWO"
              fontSize={'$2xl'}

            />
          </Box>

          <Box height={'$4'} />

          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems='center'
            justifyContent='center'
          >

            <TextSemibold
              text="3     THREE"
              fontSize={'$2xl'}
            />
          </Box>

          <Box height={'$4'} />

          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems='center'
            justifyContent='center'
          >

            <TextSemibold
              text="4     FOUR"
              fontSize={'$2xl'}
            />
          </Box>
        </HStack>
        <Box height={'$4'} />
        <HStack space='xs'>
          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems='center'
            justifyContent='center'
          >

            <TextSemibold
              text="5     FIVE"
              fontSize={'$2xl'}
            />
          </Box>

          <Box height={'$4'} />
          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems='center'
            justifyContent='center'
          >

            <TextSemibold
              text="6     SIX"
              fontSize={'$2xl'}
            />
          </Box>
          <Box height={'$4'} />
          <Center><Image source={count6} alt='count6' h='$24' w = '$24'/></Center>
          <Box height={'$4'} />

          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems='center'
            justifyContent='center'
          >

            <TextSemibold
              text="7     SEVEN"
              fontSize={'$2xl'}
            />
          </Box>
          <Box height={'$4'} />
          <Center><Image source={count7} alt='count7' h='$24' w = '$24'/></Center>
          <Box height={'$4'} />

          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems='center'
            justifyContent='center'
          >

            <TextSemibold
              text="8     EIGHT"
              fontSize={'$2xl'}
            />
          </Box>
        </HStack>
        <Box height={'$4'} />
        <HStack space='xs' justifyContent='center'>
          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems='center'
            justifyContent='center'>

            <TextSemibold
              text="9     NINE"
              fontSize={'$2xl'}
            />
          </Box>
          <Box height={'$4'} />
          <Center><Image source={count9} alt='count9' h='$24' w = '$24'/></Center>
          <Box height={'$4'} />

          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems='center'
            justifyContent='center'>

            <TextSemibold
              text="0     ZERO"
              fontSize={'$2xl'}
            />
          </Box>
        </HStack>

      </VStack>
    </View>
  );
};

export default MathsCount;
