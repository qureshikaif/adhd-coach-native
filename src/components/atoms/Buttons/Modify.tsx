import {Pressable, HStack, Image} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../Text/TextSemibold';
import ProfilePreview from '../../molecules/popup/ProfilePreview';
import AccountDeletion from '../../molecules/popup/AccountDeletion';

const CourseIcon = require('../../../assets/images/icons/course-dark.png');
// const EditIcon = require('../../../assets/images/icons/edit.png');
const RemoveIcon = require('../../../assets/images/icons/remove.png');

const Modify = () => {
  const [showView, setShowView] = React.useState(false);
  const [showRemove, setShowRemove] = React.useState(false);
  const refView = React.useRef(null);
  const refRemove = React.useRef(null);
  return (
    <>
      <HStack
        alignItems="center"
        bgColor="#D7E6ED"
        p={'$4'}
        borderColor="gray"
        borderWidth={0.5}
        rounded={'$3xl'}
        justifyContent="space-between">
        <HStack alignItems="center" space="lg">
          <Image source={CourseIcon} alt="User Icon" width={30} height={30} />
          <TextSemibold text="Voice Recognition" fontSize={'$xl'} />
        </HStack>
        <HStack alignItems="center" space="md">
          {/* <Pressable
            android_ripple={{color: 'gray', radius: 100}}
            onPress={() => setShowView(true)}>
            <Image
              source={EditIcon}
              alt="External Icon"
              width={35}
              height={35}
              resizeMode="contain"
            />
          </Pressable> */}
          <Pressable
            android_ripple={{color: 'red'}}
            onPress={() => setShowRemove(true)}>
            <Image
              source={RemoveIcon}
              alt="Remove Icon"
              width={35}
              height={35}
              resizeMode="contain"
            />
          </Pressable>
        </HStack>
      </HStack>
      <ProfilePreview
        showModal={showView}
        setShowModal={setShowView}
        ref={refView}
      />
      <AccountDeletion
        showModal={showRemove}
        setShowModal={setShowRemove}
        ref={refRemove}
      />
    </>
  );
};

export default Modify;
