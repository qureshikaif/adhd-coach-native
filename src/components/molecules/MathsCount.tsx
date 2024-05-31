import {View, ImageBackground, ScrollView, Box,Image, HStack, VStack, Center} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../atoms/Text/TextSemibold';
import StatusBarStudent from './StatusBarStudent';
import TextBold from '../atoms/Text/TextBold';

const count1 = require('../../assets/images/count-1.png');
const count2 = require('../../assets/images/count-2.png');
const count3 = require('../../assets/images/count-3.png');
const count4 = require('../../assets/images/count-4.png');
const count5 = require('../../assets/images/count-5.png');
const count6 = require('../../assets/images/count-6.png');
const count7 = require('../../assets/images/count-7.png');
const count8 = require('../../assets/images/count-8.png');
const count9 = require('../../assets/images/count-9.png');
const count0 = require('../../assets/images/count-0.png');

const MathsCount = () => {
  return (
    <View height={'$full'}>
        <Box/>
         <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            marginRight={'$48'}
            marginLeft={'$16'}>
             
            <TextSemibold
              text="1     ONE"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$2'}
              paddingTop={'$1'}/>
               
          </Box>
          <Box height={'$4'} />
          <Center><Image source={count1} alt='count1' h='$24' w = '$24'/></Center>
          <Box height={'$4'} />

          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            marginRight={'$48'}
            marginLeft={'$16'}>
            
            <TextSemibold
              text="2     TWO"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$2'}
              paddingTop={'$1'}/>
          </Box>
          <Box height={'$4'} />
          <Center><Image source={count2} alt='count2' h='$24' w = '$24'/></Center>
          <Box height={'$4'} />

          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            marginRight={'$48'}
            marginLeft={'$16'}>
            
            <TextSemibold
              text="3     THREE"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$2'}
              paddingTop={'$1'}/>
              
          </Box>
          <Box height={'$4'} />
          <Center><Image source={count3} alt='count3' h='$24' w = '$24'/></Center>
          <Box height={'$4'} />
        
          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            marginRight={'$48'}
            marginLeft={'$16'}>
            
            <TextSemibold
              text="4     FOUR"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$2'}
              paddingTop={'$1'}/>
          </Box>
          <Box height={'$4'} />
          <Center><Image source={count4} alt='count4' h='$24' w = '$24'/></Center>
          <Box height={'$4'} />
          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            marginRight={'$48'}
            marginLeft={'$16'}>
       
            <TextSemibold
              text="5     FIVE"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$2'}
              paddingTop={'$1'}/>
          </Box>
          <Box height={'$4'} />
          <Center><Image source={count5} alt='count5' h='$24' w = '$24'/></Center>
          <Box height={'$4'} />
        <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            marginRight={'$48'}
            marginLeft={'$16'}>
            
            <TextSemibold
              text="6     SIX"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$2'}
              paddingTop={'$1'}/>
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
            marginRight={'$48'}
            marginLeft={'$16'}>
            
            <TextSemibold
              text="7     SEVEN"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$2'}
              paddingTop={'$1'}/>
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
            marginRight={'$48'}
            marginLeft={'$16'}>
            
            <TextSemibold
              text="8     EIGHT"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$2'}
              paddingTop={'$1'}/>
          </Box>
          <Box height={'$4'} />
          <Center><Image source={count8} alt='count8' h='$24' w = '$24'/></Center>
          <Box height={'$4'} />

          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            marginRight={'$48'}
            marginLeft={'$16'}>
            
            <TextSemibold
              text="9     NINE"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$2'}
              paddingTop={'$1'}/>
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
            marginRight={'$48'}
            marginLeft={'$16'}>
            
            <TextSemibold
              text="0     ZERO"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$1'}
              paddingTop={'$1'}/>
          </Box>
          <Box height={'$4'} />
          <Center><Image source={count0} alt='count0' h='$24' w = '$24'/></Center>
          <Box height={'$4'} />
    </View>
  );
};

export default MathsCount;
