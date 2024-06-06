import { Bold } from 'lucide-react-native';
import React from 'react';
import { View, Text,FlatList,StyleSheet } from 'react-native';

interface Students {
  SR: string;
  Course: string;
  Teacher: string;
  Lesson: string;
  Username: string;
  Grade : string;
  Marks : string;
  Attempt: number;
}

const data: Students[] = [
  { SR: '1', Course: 'Maths', Teacher: 'Kaif Qureshi', Lesson: 'Counting', Username: 'Kaif123', Grade: 'A+', Marks : '5/5', Attempt : 5 },
  { SR: '2', Course: 'English', Teacher: 'Ahmed Suhaib', Lesson: 'Alphabets', Username: 'Ahmed123' , Grade: 'B+', Marks : '5/5', Attempt : 2},
  { SR: '3', Course: 'Activity', Teacher: 'Sana Zehra', Lesson: 'Make A Face', Username: 'Teacher911' , Grade: 'A+', Marks : '5/5' , Attempt : 1},
  
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 1,
  },
  headerTopBar: {
    backgroundColor: '#FF66E0',
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
    backgroundColor: 'pink',
    borderRadius: 8,
    marginBottom: 10,
  },
  heading: {
    fontSize: 12,
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
    elevation: 2,
  },
  alternateRow: {
    backgroundColor: '#fff',
  },
  cell: {
    fontSize: 11,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'space-between',
    fontWeight: '900'
  },
  icon: {
    marginRight: 5,
  }});

const ChildReportTable: React.FC = () => {
  const renderItem = ({ item, index }: { item: Students; index: number }) => (
    <View style={[styles.row, index % 2 === 0 ? styles.alternateRow : null]}>
      <Text style={styles.cell}>{item.SR}</Text>
      <Text style={styles.cell}>{item.Course}</Text>
      <Text style={styles.cell}>{item.Lesson}</Text>
      <Text style={styles.cell}>{item.Attempt}</Text>
      <Text style={styles.cell}>{item.Marks}</Text>
      <Text style={styles.cell}>{item.Grade}</Text>
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
        <Text style={styles.heading}>Lesson</Text>
        <Text style={styles.heading}>Attempt</Text>
        <Text style={styles.heading}>Marks</Text>
        <Text style={styles.heading}>Grade</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.SR}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ChildReportTable;
