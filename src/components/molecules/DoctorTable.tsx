import React from 'react';
import { View, Text,FlatList,StyleSheet } from 'react-native';


interface Patient {
  Time: string;
  Name: string;
  Age: number;
  Reason: string;
  Notes: string;
  Username: string;
}

const data: Patient[] = [
  { Time: '1:30', Name: 'Kaif', Age: 17, Reason: 'ADHD', Notes: 'Medical', Username: 'Kaif123' },
  { Time: '2:30', Name: 'Abu Bakar', Age: 17, Reason: 'ADHD', Notes: 'Medical', Username: 'Abu911' },
  { Time: '3:30', Name: 'Sana', Age: 17, Reason: 'ADHD', Notes: 'Medical', Username: 'Sana011' },
  { Time: '4:30', Name: 'Aleena', Age: 17, Reason: 'ADHD', Notes: 'Medical', Username: 'Aleena332' },
  { Time: '6:30', Name: 'Ahmed', Age: 17, Reason: 'ADHD', Notes: 'Medical', Username: 'Ahmed04' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerTopBar: {
    backgroundColor: '#EAC5C5',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
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
    backgroundColor: '#E0E0E0',
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
    elevation: 2,
  },
  alternateRow: {
    backgroundColor: '#F9F9F9',
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
  const renderItem = ({ item, index }: { item: Patient; index: number }) => (
    <View style={[styles.row, index % 2 === 0 ? styles.alternateRow : null]}>
      <Text style={styles.cell}>{item.Time}</Text>
      <Text style={styles.cell}>{item.Name}</Text>
      <Text style={styles.cell}>{item.Reason}</Text>
      <Text style={styles.cell}>{item.Notes}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerTopBar}>
        <Text style={styles.headerTopBarText}>Patients</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.heading}>Time</Text>
        <Text style={styles.heading}>Name</Text>
        <Text style={styles.heading}>Reason</Text>
        <Text style={styles.heading}>Notes</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.Time}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Table;
