import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarAdmin from '../../components/molecules/StatusBarAdmin';
import TextBold from '../../components/atoms/Text/TextBold';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import AddNewButton from '../../components/atoms/Buttons/AddNewButton';
import AddDoctor from '../../components/molecules/popup/AddDoctor';
import ViewOrRemove from '../../components/atoms/Buttons/ViewOrRemove';

const BackgroundImage = require('../../assets/images/admin-bg-main.png');

// type NavigationType = {
//   ForgotPasswordVerify: undefined;
// };

const AccountManagementTeachers = () => {
  //   const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarAdmin text="Account Management" />
        <Box height={'$8'} />
        <ScrollView paddingHorizontal={'$4'}>
          <TextBold text="Dashboard" fontSize={'$2xl'} />
          <TextSemibold text="App Analytics" fontSize={'$xl'} />
          <VStack space="sm">
            <AddNewButton text="Add a new doctor" ModalComponent={AddDoctor} />
            <ViewOrRemove />
            <ViewOrRemove />
            <ViewOrRemove />
            <ViewOrRemove />
          </VStack>
          {/* <AddNewButton text="Add a new teacher" ModalComponent={AddTeacher} /> */}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default AccountManagementTeachers;
