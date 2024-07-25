import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, Alert, Animated } from 'react-native';

const generateBoard = (winSum) => {
  const generateEquation = (sum) => {
    const num1 = Math.floor(Math.random() * (sum - 1)) + 1;
    const num2 = sum - num1;
    return `${num1} + ${num2}`;
  };

  const generateRandomEquation = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return `${num1} + ${num2}`;
  };

  const board = [
    [generateRandomEquation(), generateRandomEquation(), generateRandomEquation()],
    [generateRandomEquation(), generateRandomEquation(), generateRandomEquation()],
    [generateRandomEquation(), generateRandomEquation(), generateRandomEquation()],
  ];

  const winCombination = [
    ['0,0', '0,1', '0,2'],
    ['1,0', '1,1', '1,2'],
    ['2,0', '2,1', '2,2'],
    ['0,0', '1,0', '2,0'],
    ['0,1', '1,1', '2,1'],
    ['0,2', '1,2', '2,2'],
    ['0,0', '1,1', '2,2'],
    ['0,2', '1,1', '2,0'],
  ];

  const chosenCombination = winCombination[Math.floor(Math.random() * winCombination.length)];

  chosenCombination.forEach((cell) => {
    const [row, col] = cell.split(',').map(Number);
    board[row][col] = generateEquation(winSum);
  });

  return board;
};

const TicTacToeBoard = ({ winSum }) => {
  const [initialBoard, setInitialBoard] = useState(generateBoard(winSum));
  const [selectedCells, setSelectedCells] = useState([]);
  const [highlightedCells, setHighlightedCells] = useState([]);
  const [currentWinSum, setCurrentWinSum] = useState(winSum);

  const animatedValues = useRef(initialBoard.map(row => row.map(() => new Animated.Value(0)))).current;

  useEffect(() => {
    setSelectedCells([]);
    setHighlightedCells([]);
    setInitialBoard(generateBoard(winSum));
    setCurrentWinSum(winSum);
  }, [winSum]);

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
      ['0,2', '1,1', '2,0'],
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
    if (cellSum === currentWinSum) {
      const newSelectedCells = [...selectedCells, cellKey];
      setSelectedCells(newSelectedCells);
      animateCell(rowIndex, cellIndex, true);
      if (checkWinner(newSelectedCells)) {
        Alert.alert('Good job you did it!');
      }
    } else {
      setHighlightedCells([...highlightedCells, cellKey]);
      animateCell(rowIndex, cellIndex, false);
      setTimeout(() => {
        setHighlightedCells((prevHighlightedCells) => prevHighlightedCells.filter(cell => cell !== cellKey));
        resetAnimation(rowIndex, cellIndex);
      }, 3000);
    }
  };

  const animateCell = (rowIndex, cellIndex, isCorrect) => {
    Animated.timing(animatedValues[rowIndex][cellIndex], {
      toValue: isCorrect ? 1 : -1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const resetAnimation = (rowIndex, cellIndex) => {
    Animated.timing(animatedValues[rowIndex][cellIndex], {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      {initialBoard.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, cellIndex) => (
            <Pressable
              key={cellIndex}
              style={styles.cell}
              onPress={() => handlePress(rowIndex, cellIndex)}
            >
              <Animated.View
                style={[
                  styles.animatedCell,
                  {
                    backgroundColor: animatedValues[rowIndex][cellIndex].interpolate({
                      inputRange: [-1, 0, 1],
                      outputRange: ['#ffcccb', '#fff', '#d2b48c'],
                    }),
                  },
                ]}
              >
                <Text style={styles.cellText}>{cell}</Text>
              </Animated.View>
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
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  animatedCell: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },
  cellText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TicTacToeBoard;
