import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import SideButton from '../../components/atoms/Buttons/SideButton';
import StatusBarParent from '../../components/molecules/StatusBarParent';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {useStore} from '../../store';
import TextRegular from '../../components/atoms/Text/TextRegular';

const BackgroundImage = require('../../assets/images/parent-main-bg.png');

type NavigationType = {
  ChildProgressReport: {content: any};
};

const ChildProgressList = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const store = useStore();
  const {data: teachers, isLoading: isLoadingTeacher} = useQuery({
    queryKey: ['teachersChildProgressList'],
    queryFn: async () => {
      const {data} = await axios.get(
        `http://192.168.27.143:8080/parent/progress-report/${store.user?.user.child_id}`,
      );
      return data;
    },
  });

  const {data: doctors, isLoading: isLoadingDoctor} = useQuery({
    queryKey: ['doctorsChildProgressList'],
    queryFn: async () => {
      const {data} = await axios.get(
        `http://192.168.27.143:8080/parent/doctor-remarks/${store.user?.user.child_id}`,
      );
      return data;
    },
  });

  console.log('Doctors, ', doctors);

  if (isLoadingTeacher || isLoadingDoctor) {
    return <Loading bgImage={BackgroundImage} />;
  }

  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarParent text="Child Progress" />

        <ScrollView paddingHorizontal={'$5'}>
          <Box height={'$12'} />
          <TextSemibold text="Teacher's Remarks" fontSize={'$xl'} />
          <VStack space={'2xl'}>
            {Array.isArray(teachers) && teachers.length === 0 && (
              <TextRegular text="No teachers remarks yet" />
            )}
            {teachers?.map((teacher: any, index: number) => (
              <SideButton
                key={index}
                text={teacher.teacher_name}
                // content={teacher}
                onPress={() =>
                  navigation.navigate('ChildProgressReport', {content: teacher})
                }
              />
            ))}
          </VStack>
          <Box height={'$8'} />
          <TextSemibold text="Doctor's Remarks" fontSize={'$xl'} />
          <VStack space={'2xl'}>
            {Array.isArray(doctors) && doctors.length === 0 && (
              <TextRegular text="No doctors remarks yet" />
            )}
            {doctors?.map((doctor: any, index: number) => (
              <SideButton
                key={index}
                text={doctor.doctor_name}
                onPress={() =>
                  navigation.navigate('ChildProgressReport', {content: doctor})
                }
              />
            ))}
          </VStack>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ChildProgressList;
