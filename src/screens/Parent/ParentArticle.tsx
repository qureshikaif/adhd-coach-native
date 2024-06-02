import {View, ImageBackground, ScrollView, Box} from '@gluestack-ui/themed';
import React from 'react';

import TextBold from '../../components/atoms/Text/TextBold';
import TextSemibold from '../../components/atoms/Text/TextSemibold';

import TextRegular from '../../components/atoms/Text/TextRegular';
import {RouteProp} from '@react-navigation/native';
import {Article} from '../../types/Article';

const BackgroundImage = require('../../assets/images/ParentArticle.png');

type NavigationType = {
  ParentArticle: {article: Article};
};

type RouteType = RouteProp<NavigationType, 'ParentArticle'>;

const ParentArticle = ({route}: {route: RouteType}) => {
  const {article} = route.params;
  //   const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <ScrollView paddingHorizontal={'$6'}>
          <Box height={'$10'} />
          <TextBold text={article.title} fontSize={'$3xl'} />
          <TextSemibold text={article.subtitle} fontSize={'$2xl'} />
          <Box height={'$3'} />
          <TextRegular
            text={article.tags}
            fontSize={'$sm'}
            fontStyle="italic"
          />
          <Box height={'$6'} />
          <TextRegular text={article.content} fontSize={'$md'} />
          <Box height={'$6'} />
          <TextRegular text={article.summary} fontSize={'$md'} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ParentArticle;
