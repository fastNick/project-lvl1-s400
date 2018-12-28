import { engine } from '..';

import generateRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const upperLimit = 20;
const lowerLimit = 0;

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return number !== 1 && number !== 0;
};

const getQuestionAnswerPair = () => {
  const number = generateRandomNumber(lowerLimit, upperLimit);
  const question = number;
  const answer = isPrime(number) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  engine(getQuestionAnswerPair, gameDescription);
};
