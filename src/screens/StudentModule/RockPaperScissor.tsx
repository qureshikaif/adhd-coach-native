import {
    View,
    ImageBackground,
    Box,
    Image,
    Center,
    Pressable,
} from '@gluestack-ui/themed';
import React, { useState } from 'react';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import TextBold from '../../components/atoms/Text/TextBold';

const BackgroundImage = require('../../assets/images/tictactoe-bg.png');
const Rock = require('../../assets/images/rock.png');
const Paper = require('../../assets/images/paper.png');
const Point = require('../../assets/images/1point.png');

const RockPaperScissor = () => {
    const [showPoint, setShowPoint] = useState(false);
    const [points, setPoints] = useState(0);

    const handlePress = () => {
        setShowPoint(true);
        setPoints(prevPoints => prevPoints + 1);
        setTimeout(() => {
            setShowPoint(false);
        }, 1000); // Adjust the delay as needed (1000 ms = 1 second)
    };

    return (
        <View height={'$full'}>

            <ImageBackground source={BackgroundImage} h="$full">

                <StatusBarStudent
                    text=" Rock Paper Scissor"
                    bgColor='#8D5A39'
                    textColor="black"
                />
                <Box height={'$4'} />
                <Center>
                    <Box borderRadius={10}
                        borderColor='black'
                        borderWidth={5}
                        height={200}
                        width={200}
                        justifyContent='center'
                        alignItems='center'
                        marginLeft={5}>
                        <Image source={Rock} alt='rock' resizeMode='contain' size='lg' h={'$40'} w={'$40'} />
                    </Box>

                    <Box height={'$3'} />
                    <Pressable
                        bgColor='#C36C6C'
                        height={50}
                        padding={'$2'}
                        width={'$full'}
                        justifyContent='center'
                        alignItems='center'
                    >
                        <TextBold
                            text="VS"
                            fontSize={'$md'}
                            padding={'$1.5'}
                            alignContent='center'
                        />
                    </Pressable>
                    <Box height={'$2'} />
                    <Box
                        borderRadius={10}
                        borderColor='black'
                        borderWidth={2}
                        padding={'$2'}
                        alignItems='center'
                        justifyContent='center'
                    >
                        <TextBold
                            text={`Points: ${points}`}
                            fontSize={'$md'}
                        />
                    </Box>
                    <Box height={'$2'} />
                    <Pressable
                        borderRadius={10}
                        borderColor='black'
                        borderWidth={5}
                        height={210}
                        width={200}
                        justifyContent='center'
                        alignItems='center'
                        onPress={handlePress}
                    >
                        <Image source={Paper} alt='paper' resizeMode='contain' size='lg' h={'$40'} w={'$40'} />
                    </Pressable>
                    {showPoint && (
                        <Box w={'$full'}
                            justifyContent='center'
                            alignItems='center'
                        >
                            <Image source={Point} alt='point' resizeMode='contain' size='xs' h={'$32'} w={'$32'} />
                        </Box>
                    )}
                    <Box height={'$4'} />
                </Center>
            </ImageBackground>
        </View>
    );
};

export default RockPaperScissor;
