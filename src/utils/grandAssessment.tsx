const Question1 = require('../assets/images/assessment/question-1-ga.png');
const Question2 = require('../assets/images/assessment/question-2-ga.png');
const Question3 = require('../assets/images/assessment/question-3-ga.png');
const Question4 = require('../assets/images/assessment/question-4-ga.png');
const Question5 = require('../assets/images/assessment/question-5-ga.png');
const Question6 = require('../assets/images/assessment/question-6-ga.png');
const Question7 = require('../assets/images/assessment/question-7-ga.png');
const Question8 = require('../assets/images/assessment/question-8-ga.png');
const Question9 = require('../assets/images/assessment/question-9-ga.png');
const Question10 = require('../assets/images/assessment/question-10-ga.png');

const Question3Option1 = require('../assets/images/assessment/question-3-1.png');
const Question3Option2 = require('../assets/images/assessment/question-3-2.png');
const Question3Option3 = require('../assets/images/assessment/question-3-3.png');
const Question3Option4 = require('../assets/images/assessment/question-3-4.png');

const Question7Option1 = require('../assets/images/assessment/question-7-1.png');
const Question7Option2 = require('../assets/images/assessment/question-7-2.png');
const Question7Option3 = require('../assets/images/assessment/question-7-3.png');
const Question7Option4 = require('../assets/images/assessment/question-7-4.png');

const Question8Option1 = require('../assets/images/assessment/question-8-1.png');
const Question8Option2 = require('../assets/images/assessment/question-8-2.png');
const Question8Option3 = require('../assets/images/assessment/question-8-3.png');
const Question8Option4 = require('../assets/images/assessment/question-8-4.png');

export const grandAssessment = [
  {
    id: 1,
    question: 'Hello, What is my name and what color am I?',
    questionImage: Question1,
    isOptionImage: false,
    optionImage: ['', '', '', ''],
    options: [
      'Circle - Blue',
      'Rectangle - Blue',
      'Triangle - Red',
      'Square - Blue',
    ],
  },
  {
    id: 2,
    question:
      'Match the alphabets with the object starting with the same starting alphabet.',
    questionImage: Question2,
    isOptionImage: false,
    optionImage: ['', '', '', ''],
    options: ['A', 'R', 'F', 'S'],
  },
  {
    id: 3,
    question: 'Calculate the answer.',
    questionImage: Question3,
    isOptionImage: true,
    optionImage: [
      Question3Option1,
      Question3Option2,
      Question3Option3,
      Question3Option4,
    ],
    options: ['', '', '', ''],
  },
  {
    id: 4,
    question: 'What is my color and what shape am I?',
    questionImage: Question4,
    isOptionImage: false,
    optionImage: ['', '', '', ''],
    options: [
      'Green - Circle',
      'Red - Triangle',
      'Blue - Octagon',
      'Yellow - Square',
    ],
  },
  {
    id: 5,
    question:
      'What will the resulting number be, if we add this same number with itself?',
    questionImage: Question5,
    isOptionImage: true,
    optionImage: [
      Question3Option1,
      Question3Option2,
      Question3Option3,
      Question3Option4,
    ],
    options: ['', '', '', ''],
  },
  {
    id: 6,
    question: 'What is my name?',
    questionImage: Question6,
    isOptionImage: false,
    optionImage: ['', '', '', ''],
    options: ['Triangle', 'Hexagon', 'Ellipse', 'Octagon'],
  },
  {
    id: 7,
    question: 'Match the object that starts with the given letter.',
    questionImage: Question7,
    isOptionImage: true,
    optionImage: [
      Question7Option1,
      Question7Option2,
      Question7Option3,
      Question7Option4,
    ],
    options: ['', '', ''],
  },
  {
    id: 8,
    question: 'Match the object which matches with the given color.',
    questionImage: Question8,
    isOptionImage: true,
    optionImage: [
      Question8Option1,
      Question8Option2,
      Question8Option3,
      Question8Option4,
    ],
    options: ['', '', ''],
  },
  {
    id: 9,
    question: 'Calculate the answer.',
    questionImage: Question9,
    isOptionImage: true,
    optionImage: [
      Question3Option1,
      Question3Option4,
      Question3Option3,
      Question3Option2,
    ],
    options: ['', '', '', ''],
  },
  {
    id: 10,
    question:
      'Match the alphabets with the object starting with the same starting alphabet.',
    questionImage: Question10,
    isOptionImage: false,
    optionImage: ['', '', '', ''],
    options: ['K', 'X', 'P', 'T'],
  },
];

export default grandAssessment;
