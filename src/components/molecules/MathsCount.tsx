import { View, VStack, HStack, Pressable, Box } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import TextSemibold from '../atoms/Text/TextSemibold';

const MathsCount = () => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const numberSpellings: { [key: string]: string } = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero',
  };

  return (
    <View height={'$full'}>
      <VStack space="lg">
        <HStack justifyContent="space-between">
          <Pressable
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center"
            onPress={() => setSelectedNumber(1)}>
            <TextSemibold text="1" fontSize={'$2xl'} />
          </Pressable>
          <Pressable
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center"
            onPress={() => setSelectedNumber(2)}>
            <TextSemibold text="2" fontSize={'$2xl'} />
          </Pressable>

          <Pressable
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center"
            onPress={() => setSelectedNumber(3)}>
            <TextSemibold text="3" fontSize={'$2xl'} />
          </Pressable>

          <Pressable
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center"
            onPress={() => setSelectedNumber(4)}>
            <TextSemibold text="4" fontSize={'$2xl'} />
          </Pressable>
        </HStack>
        <HStack justifyContent="space-between">
          <Pressable
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center"
            onPress={() => setSelectedNumber(5)}>
            <TextSemibold text="5" fontSize={'$2xl'} />
          </Pressable>

          <Pressable
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center"
            onPress={() => setSelectedNumber(6)}>
            <TextSemibold text="6" fontSize={'$2xl'} />
          </Pressable>

          <Pressable
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center"
            onPress={() => setSelectedNumber(7)}>
            <TextSemibold text="7" fontSize={'$2xl'} />
          </Pressable>

          <Pressable
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center"
            onPress={() => setSelectedNumber(8)}>
            <TextSemibold text="8" fontSize={'$2xl'} />
          </Pressable>
        </HStack>

        <HStack space="3xl" justifyContent="center">
          <Pressable
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center"
            onPress={() => setSelectedNumber(9)}>
            <TextSemibold text="9" fontSize={'$2xl'} />
          </Pressable>

          <Pressable
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            width={65}
            alignItems="center"
            justifyContent="center"
            onPress={() => setSelectedNumber(0)}>
            <TextSemibold text="0" fontSize={'$2xl'} />
          </Pressable>
        </HStack>

        {selectedNumber !== null && (
          <Box
            bgColor="#FFA360"
            height={65}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            alignItems="center"
            justifyContent="center"
            marginTop={'$5'}
          >
            <TextSemibold text={`${selectedNumber} = ${numberSpellings[selectedNumber.toString()]}`} fontSize={'$2xl'} />
          </Box>
        )}
      </VStack>
    </View>
  );
};

export default MathsCount;
