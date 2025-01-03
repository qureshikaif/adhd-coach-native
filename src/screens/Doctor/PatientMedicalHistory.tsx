import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  Button,
  HStack,
  Text,
  ButtonSpinner,
} from '@gluestack-ui/themed';
import {TextInput} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import TextBold from '../../components/atoms/Text/TextBold';
import StatusBarDoctor from '../../components/molecules/StatusBarDoctor';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import axios from 'axios';
import {useStore} from '../../store';
import Error from '../../components/molecules/popup/Error';
import Success from '../../components/molecules/popup/Success';

const BackgroundImage = require('../../assets/images/patienthistory.png');

type NavigationType = {
  PatientMedicalHistory: {patients: any};
};

type RouteType = RouteProp<NavigationType, 'PatientMedicalHistory'>;

const PatientMedicalHistory = ({route}: {route: RouteType}) => {
  const store = useStore();
  const height = useBottomTabBarHeight();
  const [remark, setRemark] = useState('');
  const [loading, setLoading] = useState(false);
  const {patients} = route.params;
  const [success, showSuccess] = useState(false);
  const [error, showError] = useState(false);

  const handleSave = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        'https://adhd-coach-backend.vercel.app/doctor/remarks',
        {
          doctorId: store.user?.user.id_assigned,
          studentId: patients.id_assigned,
          remarks: remark,
        },
      );

      console.log('Remark saved:', response.data);
      setRemark('');
      setLoading(false);
    } catch (error) {
      console.log('Error saving remark:', error);
      setLoading(false);
    }
  };

  return (
    <View h="$full">
      <ImageBackground source={BackgroundImage} h="$full">
        <StatusBarDoctor text="Patient Info" />
        <ScrollView paddingHorizontal={'$4'} paddingVertical={'$5'}>
          <Box
            bgColor="#F0D9F3"
            justifyContent="flex-start"
            padding={20}
            borderRadius={20}
            borderWidth={1}>
            <Text mt={4} fontFamily="Poppins-Regular">
              Patient Details: {'\n'}
              Name: {patients.full_name} {'\n'}
              Email: {patients.email} {'\n\n'}
              Progress Report: {'\n'}
              Teacher Name: {patients.teacher_name}. {'\n'}
              Teacher Remarks: {patients.teacher_remarks}. {'\n'}
            </Text>
          </Box>
          <Box height={'$5'} />

          <TextSemibold text="Give Remarks" fontSize={'$xl'} />

          <TextInput
            style={{
              height: 150,
              backgroundColor: '#E0E6DE',
              borderWidth: 1,
              textAlignVertical: 'top',
              color: 'black',
              borderRadius: 20,
              padding: 15,
              fontFamily: 'Poppins-Regular',
            }}
            placeholder="Enter Remarks Here"
            placeholderTextColor={'black'}
            multiline
            value={remark}
            onChangeText={setRemark}
          />
          <Box height={'$10'} />
          <HStack space="xl">
            <Button
              flex={1}
              android_ripple={{color: '#DEB5B5'}}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#947C7C'}
              borderWidth={1}
              borderRadius={'$lg'}
              onPress={() => setRemark('')} // Clear the remark on cancel
            >
              <TextBold text="Cancel" />
            </Button>
            <Button
              flex={1}
              android_ripple={{color: '#DEB5B5'}}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#DEB5B5'}
              borderWidth={1}
              borderRadius={'$lg'}
              onPress={handleSave}>
              <HStack>
                {loading && <ButtonSpinner color="black" />}
                <TextBold text="Save" ml={loading ? '$2' : '$0'} />
              </HStack>
            </Button>
          </HStack>
          <Box height={height} />
        </ScrollView>
      </ImageBackground>
      <Error
        showModal={error}
        setShowModal={showError}
        text="An error occured while adding remarks"
      />
      <Success
        showModal={success}
        setShowModal={showSuccess}
        text="Remarks added successfully"
      />
    </View>
  );
};

export default PatientMedicalHistory;
