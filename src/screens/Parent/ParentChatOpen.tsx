import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';


const ChatScreen = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <Text style={{ padding: 10, marginBottom: 5, borderRadius: 10, backgroundColor: '#fff' }}>
            {item}
          </Text>
        )}
        keyExtractor={(item) => item}
        inverted
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 10 }}>
        <TextInput
          style={{ flex: 1, fontSize: 16, paddingHorizontal: 10, borderWidth: 1, borderColor: 'black', borderRadius: 5 }}
          placeholder="Type your message..."
          onChangeText={setNewMessage}
          value={newMessage}
        />
        <TouchableOpacity style={{ marginLeft: 10 }}>
        
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 10 }}>
         
        </TouchableOpacity>
        <TouchableOpacity onPress={sendMessage} style={{ marginLeft: 10 }}>
          
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
