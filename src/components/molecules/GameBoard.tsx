import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';

const TicTacToeBoard = () => {
  const initialBoard = [
    ['5 + 5', '2 + 3', '9 + 3'],
    ['4 + 6', '2 + 8', '3 + 1'],
    ['6 + 2', '5 + 8', '7 + 3']
  ];

  const [selectedCells, setSelectedCells] = useState([]);
  const [highlightedCells, setHighlightedCells] = useState([]);

  const checkWinner = (newSelectedCells) => {
    const winningCombinations = [
      // Rows
      ['0,0', '0,1', '0,2'],
      ['1,0', '1,1', '1,2'],
      ['2,0', '2,1', '2,2'],
      // Columns
      ['0,0', '1,0', '2,0'],
      ['0,1', '1,1', '2,1'],
      ['0,2', '1,2', '2,2'],
      // Diagonals
      ['0,0', '1,1', '2,2'],
      ['0,2', '1,1', '2,0']
    ];

    for (const combination of winningCombinations) {
      if (combination.every(cell => newSelectedCells.includes(cell))) {
        return true;
      }
    }
    return false;
  };

  const handlePress = (rowIndex, cellIndex) => {
    const cellKey = `${rowIndex},${cellIndex}`;
    if (selectedCells.includes(cellKey) || highlightedCells.includes(cellKey)) return;

    const cellSum = initialBoard[rowIndex][cellIndex].split(' + ').reduce((sum, num) => sum + parseInt(num), 0);
    if (cellSum === 10) {
      const newSelectedCells = [...selectedCells, cellKey];
      setSelectedCells(newSelectedCells);
      if (checkWinner(newSelectedCells)) {
        Alert.alert('Good job you did it!');
      }
    } else {
      setHighlightedCells([...highlightedCells, cellKey]);
      setTimeout(() => {
        setHighlightedCells((prevHighlightedCells) => prevHighlightedCells.filter(cell => cell !== cellKey));
      }, 3000);
    }
  };

  return (
    <View style={styles.container}>
      {initialBoard.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, cellIndex) => (
            <Pressable
              key={cellIndex}
              style={[
                styles.cell,
                selectedCells.includes(`${rowIndex},${cellIndex}`) && styles.correctCell,
                highlightedCells.includes(`${rowIndex},${cellIndex}`) && !selectedCells.includes(`${rowIndex},${cellIndex}`) && styles.incorrectCell
              ]}
              onPress={() => handlePress(rowIndex, cellIndex)}>
              <Text style={styles.cellText}>{cell}</Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flex: 1,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    margin: 2,
  },
  correctCell: {
    backgroundColor: '#d2b48c', // Light brown for correct selection
  },
  incorrectCell: {
    backgroundColor: '#ffcccb', // Light red for incorrect selection
  },
  cellText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TicTacToeBoard;
