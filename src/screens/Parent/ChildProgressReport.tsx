import React from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';
import { Box, VStack, Button, HStack, Text,Image } from '@gluestack-ui/themed';
import TextBold from '../../components/atoms/Text/TextBold';
const TeacherPic = require('../../assets/images/icons/Childprogress.png');
const BackgroundImage = require('../../assets/images/ChildInfo.png');

const ChildReport = () => {
 
  const quizMarks = 75; 
  const teacherRemarks = "Great progress this term! Keep up the good work."; 

  const calculateProgress = () => {
    return quizMarks / 100;
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={BackgroundImage} style={{ flex: 1 }}>
      <Box height={50} />
      <Box style={{ backgroundColor: '#EAC6E2', padding: 10, alignItems: 'center', borderRadius: 10, margin: 10 }}>
          <TextBold text="Child Progress Report" fontSize={'$xl'} />
        </Box>
        <ScrollView contentContainerStyle={{ padding: 10 }}>
          <Box height={20} />

          <Svg height="60" width="100%" viewBox="0 0 200 60">
           
            <Rect x="0" y="0" width="200" height="40" fill="none" stroke="black" strokeWidth="2" rx="10" />
            
           
            <Rect x="2" y="2" width={calculateProgress() * 196} height="36" fill="#4CAF50" rx="10" />

            {/* Scale Markings */}
            <SvgText x="0" y="45" fill="black" fontSize="10">0</SvgText>
            <SvgText x="40" y="45" fill="black" fontSize="10">20</SvgText>
            <SvgText x="80" y="45" fill="black" fontSize="10">40</SvgText>
            <SvgText x="120" y="45" fill="black" fontSize="10">60</SvgText>
            <SvgText x="160" y="45" fill="black" fontSize="10">80</SvgText>
            <SvgText x="200" y="45" fill="black" fontSize="10">100</SvgText>
          </Svg>

          <Box height={20} />

          <TextBold text="Quiz Marks" fontSize={'$xl'} />
          <Box
            style={{
              backgroundColor: '#f0f0f0',
              padding: 10,
              marginBottom: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'grey'
            }}
          >
            <Text style={{ fontSize: 20 }}>{quizMarks}</Text>
          </Box>

          <Box height={20} />
          <TextBold text="Teacher Remarks" fontSize={'$xl'} />
          <Box
            style={{
              backgroundColor: '#f0f0f0',
              padding: 10,
              marginBottom: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'grey'
            }}
          >
            <Text style={{ fontSize: 16 }}>{teacherRemarks}</Text>
          </Box>

          <HStack alignItems='center' justifyContent='center'  paddingHorizontal={'$4'}>
          <Image source={TeacherPic} alt="Avatar" size={'2xl'} />
        </HStack>
        
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ChildReport;
