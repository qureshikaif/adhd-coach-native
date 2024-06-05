import React from 'react';
import {
  View,
  ScrollView,
  Box,
  HStack,
  Text,
  Button,
  ImageBackground,
} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import {Plus} from 'lucide-react-native';
import StatusBarTeacher from '../../components/molecules/StatusBarParent';

const BackgroundImage = require('../../assets/images/TeacherProfile.png');

type Doctor = {
  id: string;
  name: string;
  specialization: string;
};

const doctors: Doctor[] = [
  {id: '1', name: 'Dr. Jahanzeb Khan', specialization: 'Psychiatrist'},
  {id: '2', name: 'Dr. Sara Ashraf', specialization: 'Psychologist'},
  {id: '3', name: 'Dr. Adnan Malik', specialization: 'Pediatrician'},
  // Add more doctors as needed
];

const DoctorsList = () => {
  const navigation = useNavigation();

  return (
    <View flex={1}>
      <ImageBackground source={BackgroundImage} style={{flex: 1}} resizeMode="cover">
        <StatusBarTeacher text="Doctors List" />
        <ScrollView px={4}>
          <Box height={4} />
          <Box mb={8}>
            <Text fontWeight="bold" fontSize="$xl" textAlign="center">
              Assign Doctor To Your Child
            </Text>
          </Box>
          {doctors.map((doctor) => (
            <Box
              key={doctor.id}
              p={5}
              mb={5}
              borderBottomWidth={1}
              borderColor="gray.200"
            >
              <HStack justifyContent="space-between" alignItems="center">
                <Box flex={1}>
                  <Text fontWeight="bold" fontSize="$md">
                    {doctor.name}
                  </Text>
                  <Text color="gray.500">{doctor.specialization}</Text>
                </Box>
                <Button
                  bg="transparent"
                  onPress={() => console.log(`Added ${doctor.name}`)}
                  p={2}>
                  <Plus absoluteStrokeWidth color={'black'} />
                </Button>
              </HStack>
            </Box>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default DoctorsList;
