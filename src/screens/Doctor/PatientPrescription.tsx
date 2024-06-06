import {
  View,
  ImageBackground,
  ScrollView,
  HStack,
  Image,
  Button,
} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import {TextInput} from 'react-native';
import TextBold from '../../components/atoms/Text/TextBold';
import StatusBarDoctor from '../../components/molecules/StatusBarDoctor';
import {Picker} from '@react-native-picker/picker';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading';
import {capitalizeFirstLetter} from '../../helpers/capitalizeLetter';
import {useStore} from '../../store';
import Success from '../../components/molecules/popup/Success';
import Error from '../../components/molecules/popup/Error';
import {ButtonSpinner} from '@gluestack-ui/themed';
import TextSemibold from '../../components/atoms/Text/TextSemibold';

const BackgroundImage = require('../../assets/images/patienthistory.png');
const TeacherPic = require('../../assets/images/icons/Doctor.png');

const PatientPrescription = () => {
  const store = useStore();
  const [loading, setLoading] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [prescription, setPrescription] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

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

  const onSubmit = async () => {
    setLoading(true);
    await axios
      .post('http://13.127.65.203:8080/doctor/prescription', {
        prescription,
        patientId: selectedPatient,
        doctorId: store.user?.user.id_assigned,
      })
      .then(res => {
        console.log(res.data);
        setLoading(false);
        setShowSuccess(true);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
        setShowError(true);
      });
  };

  return (
    <View h="$full">
      <ImageBackground source={BackgroundImage} h="$full">
        <StatusBarDoctor text="Patient Prescription" />
        <HStack
          alignItems="center"
          justifyContent="center"
          paddingHorizontal={'$4'}>
          <Image source={TeacherPic} alt="Avatar" size={'2xl'} />
        </HStack>
        <ScrollView contentContainerStyle={{padding: 20}}>
          <TextSemibold text="Patient" fontSize={'$xl'} />
          <View
            style={{
              borderWidth: 2,
              borderRadius: 15,
              padding: 5,
              marginTop: 10,
              backgroundColor: 'grey',
            }}>
            <Picker
              selectedValue={selectedPatient}
              onValueChange={itemValue => setSelectedPatient(itemValue)}
              style={{height: 55, width: '100%'}}
              itemStyle={{color: 'black'}}>
              <Picker.Item label="Select a patient" value="" />
              {patients.map((patient: any) => (
                <Picker.Item
                  key={patient.id}
                  label={capitalizeFirstLetter(patient.full_name)}
                  value={patient.id_assigned}
                />
              ))}
            </Picker>
          </View>

          <TextSemibold text="Prescription" fontSize={'$xl'} mt={'$4'} />
          <TextInput
            placeholder="Enter patient Prescription"
            multiline
            onChange={e => setPrescription(e.nativeEvent.text)}
            style={{
              borderWidth: 2,
              borderRadius: 15,
              padding: 10,
              height: 150,
              textAlignVertical: 'top',
              backgroundColor: 'grey',
              color: 'white',
              marginBottom: 20,
              fontFamily: 'Poppins-Regular',
            }}
          />

          <HStack space="lg">
            <Button
              flex={1}
              android_ripple={{color: 'grey'}}
              onPress={() => onSubmit()}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#EAC5C5'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <HStack>
                {loading && <ButtonSpinner color="black" />}
                <TextBold text="Save" ml={loading ? '$2' : '$0'} />
              </HStack>
            </Button>
          </HStack>
        </ScrollView>
      </ImageBackground>
      <Success
        showModal={showSuccess}
        setShowModal={setShowSuccess}
        text="Prescription added successfully"
        bgColor="#EAC5C5"
      />
      <Error
        showModal={showError}
        setShowModal={setShowError}
        text="An error occurred"
        bgColor="#EAC5C5"
      />
    </View>
  );
};

export default PatientPrescription;
