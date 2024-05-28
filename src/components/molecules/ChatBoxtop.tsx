import React from 'react';
import { ScrollView, View, Image, Text, Pressable } from 'react-native';

const CircleRowScrollView: React.FC = () => {
  const handlePress = (name: string) => {
    console.log(`${name} pressed`);
  };

  const circles = [
    { name: 'Kaif', image: require('../../assets/images/icons/TeacherPic.png') },
    { name: 'Sana', image: require('../../assets/images/icons/TeacherPic.png') },
    { name: 'Abubakar', image: require('../../assets/images/icons/TeacherPic.png') },
    { name: 'Ahmed', image: require('../../assets/images/icons/TeacherPic.png') },
  ];

  return (
    <ScrollView horizontal>
      <View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 15 }}>
        {circles.map((circle, index) => (
          <Pressable
            key={index}
            style={{ marginRight: 20 }}
            onPress={() => handlePress(circle.name)}
          >
            {({ pressed }) => (
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={circle.image}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    opacity: pressed ? 0.5 : 1,
                  }}
                />
                <Text style={{ marginTop: 8, color: 'black' }}>{circle.name}</Text>
              </View>
            )}
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default CircleRowScrollView;
