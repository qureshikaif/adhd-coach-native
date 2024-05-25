import {ImageBackground, VStack} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarAdmin from '../../../components/molecules/StatusBarAdmin';
import TopTabsContent from '../../../navigation/TopTabsContent';
import ContentManagementCourse from './ContentManagementCourse';
import ContentManagementArticle from './ContentManagementArticle';

const BackgroundImage = require('../../../assets/images/admin-content-bg.png');

const ContentManagementMain = () => {
  return (
    <ImageBackground source={BackgroundImage} minHeight={'$full'}>
      <StatusBarAdmin text="Content Management" gap="$5" />
      <VStack h={'$full'} w={'$full'} paddingHorizontal={'$4'}>
        <TopTabsContent
          courses={ContentManagementCourse}
          articles={ContentManagementArticle}
        />
      </VStack>
    </ImageBackground>
  );
};

export default ContentManagementMain;
