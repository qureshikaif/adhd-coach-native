import {View, ImageBackground, ScrollView, Box} from '@gluestack-ui/themed';
import {TextInput} from 'react-native';
import Svg, {Rect} from 'react-native-svg';
import React from 'react';
import StatusBarParent from '../../components/molecules/StatusBarParent';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import TextRegular from '../../components/atoms/Text/TextRegular';
import {RouteProp} from '@react-navigation/native';

type NavigationType = {
  ChildProgressReport: {content: any};
};

type RouteType = RouteProp<NavigationType, 'ChildProgressReport'>;

const BackgroundImage = require('../../assets/images/TeacherProfileSetting.png');

const ChildProgressReport = ({route}: {route: RouteType}) => {
  const {content: teacher} = route.params;

  const calculateProgress = () => {
    return teacher.score / 100;
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
          <TextSemibold text="Course Name" fontSize={'$xl'} />
          <TextRegular text={teacher.course_name} />
          <Box height={'$5'} />
          <TextSemibold text="Teacher's Name" fontSize={'$xl'} />
          <TextRegular text={teacher.teacher_name} />
          <Box height={'$5'} />
          <TextSemibold text="Date" fontSize={'$xl'} />
          <TextRegular text={teacher.date} />
          <Box height={'$5'} />
          <TextSemibold text="Child's Score" fontSize={'$xl'} />
          <TextRegular text={`${teacher.score}/100`} />
          {/* <Text style={{fontSize: 20, marginBottom: 10}}>{quizMarks}</Text> */}
          {/* Static quiz marks */}
          <Box height={'$5'} />
          <TextSemibold text="Teacher Remarks" fontSize={'$xl'} />
          <TextInput
            style={{
              height: 150,
              backgroundColor: 'grey',
              borderWidth: 1,
              textAlignVertical: 'top',
              color: 'white',
              borderRadius: 10,
              padding: 15,
              marginBottom: 10,
              fontFamily: 'Poppins-Regular',
            }}
            placeholder="Remarks"
            placeholderTextColor={'white'}
            multiline
            editable={false} // Make the input read-only
            value={teacher.remarks} // Static teacher remarks
          />
          <Box height={'$5'} />
          {/* <HStack space="xl">
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
          </HStack> */}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ChildProgressReport;
