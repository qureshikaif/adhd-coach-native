import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import AddNewButton from '../../components/atoms/Buttons/AddNewButton';
import AddDoctor from '../../components/molecules/popup/AddDoctor';
import ViewOrRemove from '../../components/atoms/Buttons/ViewOrRemove';
import TextSemibold from '../../components/atoms/Text/TextSemibold';

const BackgroundImage = require('../../assets/images/admin-bg-main.png');

const AccountManagementDoctor = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <Box height={'$8'} />
        <ScrollView>
          <VStack space="sm">
            <AddNewButton text="Add a new doctor" ModalComponent={AddDoctor} />
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

export default AccountManagementDoctor;
