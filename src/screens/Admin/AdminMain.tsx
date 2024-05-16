import {View, ImageBackground, ScrollView, Box} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarAdmin from '../../components/molecules/StatusBarAdmin';
import TextBold from '../../components/atoms/Text/TextBold';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import AddNewButton from '../../components/atoms/Buttons/AddNewButton';

const BackgroundImage = require('../../assets/images/admin-bg-main.png');

// type NavigationType = {
//   ForgotPasswordVerify: undefined;
// };

const AdminMain = () => {
  //   const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarAdmin text="Admin Panel" isSettingsVisible />
        <Box height={'$8'} />
        <ScrollView paddingHorizontal={'$4'}>
          <TextBold text="Dashboard" fontSize={'$2xl'} />
          <TextSemibold text="App Analytics" fontSize={'$xl'} />
          <AddNewButton text="Add a new doctor" />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default AdminMain;
