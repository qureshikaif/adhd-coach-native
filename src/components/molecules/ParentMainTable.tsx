import React from 'react';
import { View, Text,FlatList,StyleSheet } from 'react-native';



interface Students {
  SR: string;
  Course: string;
  Teacher: string;
  Lesson: string;
  Username: string;
}

const data: Students[] = [
  { SR: '1', Course: 'Maths', Teacher: 'Kaif Qureshi', Lesson: 'Counting', Username: 'Kaif123' },
  { SR: '2', Course: 'English', Teacher: 'Ahmed Suhaib', Lesson: 'Alphabets', Username: 'Ahmed123'},
  { SR: '3', Course: 'Activity', Teacher: 'Sana   Zehra', Lesson: 'Make A Face', Username: 'Teacher911'}

];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerTopBar: {
    backgroundColor: '#6953F5',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTopBarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#B98CED',
    borderRadius: 8,
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
    elevation: 1,
  },
  alternateRow: {
    backgroundColor: '#fff',
  },
  cell: {
    fontSize: 15,
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    marginRight: 5,
  },
});

const Table: React.FC = () => {
  const renderItem = ({ item, index }: { item: Students; index: number }) => (
    <View style={[styles.row, index % 2 === 0 ? styles.alternateRow : null]}>
      <Text style={styles.cell}>{item.SR}</Text>
      <Text style={styles.cell}>{item.Course}</Text>
      <Text style={styles.cell}>{item.Teacher}</Text>
      <Text style={styles.cell}>{item.Lesson}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerTopBar}>
        <Text style={styles.headerTopBarText}>Courses Enrolled</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.heading}>SR</Text>
        <Text style={styles.heading}>Course</Text>
        <Text style={styles.heading}>Teacher</Text>
        <Text style={styles.heading}>Lesson</Text>
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
