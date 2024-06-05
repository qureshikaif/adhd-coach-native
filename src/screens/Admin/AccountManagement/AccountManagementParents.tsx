import {ImageBackground, ScrollView, Box, VStack} from '@gluestack-ui/themed';
import React from 'react';
import ViewOrRemove from '../../../components/atoms/Buttons/ViewOrRemove';
import TextSemibold from '../../../components/atoms/Text/TextSemibold';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import Loading from '../../Loading';
import {User} from '../../../types/User';

const BackgroundImage = require('../../../assets/images/admin-bg-main.png');

const AccountManagementParents = () => {
  const height = useBottomTabBarHeight();

  const {data: parents, isLoading} = useQuery({
    queryKey: ['parents'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://13.127.65.203:8080/parent/get-parents',
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
          <TextSemibold text="View/Remove" fontSize={'$xl'} />
          {parents.map((parent: User, index: number) => (
            <ViewOrRemove key={index} user={parent} />
          ))}
        </VStack>
        <Box height={height * 2.5} />
      </ScrollView>
    </ImageBackground>
  );
};

export default AccountManagementParents;
