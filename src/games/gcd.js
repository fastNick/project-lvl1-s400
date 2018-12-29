import engine from '..';

import generateRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const upperLimit = 20;
const lowerLimit = 0;

const getGcdRecursively = (firstNumber, secondNumber) => {
  if (secondNumber) {
    return getGcdRecursively(secondNumber, firstNumber % secondNumber);
  }
  return Math.abs(firstNumber);
};

const getQuestionAnswerPair = () => {
  const firstNumber = generateRandomNumber(lowerLimit, upperLimit);
  const secondNumber = generateRandomNumber(lowerLimit, upperLimit);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcdRecursively(firstNumber, secondNumber);
  return cons(question, String(answer));
};

export default () => {
  engine(getQuestionAnswerPair, gameDescription);
};
