import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  Button,
  HStack,
  Text,
} from '@gluestack-ui/themed';
import {TextInput} from 'react-native';
import Svg, {Rect} from 'react-native-svg';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import StatusBarParent from '../../components/molecules/StatusBarParent';

const BackgroundImage = require('../../assets/images/TeacherProfileSetting.png');

const ChildProgressReport = () => {
  const quizMarks = 75;
  const teacherRemarks = 'Great progress this term! Keep up the good work.';

  const calculateProgress = () => {
    return quizMarks / 100;
  };

  return (
    <View h="$full">
      <ImageBackground source={BackgroundImage} h="$full">
        <StatusBarParent text="Child Progress" />
        <ScrollView paddingHorizontal={'$4'}>
          <Box height={'$5'} />
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
          </Svg>

          <Box height={'$5'} />
          <TextBold text="Quiz Marks" fontSize={'$xl'} />
          <Text style={{fontSize: 20, marginBottom: 10}}>{quizMarks}</Text>
          {/* Static quiz marks */}
          <Box height={'$5'} />
          <TextBold text="Teacher Remarks" fontSize={'$xl'} />
          <TextInput
            style={{
              height: 150,
              backgroundColor: 'grey',
              borderWidth: 5,
              textAlignVertical: 'top',
              color: 'white',
              borderRadius: 20,
              padding: 15,
              marginBottom: 10,
            }}
            placeholder="Enter your Remarks here..."
            placeholderTextColor={'white'}
            multiline
            editable={false} // Make the input read-only
            value={teacherRemarks} // Static teacher remarks
          />
          <Box height={'$5'} />
          <HStack space="xl">
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
              //   onPress={() => navigation.navigate('Signup')}
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
    </View>
  );
};

export default ChildProgressReport;
