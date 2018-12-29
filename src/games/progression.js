import engine from '..';

import { cons } from 'hexlet-pairs';

import generateRandomNumber from '../utils';

const gameDescription = 'What number is missing in the progression?';

const sequenceLength = 10;

const lowerLimit = -20;
const upperLimit = 20;


const generateArithmeticProgression = (length) => {
  const firstNumber = generateRandomNumber(lowerLimit, upperLimit);
  const commonDifference = generateRandomNumber(lowerLimit, upperLimit);
  const numbersArray = [];
  for (let i = 0; i < length; i += 1) {
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
  const arithmeticProgression = generateArithmeticProgression(sequenceLength);
  const hiddenElementPosition = generateRandomNumber(0, arithmeticProgression.length);
  const question = getQuestion(arithmeticProgression, hiddenElementPosition);
  const answer = String(arithmeticProgression[hiddenElementPosition]);
  return cons(question, answer);
};

export default () => {
  engine(getQuestionAnswerPair, gameDescription);
};
