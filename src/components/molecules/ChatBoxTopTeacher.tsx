import React from 'react';
import { ScrollView, View, Image, Text, Pressable } from 'react-native';

const TeacherTop: React.FC = () => {
  const handlePress = (name: string) => {
    console.log(`${name} pressed`);
  };

  const circles = [
    { name: 'Ali P', image: require('../../assets/images/icons/AliParents.png') },
    { name: 'Abdullah P', image: require('../../assets/images/icons/AbdullahParents.png') },
    { name: 'Junaid P', image: require('../../assets/images/icons/JunaidParents.png') },
    { name: 'Hassan P', image: require('../../assets/images/icons/HassanParents.png') },
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
                    width: 50 * 1.25, 
                    height: 50 * 1.25, 
                    borderRadius: (50 * 1.25) / 2, 
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

export default TeacherTop;
