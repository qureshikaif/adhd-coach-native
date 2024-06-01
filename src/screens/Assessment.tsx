import React from 'react';
import {
  Box,
  Button,
  Image,
  ImageBackground,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  VStack,
} from '@gluestack-ui/themed';
import TextBold from '../components/atoms/Text/TextBold';
import TextSemibold from '../components/atoms/Text/TextSemibold';
import TextRegular from '../components/atoms/Text/TextRegular';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import assessmentMain from '../utils/assessmentMain';
import {Circle} from 'lucide-react-native';

const BackgroundImage = require('../assets/images/assessment-bg.png');

type NavigationType = {
  Signin: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  Assessment: {questionIndex: number};
};

type AssessmentProps = {
  route: RouteProp<NavigationType, 'Assessment'>;
};

const Assessment = ({route}: AssessmentProps) => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const {questionIndex} = route.params;
  const question = assessmentMain[questionIndex];
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleNext = () => {
    if (questionIndex < assessmentMain.length - 1) {
      navigation.navigate('Assessment', {questionIndex: questionIndex + 1});
    } else {
      console.log('Assessment completed');
    }
  };
  console.log(selectedValue);

  return (
    <ImageBackground h="$full" source={BackgroundImage}>
      <Image
        source={
          question.image
            ? question.image
            : require('../assets/images/assessment/question-1.png')
        }
        h={'$1/3'}
        w={'$full'}
        alt="Question Image"
      />
      <VStack
        paddingHorizontal={'$4'}
        flex={1}
        justifyContent="space-between"
        paddingTop={'$4'}
        paddingBottom={'$10'}>
        <VStack>
          <TextBold
            text={`Question ${questionIndex + 1}:`}
            fontSize="$xl"
            color="#AB4519"
          />
          <TextRegular text={question.question} />
          <Box height={'$10'} />
          <RadioGroup
            gap={'$3'}
            value={selectedValue}
            onChange={setSelectedValue}>
            {question.options.map((option: any, index: any) => (
              <Radio key={index} value={option} size="sm">
                <RadioIndicator mr={'$2'} borderColor="black" p={'$2'}>
                  <RadioIcon as={Circle} bgColor="black" />
                </RadioIndicator>
                <RadioLabel fontFamily="Poppins-Regular" color="black">
                  {option}
                </RadioLabel>
              </Radio>
            ))}
          </RadioGroup>
        </VStack>
        <Button
          size="xl"
          borderColor="black"
          bg="#F9DEDE"
          borderWidth={0.5}
          borderRadius="$lg"
          paddingHorizontal={12}
          onPress={handleNext}>
          <TextSemibold text="Next" color="#E07234" />
        </Button>
      </VStack>
    </ImageBackground>
  );
};

export default Assessment;
