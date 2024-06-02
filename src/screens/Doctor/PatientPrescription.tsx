import { View, ImageBackground, ScrollView, HStack, Image, Button } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import TextBold from '../../components/atoms/Text/TextBold';
import StatusBarDoctor from '../../components/molecules/StatusBarDoctor';
import { Picker } from '@react-native-picker/picker';
import { Box } from 'lucide-react-native';

const BackgroundImage = require('../../assets/images/patienthistory.png');
const TeacherPic = require('../../assets/images/icons/Doctor.png');

const PatientPrescription = () => {
  const [selectedPatient, setSelectedPatient] = useState('');

  const patients = [
    { label: 'Patient1', value: 'Patient1' },
    { label: 'Patient 2', value: 'Patient 2' },
    { label: 'Patient 3', value: 'Patient 3' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={BackgroundImage} style={{ flex: 1 }}>
        <StatusBarDoctor text='Patient Prescription' isSettingsVisible />
        <HStack alignItems='center' justifyContent='center'  paddingHorizontal={'$4'}>
          <Image source={TeacherPic} alt="Avatar" size={'2xl'} />
        </HStack>
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          <TextBold text="Patient" fontSize={'$xl'} />
          <View style={{
              borderWidth: 3,
              borderRadius: 15,
              padding: 5,
              marginTop: 10,
              backgroundColor: 'grey',
          }}>
            <Picker
              selectedValue={selectedPatient}
              onValueChange={(itemValue) => setSelectedPatient(itemValue)}
              style={{ height: 50, width: '100%' }}
              itemStyle={{ color: 'black' }}
            >
              <Picker.Item label="Select a patient" value="" />
              {patients.map((patient) => (
                <Picker.Item key={patient.value} label={patient.label} value={patient.value} />
              ))}
            </Picker>
          </View>

          <TextBold text="Patient Prescription" fontSize={'$xl'} />
          <TextInput
            placeholder="Enter patient Prescription"
            multiline
            style={{
              borderWidth: 3,
              borderRadius: 15,
              padding: 10,
              height: 150,
              textAlignVertical: 'top',
              backgroundColor: 'grey', 
              color: 'white',
              marginBottom: 20, 
            }}
          />
            
           <HStack space="lg">
            <Button
              android_ripple={{color: 'grey'}}
              //   onPress={() => navigation.navigate('ForgotPassword')}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#EAC5C5'}
              borderWidth={1}
              borderRadius={'$lg'}
              style={{ marginBottom: 20 }} // Add margin bottom to create a gap
            >
              <TextBold text="Add new" />
            </Button>
            <Button
              android_ripple={{color: 'grey'}}
              //   onPress={() => navigation.navigate('ForgotPassword')}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#EAC5C5'}
              borderWidth={1}
              borderRadius={'$lg'}
             
            >
              <TextBold text="save Changes " />
            </Button>
          </HStack>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default PatientPrescription;
