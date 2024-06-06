import React from 'react';
import {
  View,
  ScrollView,
  Box,
  HStack,
  Text,
  Button,
  ImageBackground,
  ButtonSpinner,
} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import {Plus} from 'lucide-react-native';
import StatusBarTeacher from '../../components/molecules/StatusBarParent';
import TextRegular from '../../components/atoms/Text/TextRegular';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {useStore} from '../../store';

const BackgroundImage = require('../../assets/images/TeacherProfile.png');

const DoctorsList = () => {
  // const navigation = useNavigation();
  const store = useStore();
  const [loadingDoctorId, setLoadingDoctorId] = React.useState(null); // State to track which button is loading

  const {
    data: doctors,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://192.168.0.107:8080/parent/get-doctors',
      );
      return data;
    },
  });

  const {
    data: checkDoctors,
    isLoading: isLoadingCheck,
    isFetched: isFetchedCheck,
  } = useQuery({
    queryKey: ['checkDoctors'],
    queryFn: async () => {
      const {data} = await axios.get(
        `http://192.168.0.107:8080/parent/check-doctor/${store.user?.user.child_id}`,
      );
      return data;
    },
  });

  const handleAssignment = async (doctorId: any) => {
    setLoadingDoctorId(doctorId);
    try {
      const response = await axios.post(
        'http://192.168.0.107:8080/parent/assign-doctor',
        {
          parentId: store.user?.user.id,
          studentId: store.user?.user.child_id,
          doctorId,
        },
      );
      console.log(response.data);
      setLoadingDoctorId(null);
    } catch (error: any) {
      console.log(error.response.data);
      setLoadingDoctorId(null);
    }
  };

  if (isLoading || isLoadingCheck) {
    return <Loading bgImage={BackgroundImage} />;
  }

  if (!isFetched || !isFetchedCheck) {
    return (
      <ImageBackground
        source={BackgroundImage}
        h="$full"
        alignItems="center"
        justifyContent="center">
        <TextSemibold text="An error occurred while fetching data" />
      </ImageBackground>
    );
  }

  if (checkDoctors.isDoctorAssigned) {
    return (
      <ImageBackground
        source={BackgroundImage}
        h="$full"
        alignItems="center"
        justifyContent="center">
        <TextSemibold text="Doctor is already assigned to your child" />
      </ImageBackground>
    );
  }

  return (
    <View flex={1}>
      <ImageBackground source={BackgroundImage} h="$full" resizeMode="cover">
        <StatusBarTeacher text="Doctors List" />
        <ScrollView px={'$4'}>
          <Box height={'$5'} />
          <TextRegular text="Assign doctor to your child" fontSize="$lg" />
          <Box height={'$5'} />

          {doctors.map((doctor: any) => (
            <Box
              key={doctor.id}
              p={5}
              mb={5}
              borderBottomWidth={1}
              borderColor="gray.200">
              <HStack justifyContent="space-between" alignItems="center">
                <Box flex={1}>
                  <Text fontWeight="bold" fontSize="$md">
                    {doctor.full_name}
                  </Text>
                  <Text color="black">{doctor.specialization}</Text>
                </Box>
                {loadingDoctorId === doctor.id_assigned ? (
                  <ButtonSpinner />
                ) : (
                  <Button
                    bg="transparent"
                    onPress={() => handleAssignment(doctor.id_assigned)}
                    p={2}>
                    <Plus absoluteStrokeWidth color={'black'} />
                  </Button>
                )}
              </HStack>
            </Box>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default DoctorsList;
