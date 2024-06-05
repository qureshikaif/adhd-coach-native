import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import SideButton from '../../components/atoms/Buttons/SideButton';
import StatusBarParent from '../../components/molecules/StatusBarParent';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading';
import {Article} from '../../types/Article';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import TextSemibold from '../../components/atoms/Text/TextSemibold';

const BackgroundImage = require('../../assets/images/parent-main-bg.png');

type NavigationType = {
  ParentArticle: {article: Article};
};

const ChildProgressList = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const {data: articles, isLoading} = useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://13.127.65.203:8080/admin/get-articles',
      );
      return data;
    },
  });

  if (isLoading) {
    return <Loading bgImage={BackgroundImage} />;
  }
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarParent text="Child Progress" />

        <ScrollView paddingHorizontal={'$5'}>
          <Box height={'$12'} />
          <TextSemibold text="Teacher's Remarks" fontSize={'$xl'} />
          <VStack space={'2xl'}>
            {articles.map((article: Article, index: number) => (
              <SideButton
                key={index}
                content={article}
                onPress={() => navigation.navigate('ParentArticle', {article})}
              />
            ))}
          </VStack>
          <Box height={'$8'} />
          <TextSemibold text="Doctor's Remarks" fontSize={'$xl'} />
          <VStack space={'2xl'}>
            {articles.map((article: Article, index: number) => (
              <SideButton
                key={index}
                content={article}
                onPress={() => navigation.navigate('ParentArticle', {article})}
              />
            ))}
          </VStack>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ChildProgressList;
