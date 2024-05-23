import {ImageBackground, ScrollView, Box, VStack} from '@gluestack-ui/themed';
import React from 'react';
import AddNewButton from '../../../components/atoms/Buttons/AddNewButton';
import AddDoctor from '../../../components/molecules/popup/AddDoctor';
import TextSemibold from '../../../components/atoms/Text/TextSemibold';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Modify from '../../../components/atoms/Buttons/Modify';

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
          <TextSemibold text="Modify" fontSize={'$xl'} />
          {Array.from({length: 3}).map((_, index) => (
            <Modify key={index} />
          ))}
        </VStack>
        <Box height={height * 2.5} />
      </ScrollView>
    </ImageBackground>
  );
};

export default ContentManagementArticle;
