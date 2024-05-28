import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

interface Students {
  SR: string;
  Course: string;
  Teacher: string;
  Lesson: string;
}

const data: Students[] = [
  { SR: '1', Course: 'Maths', Teacher: 'Kaif Qureshi', Lesson: 'Problem Solving Sums, Number Memory, Match the Following' },
  { SR: '2', Course: 'English', Teacher: 'Ahmed Suhaib', Lesson: 'Visual Learning, Pronunciation, Match the Following' },
  { SR: '3', Course: 'Learning Activities', Teacher: 'Sana Zehra', Lesson: 'Color and Shape Recognition, Rock paper Scissors, Maze Puzzle' }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: '100%',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#B98CED',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    width: '100%',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderLeftWidth: 1,
    borderLeftColor: '#000',
    borderRightWidth: 1,
    borderRightColor: '#000',
    width: '100%',
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: '#000',
    flex: 1,
    width: 60,
    paddingHorizontal: 5,
  },
  cellInput: {
    fontSize: 14,
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: '#000',
    flex: 1,
    width: 60,
    paddingHorizontal: 5,
    color: '#000', // Set input field color to black
  },
  lastCell: {
    borderRightWidth: 0,
  },
});

const Table: React.FC = () => {
  const renderItem = ({ item }: { item: Students }) => (
    <View style={styles.tableRow}>
      <TextInput style={styles.cellInput} value={item.SR} />
      <TextInput style={styles.cellInput} value={item.Course} />
      <TextInput style={styles.cellInput} value={item.Teacher} />
      <TextInput style={[styles.cellInput, styles.lastCell]} value={item.Lesson} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>S.R</Text>
        <Text style={styles.headerText}>Course</Text>
        <Text style={styles.headerText}>Teacher</Text>
        <Text style={[styles.headerText, styles.lastCell]}>Lesson</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.SR}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Table;
