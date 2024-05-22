import {ImageBackground, ScrollView, Box, VStack} from '@gluestack-ui/themed';
import React from 'react';
import AddNewButton from '../../../components/atoms/Buttons/AddNewButton';
import AddDoctor from '../../../components/molecules/popup/AddDoctor';
import ViewOrRemove from '../../../components/atoms/Buttons/ViewOrRemove';
import TextSemibold from '../../../components/atoms/Text/TextSemibold';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const BackgroundImage = require('../../../assets/images/admin-content-bg.png');

type NavigationType = {
  AddNewArticle: undefined;
};

const ContentManagementArticle = () => {
  const height = useBottomTabBarHeight();
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <ImageBackground source={BackgroundImage} minHeight={'$full'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space="xs">
          <AddNewButton
            text="Add a new article"
            ModalComponent={AddDoctor}
            onPress={() => navigation.navigate('AddNewArticle')}
          />
          <TextSemibold text="View/Remove" fontSize={'$xl'} />
          {Array.from({length: 10}).map((_, index) => (
            <ViewOrRemove key={index} />
          ))}
        </VStack>
        <Box height={height * 2.5} />
      </ScrollView>
    </ImageBackground>
  );
};

export default ContentManagementArticle;
