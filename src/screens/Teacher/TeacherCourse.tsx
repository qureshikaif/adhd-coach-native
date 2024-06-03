import {View, ImageBackground, ScrollView, Box} from '@gluestack-ui/themed';
import React from 'react';
import AddNewButton from '../../components/atoms/Buttons/AddNewButton';
import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import AddNewLecture from '../../components/molecules/popup/AddNewLecture';

const BackgroundImage = require('../../assets/images/teachercourse.png');

type NavigationType = {
  AddQuiz: undefined;
};

const TeacherCourse = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const [showModal, setShowModal] = React.useState(false);
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarTeacher text="Course Plan" />
        <Box height={'$8'} />
        <ScrollView paddingHorizontal={'$4'}>
          <AddNewButton
            text="Add a new lecture"
            onPress={() => setShowModal(true)}
            bgColor="#F0CCCC"
          />
          <Box height={'$8'} />
          {/* <Center>
            <TextSemibold text="OR" fontSize={'$2xl'} />
          </Center> */}

          <AddNewButton
            text="Add Quiz"
            bgColor="#F0CCCC"
            onPress={() => navigation.navigate('AddQuiz')}
          />
          <Box height={'$8'} />
        </ScrollView>
      </ImageBackground>
      <AddNewLecture showModal={showModal} setShowModal={setShowModal} />
    </View>
  );
};

export default TeacherCourse;
