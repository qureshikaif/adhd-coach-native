import {View, ImageBackground, ScrollView, Box,Image, HStack} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../atoms/Text/TextSemibold';
import StatusBarStudent from './StatusBarStudent';
import TextBold from '../atoms/Text/TextBold';

const BackgroundImage = require('../../assets/images/MathsCounting-img.png');
// const MathsImage = require('../../assets/images/couting-maths-img.png');

type CountProps = {
    isSettingsVisible?: boolean;}


const MathsCount = ({
    isSettingsVisible}:CountProps) => {
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
              text="1"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$2'}
              paddingTop={'$1'}/>
          </Box>

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
              text="2"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$2'}
              paddingTop={'$1'}/>
          </Box>
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
              text="3"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$2'}
              paddingTop={'$1'}/>
          </Box>
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
              text="4"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$2'}
              paddingTop={'$1'}/>
          </Box>
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
              text="5"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$2'}
              paddingTop={'$1'}/>
          </Box>
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
              text="6"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$2'}
              paddingTop={'$1'}/>
          </Box>
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
              text="7"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$2'}
              paddingTop={'$1'}/>
          </Box>
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
              text="8"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$2'}
              paddingTop={'$1'}/>
          </Box>
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
              text="9"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$2'}
              paddingTop={'$1'}/>
          </Box>
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
              text="10"
              fontSize={'$2xl'}
              marginLeft={'$4'}
              padding-left={'$1'}
              paddingTop={'$1'}/>
          </Box>
          <Box height={'$4'} />


    </View>
  );
};

export default MathsCount;
