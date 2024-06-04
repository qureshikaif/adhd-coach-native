import {View, ImageBackground, ScrollView, Box} from '@gluestack-ui/themed';
import React from 'react';
import AddNewButton from '../../components/atoms/Buttons/AddNewButton';
import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import AddNewLecture from '../../components/molecules/popup/AddNewLecture';

const BackgroundImage = require('../../assets/images/teachercourse.png');

type NavigationType = {
  TeacherCourse: {course: any};
  AddQuiz: {courseId: any};
};

type RouteType = RouteProp<NavigationType, 'TeacherCourse'>;

const TeacherCourse = ({route}: {route: RouteType}) => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const [showModal, setShowModal] = React.useState(false);
  const {course} = route.params;

  console.log('Course', course);
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarTeacher text="Manage Course" />
        <Box height={'$8'} />
        <ScrollView paddingHorizontal={'$4'}>
          <AddNewButton
            text="Add a new lecture"
            onPress={() => setShowModal(true)}
            bgColor="#F0CCCC"
          />
          <Box height={'$8'} />
          <AddNewButton
            text="Add Quiz"
            bgColor="#F0CCCC"
            onPress={() =>
              navigation.navigate('AddQuiz', {courseId: course.id})
            }
          />
          <Box height={'$8'} />
        </ScrollView>
      </ImageBackground>
      <AddNewLecture
        courseId={course.id}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </View>
  );
};

export default TeacherCourse;
