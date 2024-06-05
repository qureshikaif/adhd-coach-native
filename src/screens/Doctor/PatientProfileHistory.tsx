import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import SideButton from '../../components/atoms/Buttons/SideButton';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading';
import StatusBarDoctor from '../../components/molecules/StatusBarDoctor';
import {capitalizeFirstLetter} from '../../helpers/capitalizeLetter';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const BackgroundImage = require('../../assets/images/PatientProfile-bg.png');

type NavigationType = {
  PatientMedicalHistory: undefined;
};

const PatientProfileHistory = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();

  const {data: patients, isLoading} = useQuery({
    queryKey: ['patients'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://13.127.65.203:8080/student/get-students',
      );
      return data;
    },
  });

  if (isLoading) {
    return <Loading bgImage={BackgroundImage} />;
  }
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarDoctor text="Patient Profile" />
        <ScrollView paddingHorizontal={'$5'}>
          <Box height={'$10'} />
          <TextBold text="Patients" mb={'$4'} fontSize={'$xl'} />
          <VStack space={'2xl'}>
            {patients.map((patient: any, index: number) => (
              <SideButton
                onPress={() => navigation.navigate('PatientMedicalHistory')}
                key={index}
                text={capitalizeFirstLetter(patient.full_name)}
              />
            ))}
          </VStack>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default PatientProfileHistory;
