import { View, ImageBackground, ScrollView, Box, VStack, Button, Text } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import { TextInput } from 'react-native';
import StatusBarParent from '../../components/molecules/StatusBarParent';

const BackgroundImage = require('../../assets/images/parent-main-bg.png');

const ParentMain = () => {
  const enrolledStudents = [1, 2,];
  const [feedbackRating, setFeedbackRating] = useState<string>('');

  const handleFeedbackChange = (text: string) => {
    const rating = parseInt(text, 10);
    if (!isNaN(rating) && rating >= 0 && rating <= 5) {
      setFeedbackRating(text);
    }
  };
  const prescriptionNames = ['Adderall         1+0+0', 'Vyvanse        0+1+0', ' Ritalin            0+0+1']
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
      <StatusBarParent text='Home'/>
        <ScrollView paddingHorizontal={"$4"}>
          <Box height={'$10'} />
          <TextBold text="Morning" fontSize={'$2xl'} />
          <Box height={'$1'} />
          <TextSemibold text="Mrs Ahmed" fontSize={'$xl'} />
          <Box height={'$4'} />
          <TextSemibold text="“EDUCATION, LIKE NEUROSIS, BEGINS AT HOME”" fontSize={'$xl'} />
          <TextBold text="Course Enrolled" fontSize={'$xl'} />
          <Box height={'$2'} />

          <VStack space={'md'}>
            {enrolledStudents.map((student, index) => (
              <Box 
                key={index} 
                padding={'$3'} 
                backgroundColor={'#f0f0f0'} 
                borderRadius={15} 
                borderWidth={1} 
                borderColor={'#ccc'}
              >
                <TextSemibold text={student} fontSize={'$md'} />
              </Box>
            ))}
          </VStack>

          <Box height={'$8'} />
          <TextBold text="Feedback" fontSize={'$xl'} />
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
              android_ripple={{ color: 'grey' }}
              hardShadow="3"
              width={120}
              borderColor="black"
              bg={'#EAC5C5'}
              borderWidth={1}
              borderRadius={10}
            >
              <TextBold text="Submit" />
            </Button>
          </Box>

          {/* Heading for Child's Prescription with three names */}
          <Box height={'$2'} />
          <TextBold text="Child's Prescription: " fontSize={'$xl'} />
          <ScrollView>
            <Box height={"$40"} backgroundColor={'#f0f0f0'} padding={'$3'} borderRadius={15} borderWidth={1} borderColor={'#ccc'}>
              <VStack space={'md'}>
                {prescriptionNames.map((name, index) => (
                  <Text key={index} fontSize={'$2xl' }>{name}</Text>
                ))}
              </VStack>
            </Box>
          </ScrollView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ParentMain;
