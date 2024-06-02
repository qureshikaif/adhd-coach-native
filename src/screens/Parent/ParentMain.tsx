import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  VStack,
  Button,
  Text,
} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {TextInput} from 'react-native';
import StatusBarParent from '../../components/molecules/StatusBarParent';
import TextRegular from '../../components/atoms/Text/TextRegular';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useQuery} from '@tanstack/react-query';
import Loading from '../Loading';
import axios from 'axios';
import {Course} from '../../types/Course';

const BackgroundImage = require('../../assets/images/parent-main-bg.png');

const ParentMain = () => {
  const enrolledStudents = [1, 2];
  const [feedbackRating, setFeedbackRating] = useState<string>('');
  const height = useBottomTabBarHeight();

  const {data: courses, isLoading} = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://192.168.0.107:8080/admin/get-courses',
      );
      return data;
    },
  });

  if (isLoading) {
    return <Loading bgImage={BackgroundImage} />;
  }

  const handleFeedbackChange = (text: string) => {
    const rating = parseInt(text, 10);
    if (!isNaN(rating) && rating >= 0 && rating <= 5) {
      setFeedbackRating(text);
    }
  };

  const prescriptionNames = [
    'Adderall         1+0+0',
    'Vyvanse        0+1+0',
    'Ritalin            0+0+1',
  ];
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
        <StatusBarParent text="Home" />
        <ScrollView paddingHorizontal={'$4'}>
          <Box height={'$10'} />
          <TextSemibold text="Good Morning," fontSize={'$3xl'} />
          <TextSemibold text="Mrs. Ahmed" fontSize={'$2xl'} />
          <Box height={'$8'} />
          <TextSemibold
            textAlign="center"
            text="“EDUCATION, LIKE NEUROSIS, BEGINS AT HOME”"
            fontSize={'$3xl'}
          />
          <Box height={'$8'} />

          <TextSemibold text="Courses" fontSize={'$2xl'} />
          <Box height={'$2'} />

          <VStack space={'md'}>
            {courses.map((course: Course, index: number) => (
              <Box
                key={index}
                padding={'$3'}
                backgroundColor={'#f0f0f0'}
                borderRadius={15}
                borderWidth={1}
                borderColor={'#ccc'}>
                <TextSemibold text={course.title} fontSize={'$md'} />
              </Box>
            ))}
          </VStack>

          <Box height={'$8'} />
          <TextSemibold text="Child's Prescription: " fontSize={'$2xl'} />

          <ScrollView>
            <Box
              height={'$40'}
              backgroundColor={'#f0f0f0'}
              padding={'$3'}
              borderRadius={15}
              borderWidth={1}
              borderColor={'#ccc'}>
              <VStack space={'md'}>
                {prescriptionNames.map((name, index) => (
                  <TextRegular key={index} fontSize={'$md'} text={name} />
                ))}
              </VStack>
            </Box>

            <Box height={'$8'} />
            <TextSemibold text="Feedback" fontSize={'$2xl'} />

            <TextInput
              style={{
                height: 40,
                backgroundColor: 'grey',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
              }}
              placeholder="Enter feedback rating out of 5"
              keyboardType="numeric"
              onChangeText={handleFeedbackChange}
              value={feedbackRating}
            />
            <Box height={'$6'} />
            <Box flex={1} justifyContent="center" alignItems="center">
              <Button
                android_ripple={{color: 'grey'}}
                hardShadow="3"
                width={120}
                borderColor="black"
                bg={'#EAC5C5'}
                borderWidth={1}
                borderRadius={10}>
                <TextBold text="Submit" />
              </Button>
            </Box>
            <Box height={height} />
          </ScrollView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ParentMain;
