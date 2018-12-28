import { implementGameLogic } from '..';

import generateRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const upperLimit = 20;
const lowerLimit = 0;

const gcdRec = (firstNumber, secondNumber) => {
  if (secondNumber) {
    return gcdRec(secondNumber, firstNumber % secondNumber);
  }
  return Math.abs(firstNumber);
};

const getQuestionAnswerPair = () => {
  const firstNumber = generateRandomNumber(lowerLimit, upperLimit);
  const secondNumber = generateRandomNumber(lowerLimit, upperLimit);
  const answer = gcdRec(firstNumber, secondNumber);
  return cons(`${firstNumber} ${secondNumber}`, answer);
};

const gameRunner = () => {
  implementGameLogic(getQuestionAnswerPair, gameDescription);
};

export default gameRunner;
