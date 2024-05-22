import React from 'react';
import {Center, Image, Pressable, VStack} from '@gluestack-ui/themed';
import {ButtonProps} from '../../../types/ButtonProps';
import TextSemibold from '../Text/TextSemibold';
import {ModalProps} from '../../../types/ModalProps';
import AddDoctor from '../../molecules/popup/AddDoctor';

const PlusIcon = require('../../../assets/images/icons/plus-dark.png');

interface AddNewButtonProps extends ButtonProps {
  text: string;
  ModalComponent?: React.FC<ModalProps>;
}

const AddNewButton = ({
  buttonProps,
  imageProps,
  text,
  onPress,
  ModalComponent,
}: AddNewButtonProps) => {
  const [showModal, setShowModal] = React.useState(false);
  const ref = React.useRef(null);

  return (
    <>
      <Pressable
        android_ripple={{color: 'gray'}}
        onPress={onPress ? onPress : () => setShowModal(true)}
        {...buttonProps}
        bgColor="#D7E6ED"
        p={'$5'}
        // ref={ref}
        hardShadow="3"
        softShadow="4"
        rounded={'$lg'}>
        <VStack>
          <Center>
            <TextSemibold text={text} fontSize={'$2xl'} />
            <Image
              source={PlusIcon}
              alt={text}
              {...imageProps}
              width={50}
              height={50}
            />
          </Center>
        </VStack>
      </Pressable>
      <AddDoctor showModal={showModal} setShowModal={setShowModal} ref={ref} />
      {/* {ModalComponent && (
        <ModalComponent
          showModal={showModal}
          setShowModal={setShowModal}
          ref={ref}
        />
      )} */}
    </>
  );
};

export default AddNewButton;
