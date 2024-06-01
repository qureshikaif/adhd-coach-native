import React from 'react';
import {Box, ImageBackground, Pressable, VStack} from '@gluestack-ui/themed';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import TextSemibold from '../components/atoms/Text/TextSemibold';
import {useStore} from '../store';

const BackgroundImage = require('../assets/images/assessment-bg.png');

type NavigationType = {
  Signup: undefined;
};

const AssessmentCompleted = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const {answers} = useStore();

  console.log(answers);

  return (
    <ImageBackground h="$full" source={BackgroundImage}>
      <VStack h="$full" justifyContent="center" alignItems="center">
        <TextSemibold
          text="According to the test scores. These are the suggested courses:"
          fontSize={'$2xl'}
          textAlign="center"
        />
        <VStack space="sm" marginTop={'$16'}>
          <Pressable
            onPress={() => navigation.navigate('Signup')}
            bgColor="#D9981A"
            w={'$32'}
            borderWidth={0.5}
            paddingVertical={'$2'}
            rounded={'$2xl'}
            alignItems="center">
            <TextSemibold text="English" fontSize={'$lg'} />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Signup')}
            bgColor="#D9981A"
            w={'$32'}
            borderWidth={0.5}
            paddingVertical={'$2'}
            rounded={'$2xl'}
            alignItems="center">
            <TextSemibold text="Maths" fontSize={'$lg'} />
          </Pressable>
        </VStack>
        <Box h={'$20'} />
        <TextSemibold text="Sign up now to access them" fontSize={'$2xl'} />

        <Pressable
          onPress={() => navigation.navigate('Signup')}
          bgColor="#D9981A"
          w={'$32'}
          borderWidth={0.5}
          paddingVertical={'$2'}
          rounded={'$2xl'}
          alignItems="center">
          <TextSemibold text="Signup" fontSize={'$lg'} />
        </Pressable>
      </VStack>
    </ImageBackground>
  );
};

export default AssessmentCompleted;
