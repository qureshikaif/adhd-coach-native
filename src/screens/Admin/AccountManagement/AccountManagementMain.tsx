import {ImageBackground, VStack} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarAdmin from '../../../components/molecules/StatusBarAdmin';
import TopTabs from '../../../navigation/TopTabs';
import AccountManagementDoctor from './AccountManagementDoctor';
import AccountManagementTeachers from './AccountManagementTeachers';
import AccountManagementStudents from './AccountManagementStudents';
import AccountManagementParents from './AccountManagementParents';

const BackgroundImage = require('../../../assets/images/admin-bg-main.png');
const AccountManagementMain = () => {
  return (
    <ImageBackground source={BackgroundImage} minHeight={'$full'}>
      <StatusBarAdmin text="Account Management" gap="$5" />
      <VStack h={'$full'} w={'$full'} paddingHorizontal={'$4'}>
        <TopTabs
          doctors={AccountManagementDoctor}
          teachers={AccountManagementTeachers}
          students={AccountManagementStudents}
          parents={AccountManagementParents}
        />
      </VStack>
    </ImageBackground>
  );
};

export default AccountManagementMain;
