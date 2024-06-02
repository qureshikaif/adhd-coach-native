import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  Button,
  HStack,
} from '@gluestack-ui/themed';
import {TextInput} from 'react-native';
import Svg, {Rect, Text as SvgText} from 'react-native-svg'; // Import Svg, Rect, and Text from react-native-svg

import TextBold from '../../components/atoms/Text/TextBold';

import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';
import Error from '../../components/molecules/popup/Error';

const BackgroundImage = require('../../assets/images/TeacherProfileSetting.png');

const TeacherRemarks = () => {
  const [quizMarks, setQuizMarks] = useState(0);
  const [showError, setShowError] = useState(false);
  const refError = React.useRef(null);

  const calculateProgress = () => {
    return quizMarks / 100;
  };

  const handleQuizMarksChange = (value: string) => {
    if (value.trim() === '') {
      setQuizMarks(0); // Set quizMarks to 0 if input is empty
      return;
    }

    const marks = parseInt(value, 10);
    if (isNaN(marks) || marks < 0 || marks > 100) {
      setQuizMarks(0);
      return;
    }

    setQuizMarks(marks);
  };

  return (
    <View h="$full">
      <ImageBackground source={BackgroundImage} h="$full">
        <StatusBarTeacher text="Give Remarks" />
        <ScrollView paddingHorizontal={'$4'}>
          <Box height={'$10'} />

          <Svg height="60" width="100%" viewBox="0 0 200 60">
            <Rect
              x="0"
              y="0"
              width="200"
              height="40"
              fill="none"
              stroke="black"
              strokeWidth="2"
              rx="10"
            />

            <Rect
              x="2"
              y="2"
              width={calculateProgress() * 196}
              height="36"
              fill="#4CAF50"
              rx="10"
            />

            <SvgText x="0" y="45" fill="black" fontSize="10">
              0
            </SvgText>
            <SvgText x="40" y="45" fill="black" fontSize="10">
              20
            </SvgText>
            <SvgText x="80" y="45" fill="black" fontSize="10">
              40
            </SvgText>
            <SvgText x="120" y="45" fill="black" fontSize="10">
              60
            </SvgText>
            <SvgText x="160" y="45" fill="black" fontSize="10">
              80
            </SvgText>
            <SvgText x="200" y="45" fill="black" fontSize="10">
              100
            </SvgText>
          </Svg>
          <Box height={'$5'} />

          <TextBold text="Quiz Marks" fontSize={'$xl'} />

          <TextInput
            style={{
              height: 40,
              backgroundColor: 'grey',
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 10,
              padding: 10,
              marginBottom: 10,
            }}
            placeholder="Enter quiz marks (out of 100)"
            keyboardType="numeric"
            onChangeText={handleQuizMarksChange}
            value={quizMarks.toString()}
          />
          <Box height={'$5'} />
          <TextBold text="Teacher Remarks" fontSize={'$xl'} />
          <TextInput
            style={{
              height: 150,
              backgroundColor: 'grey',
              borderWidth: 2,
              textAlignVertical: 'top',
              color: 'white',
              borderRadius: 20,
              padding: 15,
              marginBottom: 10,
            }}
            placeholder="Enter your Remarks here..."
            multiline
          />
          <Box height={'$5'} />
          <HStack space="3xl">
            <Button
              flex={1}
              android_ripple={{color: 'grey'}}
              //   onPress={() => navigation.navigate('ForgotPassword')}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#DBC9E1'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="Cancel" />
            </Button>
            <Button
              flex={1}
              android_ripple={{color: 'grey'}}
              onPress={() => setShowError(true)}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#DBC9E1'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="Save" />
            </Button>
          </HStack>
        </ScrollView>
      </ImageBackground>
      <Error
        bgColor="#DBC9E1"
        setShowModal={setShowError}
        showModal={showError}
        ref={refError}
        text="Remarks can`t be empty"
      />
    </View>
  );
};

export default TeacherRemarks;
