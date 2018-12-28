import { implementGameLogic } from '..';

import { cons } from 'hexlet-pairs';

import generateRandomNumber from '../utils';

const gameDescription = 'What number is missing in the progression?';

const sequenceLength = 10;

const lowerLimit = -20;
const upperLimit = 20;


const generateArithmeticProgression = (firstNumber, commonDifference) => {
  const numbersArray = [];
  for (let i = 0; i < sequenceLength; i += 1) {
    numbersArray.push(firstNumber + i * commonDifference);
  }
  return numbersArray;
};

const getQuestion = (numbersArray, indexInArray) => {
  let stringSequence = '';
  for (let i = 0; i < numbersArray.length; i += 1) {
    stringSequence += i === indexInArray ? '.. ' : ` ${numbersArray[i]} `;
  }
  return stringSequence.trim();
};

const getQuestionAnswerPair = () => {
  const firstNumber = generateRandomNumber(lowerLimit, upperLimit);
  const commonDifference = generateRandomNumber(lowerLimit, upperLimit);
  const array = generateArithmeticProgression(firstNumber, commonDifference);
  const hiddenElementPosition = generateRandomNumber(0, array.length);
  return cons(getQuestion(array, hiddenElementPosition), array[hiddenElementPosition]);
};

const gameRunner = () => {
  implementGameLogic(getQuestionAnswerPair, gameDescription);
};

export default gameRunner;
