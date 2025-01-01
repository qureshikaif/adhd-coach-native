import {ImageBackground, ScrollView, Box, VStack} from '@gluestack-ui/themed';
import React from 'react';
import AddNewButton from '../../../components/atoms/Buttons/AddNewButton';
import TextSemibold from '../../../components/atoms/Text/TextSemibold';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Modify from '../../../components/atoms/Buttons/Modify';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import Loading from '../../Loading';
import {Article} from '../../../types/Article';

const BackgroundImage = require('../../../assets/images/admin-content-bg.png');

type NavigationType = {
  AddNewArticle: undefined;
};

const ContentManagementArticle = () => {
  const height = useBottomTabBarHeight();
  const navigation = useNavigation<NavigationProp<NavigationType>>();

  const {data: articles, isLoading} = useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      const {data} = await axios.get(
        'https://adhd-coach-backend.vercel.app/admin/get-articles',
      );
      return data;
    },
  });

  if (isLoading) {
    return <Loading bgImage={BackgroundImage} />;
  }

  return (
    <ImageBackground source={BackgroundImage} minHeight={'$full'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space="xs">
          <AddNewButton
            text="Add a new article"
            onPress={() => navigation.navigate('AddNewArticle')}
          />
          <TextSemibold text="Modify" fontSize={'$xl'} />
          {articles.map((article: Article, index: number) => (
            <Modify key={index} content={article} />
          ))}
        </VStack>
        <Box height={height * 2.5} />
      </ScrollView>
    </ImageBackground>
  );
};

export default ContentManagementArticle;
