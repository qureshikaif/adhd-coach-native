import {ImageBackground, ScrollView, Box, VStack} from '@gluestack-ui/themed';
import React from 'react';
import AddNewButton from '../../../components/atoms/Buttons/AddNewButton';
import AddDoctor from '../../../components/molecules/popup/AddDoctor';
import ViewOrRemove from '../../../components/atoms/Buttons/ViewOrRemove';
import TextSemibold from '../../../components/atoms/Text/TextSemibold';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import Loading from '../../Loading';
import {User} from '../../../types/User';

const BackgroundImage = require('../../../assets/images/admin-bg-main.png');

const AccountManagementDoctor = () => {
  const height = useBottomTabBarHeight();

  const {data: doctors, isLoading} = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://13.127.65.203:8080/doctor/get-doctors',
      );
      return data;
    },
  });

  if (isLoading) {
    return <Loading bgImage={BackgroundImage} />;
  }
  return (
    <ImageBackground source={BackgroundImage} minHeight={'$full'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space="xs">
          <AddNewButton text="Add a new doctor" ModalComponent={AddDoctor} />
          <TextSemibold text="View/Remove" fontSize={'$xl'} />
          {doctors.map((doctor: User, index: number) => (
            <ViewOrRemove key={index} user={doctor} />
          ))}
        </VStack>
        <Box height={height * 2.5} />
      </ScrollView>
    </ImageBackground>
  );
};

export default AccountManagementDoctor;
