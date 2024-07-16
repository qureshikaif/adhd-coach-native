import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  VStack,
  Button,
  Pressable,
  HStack,
  ButtonSpinner,
} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {TextInput} from 'react-native';
import StatusBarParent from '../../components/molecules/StatusBarParent';
import TextRegular from '../../components/atoms/Text/TextRegular';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useQuery} from '@tanstack/react-query';
import Loading from '../Loading';
import axios from 'axios';
import {capitalizeFirstLetter} from '../../helpers/capitalizeLetter';
import {useStore} from '../../store';
import Error from '../../components/molecules/popup/Error';
import Success from '../../components/molecules/popup/Success';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const BackgroundImage = require('../../assets/images/parent-main-bg.png');

type NavigationType = {
  DoctorsList: undefined;
};

const ParentMain = () => {
  const store = useStore();
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const [feedbackRating, setFeedbackRating] = useState<string>('');
  const height = useBottomTabBarHeight();
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const {
    data: prescriptions,
    isLoading: isLoadingPrescription,
    isFetched,
  } = useQuery({
    queryKey: ['prescriptionsChildren'],
    queryFn: async () => {
      const {data} = await axios.get(
        `http://192.168.27.143:8080/parent/get-prescriptions/${store.user?.user.child_id}`,
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
        `http://192.168.27.143:8080/parent/check-doctor/${store.user?.user.child_id}`,
      );
      return data;
    },
  });

  if (isLoadingPrescription || isLoadingCheck) {
    return <Loading bgImage={BackgroundImage} />;
  }

  if (!isFetched || !isFetchedCheck) {
    return (
      <ImageBackground
        source={BackgroundImage}
        h="$full"
        alignItems="center"
        justifyContent="center">
        <TextSemibold text="An error occured while fetching data" />
      </ImageBackground>
    );
  }

  const handleFeedbackChange = (text: string) => {
    const rating = parseInt(text, 10);
    if (!isNaN(rating) && rating >= 0 && rating <= 5) {
      setFeedbackRating(text);
    }
  };

  const handleSubmitFeedback = async () => {
    if (feedbackRating === '') {
      setError(true);
      return;
    }
    setLoading(true);
    await axios
      .post('http://192.168.27.143:8080/parent/add-feedback', {
        feedback: feedbackRating,
        userId: store.user?.user.id,
      })
      .then(res => {
        console.log(res.data);
        setLoading(false);
        setSuccess(true);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };

  console.log('Prescription', prescriptions);

  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
        <StatusBarParent text="Home" />
        <ScrollView paddingHorizontal={'$4'}>
          <Box height={'$10'} />
          <TextSemibold text="Good Morning," fontSize={'$3xl'} />
          <TextSemibold
            fontSize={'$2xl'}
            text={capitalizeFirstLetter(
              store.user ? store.user.user.full_name : 'John Doe',
            )}
          />
          <Box height={'$8'} />
          <TextSemibold
            textAlign="center"
            text="“EDUCATION, LIKE NEUROSIS, BEGINS AT HOME”"
            fontSize={'$3xl'}
          />
          <Box height={'$8'} />

          <TextSemibold text="Doctors" fontSize={'$2xl'} />
          <TextRegular
            text="You can assign a doctor to your child to track their progress and to get prescriptions."
            fontSize={'$xs'}
          />
          <Box height={'$2'} />

          <Pressable
            bg="#DBC9E1"
            w="$full"
            h="$20"
            disabled={checkDoctors.isDoctorAssigned}
            onPress={() => navigation.navigate('DoctorsList')}
            android_ripple={{color: 'gray'}}>
            <VStack
              w="$full"
              alignItems="center"
              justifyContent="center"
              h="$20">
              <TextSemibold
                text={
                  checkDoctors.isDoctorAssigned
                    ? 'Already Assigned'
                    : 'Assign a doctor'
                }
              />
            </VStack>
          </Pressable>

          <Box height={'$8'} />

          <TextSemibold text="Child's Prescription" fontSize={'$2xl'} />

          <Box height={'$8'} />
          {!prescriptions && (
            <TextRegular
              w="$full"
              textAlign="center"
              text="No Prescriptions assigned yet"
              fontSize={'$lg'}
            />
          )}

          <ScrollView>
            {prescriptions?.map((prescription: any, index: number) => (
              <Box
                key={index}
                backgroundColor={'#f0f0f0'}
                padding={'$3'}
                mb={'$4'}
                borderRadius={15}
                borderWidth={1}
                borderColor={'#ccc'}>
                <VStack space={'md'}>
                  <TextSemibold
                    text={`Given by ${capitalizeFirstLetter(
                      prescription.doctor_name,
                    )}`}
                  />
                  <TextRegular
                    fontSize={'$md'}
                    text={prescription.prescription}
                  />
                </VStack>
              </Box>
            ))}

            <Box height={'$8'} />
            <TextSemibold text="Feedback" fontSize={'$2xl'} />

            <TextInput
              style={{
                height: 40,
                backgroundColor: 'grey',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
              }}
              placeholder="Enter feedback rating out of 5"
              keyboardType="numeric"
              onChangeText={handleFeedbackChange}
              value={feedbackRating}
            />
            <Box height={'$6'} />
            <Box flex={1} justifyContent="center" alignItems="center">
              <Button
                onPress={handleSubmitFeedback}
                android_ripple={{color: 'grey'}}
                hardShadow="3"
                width={120}
                borderColor="black"
                bg={'#EAC5C5'}
                borderWidth={1}
                borderRadius={10}>
                <HStack>
                  {loading && <ButtonSpinner color="black" />}
                  <TextBold text="Submit" ml={loading ? '$2' : '$0'} />
                </HStack>
              </Button>
            </Box>
            <Box height={height} />
          </ScrollView>
        </ScrollView>
      </ImageBackground>
      <Error
        showModal={error}
        setShowModal={setError}
        text="Error occured while submitting feedback"
      />
      <Success
        showModal={success}
        setShowModal={setSuccess}
        text="Feedback added successfully"
      />
    </View>
  );
};

export default ParentMain;
