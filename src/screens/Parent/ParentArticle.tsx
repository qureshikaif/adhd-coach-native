import {View, ImageBackground, ScrollView,Text, Box, Center, Image, HStack, Input, InputField, Button,} from '@gluestack-ui/themed';
import React from 'react';

import TextBold from '../../components/atoms/Text/TextBold';
import TextSemibold from '../../components/atoms/Text/TextSemibold';

import { VStack } from '@gluestack-ui/themed';


const BackgroundImage = require('../../assets/images/ParentArticle.png');




const ParentArticle= () => {
  //   const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
    <ImageBackground source={BackgroundImage} minHeight={'$full'}>
    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
  <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>Parenting Style and Effect on Children</Text>
  <Box height={'$5'} />   
</View>
<ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}>
  <View style={{ marginBottom: 20 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginBottom: 5 }}>Authoritative Parenting:</Text>
    <Text style={{ fontSize: 16, color: 'black', paddingHorizontal: 10 }}>
      Effect: Improved self-regulation and behavior, better social skills, and academic performance.
    </Text>
  </View>

  <View style={{ marginBottom: 20 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginBottom: 5 }}>Authoritarian Parenting:</Text>
    <Text style={{ fontSize: 16, color: 'black', paddingHorizontal: 10 }}>
      Effect: Low self-esteem, compliance issues, more oppositional behavior, and difficulty regulating emotions.
    </Text>
  </View>

  <View style={{ marginBottom: 20 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginBottom: 5 }}>Permissive Parenting:</Text>
    <Text style={{ fontSize: 16, color: 'black', paddingHorizontal: 10 }}>
      Effect: Struggle with impulse control, difficulty following rules, and lack of self-discipline skills.
    </Text>
  </View>

  <View style={{ marginBottom: 20 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginBottom: 5 }}>Neglectful/Uninvolved Parenting:</Text>
    <Text style={{ fontSize: 16, color: 'black', paddingHorizontal: 10 }}>
      Effect: Worsened symptoms and behavioral problems, low self-esteem, struggle with emotional regulation, and social interactions.
    </Text>
  </View>
</ScrollView>

    </ImageBackground>

  </View>
);
};

export default ParentArticle;
