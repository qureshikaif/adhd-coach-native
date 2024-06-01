import React from 'react';
import { View, TextInput, Text } from 'react-native';

const InputTable: React.FC = () => {
  const rows = 4;
  const columns = 4;

  return (
    <View style={{ flexDirection: 'column', borderWidth: 1, borderColor: '#000' }}>
      {[...Array(rows)].map((_, rowIndex) => (
        <View key={rowIndex} style={{ flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#000', padding: 10, width: 50 }}>
            <Text style={{ textAlign: 'center' }}>{rowIndex + 1}</Text>
          </View>
          {[...Array(columns - 1)].map((_, colIndex) => (
            <TextInput
              key={colIndex}
              style={{ borderWidth: 1, borderColor: '#000', padding: 10, flex: 1, textAlign: 'center' }}
              placeholder={`R${rowIndex + 1}C${colIndex + 2}`}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default InputTable;
