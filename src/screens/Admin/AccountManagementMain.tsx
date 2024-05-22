import {Box, HStack, ImageBackground, View} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarAdmin from '../../components/molecules/StatusBarAdmin';
import TopTabs from '../../navigation/TopTabs';
import AccountManagementDoctor from './AccountManagementDoctor';
import AccountManagementTeachers from './AccountManagementTeachers';
import AccountManagementStudents from './AccountManagementStudents';
import AccountManagementParents from './AccountManagementParents';

const BackgroundImage = require('../../assets/images/admin-bg-main.png');

const AccountManagementMain = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarAdmin text="Account Management" gap="$5" />
        <Box height={'$8'} />
        <HStack h={'$full'} w={'$full'} paddingHorizontal={'$4'}>
          <TopTabs
            doctors={AccountManagementDoctor}
            teachers={AccountManagementTeachers}
            students={AccountManagementStudents}
            parents={AccountManagementParents}
          />
        </HStack>
      </ImageBackground>
    </View>
  );
};

export default AccountManagementMain;
