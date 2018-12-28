import { engine } from '..';

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
  let question;
  let answer;
  switch (mathSign) {
    case '+':
      question = `Question: ${firstNumber} + ${secondNumber}`;
      answer = firstNumber + secondNumber;
      break;
    case '-':
      question = `Question: ${firstNumber} - ${secondNumber}`;
      answer = firstNumber - secondNumber;
      break;
    default:
      question = `Question: ${firstNumber} * ${secondNumber}`;
      answer = firstNumber * secondNumber;
  }
  return cons(question, String(answer));
};

export default () => {
  engine(getQuestionAnswerPair, gameDescription);
};
