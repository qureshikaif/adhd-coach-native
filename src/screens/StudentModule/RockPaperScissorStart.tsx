import {
    View,
    ImageBackground,
    ScrollView,
    Box,
    Image,
    Center,
    Pressable,
} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import TextBold from '../../components/atoms/Text/TextBold';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
const BackgroundImage = require('../../assets/images/tictactoe-bg.png');
const RockPaper1 = require('../../assets/images/rps.png');
const RockPaper2 = require('../../assets/images/rps2.png');

const RockPaperScissorStart = () => {
    return (
        <View height={'$full'}>

            <ImageBackground source={BackgroundImage} h="$full">


                <StatusBarStudent
                    text=" Rock Paper Scissor"
                    bgColor='#8D5A39'
                    textColor="black"
                />
                <Box height={'$10'} />
                {/* <ScrollView paddingHorizontal={'$5'}> */}
                    <Center>
                        <Box borderRadius={10}
                            borderColor='black'
                            borderWidth={5}
                            height={240}
                            width={200}
                            paddingHorizontal={10}
                            paddingTop={5}>
                            <Image source={RockPaper1} alt="rockpaper" h="$56" w="$40" />
                        </Box>
                    

                    <Box height={'$4'} />
                    <Box
                       bgColor='#DC9F72'
                        height={50}
                        padding={'$2'}
                        width={'$full'}
                        justifyContent='center'
                        alignItems='center'
                    >
                        <TextBold
                            text="Choose One"
                            fontSize={'$md'}
                            padding={'$1.5'}
                            alignContent='center'
                        />
                    </Box>
                    <Box height={'$4'} />
                    
                    <Box
                    width={'$full'}
                    alignItems='center'
                    paddingHorizontal={20}>
                        <Image source={RockPaper2} alt='rock paper 2' w={'$full'} h={'$40'} borderRadius={10} size='lg' resizeMode='contain'/>
                    </Box>
                    <Box height={'$6'} />
                    <Pressable
                bgColor="#DEB5B5"
                paddingHorizontal={'$8'}
                paddingVertical={'$2'}
                rounded={'$2xl'}>
                <TextSemibold text="Go" fontSize={'$lg'} />
              </Pressable>
              <Box height={'$6'} />
                    </Center>
                {/* </ScrollView> */}
            </ImageBackground>
        </View>
    );
};
export default RockPaperScissorStart;
