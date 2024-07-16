import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import SideButton from '../../components/atoms/Buttons/SideButton';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading';
import StatusBarDoctor from '../../components/molecules/StatusBarDoctor';
import {capitalizeFirstLetter} from '../../helpers/capitalizeLetter';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useStore} from '../../store';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import TextRegular from '../../components/atoms/Text/TextRegular';

const BackgroundImage = require('../../assets/images/PatientProfile-bg.png');

type NavigationType = {
  PatientMedicalHistory: {patients: any};
};

const PatientProfileHistory = () => {
  const store = useStore();
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const {data: patients, isLoading} = useQuery({
    queryKey: ['patientsDoctor'],
    queryFn: async () => {
      const {data} = await axios.get(
        `http://192.168.27.143:8080/doctor/students/${store.user?.user.id_assigned}`,
      );
      return data;
    },
  });

  if (isLoading) {
    return <Loading bgImage={BackgroundImage} />;
  }

  console.log(patients);
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarDoctor text="Manage Patients" />
        <ScrollView paddingHorizontal={'$5'}>
          <Box height={'$10'} />
          <TextSemibold text="Patient List" fontSize={'$xl'} />
          <TextRegular
            text="Below are the list of students who are assigned to you by their parents."
            fontSize={'$xs'}
          />
          <Box height={'$5'} />

          <VStack space={'2xl'}>
            {Array.isArray(patients) && patients.length === 0 ? (
              <TextRegular text="No patients assigned yet" fontSize={'$lg'} />
            ) : (
              patients?.map((patient: any, index: number) => (
                <SideButton
                  onPress={() =>
                    navigation.navigate('PatientMedicalHistory', {
                      patients: patient,
                    })
                  }
                  key={index}
                  text={capitalizeFirstLetter(patient.full_name)}
                />
              ))
            )}
          </VStack>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default PatientProfileHistory;
