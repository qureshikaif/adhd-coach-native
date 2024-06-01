import { View, ImageBackground, ScrollView, Box, Image, HStack, VStack, Center } from '@gluestack-ui/themed';
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
              text="1"
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
              text="2"
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
              text="3"
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
              text="4"
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
              text="5"
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
              text="6 "
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
              text="7"
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
              text="8"
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
              text="9"
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
            justifyContent='center'>

            <TextSemibold
              text="0"
              fontSize={'$2xl'}
            />
          </Box>
        </HStack>

      </VStack>
    </View>
  );
};

export default MathsCount;
