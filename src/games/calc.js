import { implementGameLogic } from '..';

import generateRandomNumber from '../utils';

import { cons } from 'hexlet-pairs';

const gameDescription = '\nWhat is the result of the expression?';

const upperLimit = 20;
const lowerLimit = 0;

const operationsArray = ['+', '-', '*'];

const getQuestionAnswerPair = () => {
  const firstNumber = generateRandomNumber(lowerLimit, upperLimit);
  const mathSign = operationsArray[generateRandomNumber(0,
    operationsArray.length)];
  const secondNumber = generateRandomNumber(lowerLimit, upperLimit);
  switch (mathSign) {
    case '+':
      return cons(`Question: ${firstNumber} + ${secondNumber}`, firstNumber + secondNumber);
    case '-':
      return cons(`Question: ${firstNumber} - ${secondNumber}`, firstNumber - secondNumber);
    default:
      return cons(`Question: ${firstNumber} * ${secondNumber}`, firstNumber * secondNumber);
  }
};

const gameRunner = () => {
  implementGameLogic(getQuestionAnswerPair, gameDescription);
};


export default gameRunner;
