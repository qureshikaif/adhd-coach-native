import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import ViewOrRemove from '../../components/atoms/Buttons/ViewOrRemove';

const BackgroundImage = require('../../assets/images/admin-bg-main.png');

const AccountManagementParents = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <Box height={'$8'} />
        <ScrollView>
          <VStack space="sm">
            <TextSemibold text="View/Remove" fontSize={'$xl'} />
            <ViewOrRemove />
            <ViewOrRemove />
            <ViewOrRemove />
            <ViewOrRemove />
          </VStack>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default AccountManagementParents;
