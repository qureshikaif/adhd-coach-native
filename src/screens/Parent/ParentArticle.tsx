import {View, ImageBackground, ScrollView, Box} from '@gluestack-ui/themed';
import React from 'react';

import TextBold from '../../components/atoms/Text/TextBold';
import TextSemibold from '../../components/atoms/Text/TextSemibold';

import StatusBarParent from '../../components/molecules/StatusBarParent';
import TextRegular from '../../components/atoms/Text/TextRegular';

const BackgroundImage = require('../../assets/images/ParentArticle.png');

const ParentArticle = () => {
  //   const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarParent text="Articles" />
        <ScrollView paddingHorizontal={'$6'}>
          <Box height={'$10'} />
          <TextBold
            text={'Parenting Style and Effect on Children'}
            fontSize={'$3xl'}
          />
          <TextSemibold text="Subtitle here" fontSize={'$2xl'} />
          <Box height={'$3'} />
          <TextRegular text="Tags" fontSize={'$sm'} />
          <Box height={'$6'} />
          <TextRegular text="Content" fontSize={'$md'} />
          <Box height={'$6'} />
          <TextRegular text="Summary" fontSize={'$md'} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ParentArticle;
