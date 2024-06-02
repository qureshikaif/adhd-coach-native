import {
  View,
  ImageBackground,
  ScrollView,
  Text,
  Box,
  Image,
} from '@gluestack-ui/themed';
import React from 'react';

import StatusBarDoctor from '../../components/molecules/StatusBarDoctor';

const BackgroundImage = require('../../assets/images/doctor-bg.png');
const TeacherPic = require('../../assets/images/icons/TeacherPic.png');

const PersonalInfo = () => {
  //   const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarDoctor text="Profile Information" />
        <Box height={'$7'} />
        <ScrollView paddingHorizontal={'$4'}>
          <Box flexDirection="row" alignItems="center">
            <Box flex={1}>
              <Box
                height={770}
                bgColor="#FADFDF"
                justifyContent="flex-start"
                padding={20}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 30,
                  }}>
                  <Box
                    rounded={'$full'}
                    overflow="hidden"
                    width={100}
                    height={100}
                    borderWidth={2}
                    borderColor="gray.200">
                    <Image
                      source={TeacherPic}
                      alt="Teacher"
                      style={{width: '100%', height: '100%'}}
                    />
                  </Box>
                  <Text
                    style={{
                      marginTop: 0,
                      marginLeft: 15,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    Joined 2 years ago
                  </Text>
                </View>
                <Text mt={4} fontFamily="Poppins-Regular">
                  Personal Information:{'\n'}
                  Full Name: Dr. Sana Zehra{'\n'}
                  ID: sanaD11{'\n'}
                  Gender: Female{'\n'}
                  Date of Birth: 01-18-1990{'\n'}
                  Phone Number: +9234-34224387{'\n'}
                  Email: Drsana@gmail.com{'\n'}
                  Address: 168 Falcon{'\n'}
                  Medical License Number: GcDr8521{'\n'}
                  {'\n'}
                  Professional Information:{'\n'}
                  Area of Expertise: Psychiatric Evaluation and Diagnosis{'\n'}
                  Medical Degree: MD (Doctor of Medicine){'\n'}
                  Board Certification: 58493rw{'\n'}
                  Years of Practice Experience: 10{'\n'}
                  Affiliated Hospital or Clinic: ClearView Psychiatry{'\n'}
                  {'\n'}
                  Educational Background:{'\n'}
                  Medical School Attended: Johns Hopkins University{'\n'}
                  Graduation Year: 2012{'\n'}
                </Text>
              </Box>
              <Box height={'$5'} />
            </Box>
          </Box>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default PersonalInfo;
