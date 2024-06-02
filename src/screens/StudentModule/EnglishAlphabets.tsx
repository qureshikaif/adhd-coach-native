import {
    View,
    ImageBackground,
    ScrollView,
    Box,
    Image,
    HStack,
} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import TextBold from '../../components/atoms/Text/TextBold';
import MathsCount from '../../components/molecules/MathsCount';
import Letters from '../../components/molecules/Letters';

const Apple = require('../../assets/images/apple.png');
const ball = require('../../assets/images/ball.png');
const cat = require('../../assets/images/cat.png');
const dog = require('../../assets/images/dog.png');
const egg = require('../../assets/images/egg.png');
const fish = require('../../assets/images/fish.png');
const house = require('../../assets/images/house.png');
const girl = require('../../assets/images/girl.png');
const icecream = require('../../assets/images/icecream.png');
const jug = require('../../assets/images/jug.png');
const kite = require('../../assets/images/kite.png');
const lamp = require('../../assets/images/lamp.png');
const mango = require('../../assets/images/mango.png');
const yoyo = require('../../assets/images/yoyo.png');
const xray = require('../../assets/images/xray.png');
const zebra = require('../../assets/images/zebra.png');
const nose = require('../../assets/images/nose.png');
const orange = require('../../assets/images/orange.png');
const plane = require('../../assets/images/plane.png');
const queen = require('../../assets/images/queen.png');
const rabbit = require('../../assets/images/rabbit.png');
const sun = require('../../assets/images/sun.png');
const tree = require('../../assets/images/tree.png');
const umbrell = require('../../assets/images/umbrell.png');
const vase = require('../../assets/images/vase.png');
const whale = require('../../assets/images/whale.png');

const Alphabets = require('../../assets/images/cartoonabc.png');
const BackgroundImage = require('../../assets/images/English-course-bg.png');
// const MathsImage = require('../../assets/images/couting-maths-img.png');

const EnglishAlphabets = () => {
    return (
        <View height={'$full'}>
            <ImageBackground source={BackgroundImage} style={{ flex: 1 }}>
                <ScrollView paddingHorizontal={'$4'}>
                    <Box height={'$8'} />

                    <Box
                        bgColor="#DCA2B0"
                        height={70}
                        width={'$full'}
                        borderRadius={'$2xl'}
                        borderWidth={'$1'}
                        justifyContent="center"
                        alignItems="center">
                        <TextBold text="Alphabets" fontSize={'$2xl'} color={'#FFFFFF'} padding={'$1'} />
                    </Box>

                    <Box height={'$6'} />
                    <HStack justifyContent="center" alignItems="center">
                        <Image
                            source={Alphabets}
                            alt="Alphabets"
                            width={200}
                            height={200}
                            resizeMode="contain"
                        />
                    </HStack>
                    
                    <Box height={'$6'} />

                    {[
                        { letter: 'A', image: Apple },
                        { letter: 'B', image: ball },
                        { letter: 'C', image: cat },
                        { letter: 'D', image: dog },
                        { letter: 'E', image: egg },
                        { letter: 'F', image: fish },
                        { letter: 'G', image: girl },
                        { letter: 'H', image: house },
                        { letter: 'I', image: icecream },
                        { letter: 'J', image: jug },
                        { letter: 'K', image: kite },
                        { letter: 'L', image: lamp },
                        { letter: 'M', image: mango },
                        { letter: 'N', image: nose },
                        { letter: 'O', image: orange },
                        { letter: 'P', image: plane },
                        { letter: 'Q', image: queen },
                        { letter: 'R', image: rabbit },
                        { letter: 'S', image: sun },
                        { letter: 'T', image: tree },
                        { letter: 'U', image: umbrell },
                        { letter: 'V', image: vase },
                        { letter: 'W', image: whale },
                        { letter: 'X', image: xray },
                        { letter: 'Y', image: yoyo },
                        { letter: 'Z', image: zebra }
                    ].map((item, index) => (
                        <React.Fragment key={index}>
                            <Box height={'$6'} />
                            <Box
                                bgColor="#DCA2B0"
                                borderRadius={'$xl'}
                                padding={'$4'}
                                borderWidth={'$1'}
                                borderColor={'#D1D5DB'}
                            >
                                <HStack alignItems='center'>
                                    <TextBold text={`${item.letter} for`} size='2xl' color='#FFFFFF'/>
                                    <Box flex={1} />
                                    <Image
                                        source={item.image}
                                        alt={item.letter.toLowerCase()}
                                        style={{ width: 50, height: 50 }}  // Adjust the size as needed
                                    />
                                </HStack>
                            </Box>
                        </React.Fragment>
                    ))}
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default EnglishAlphabets;
