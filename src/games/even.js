import { implementGameLogic } from '..';
import { cons } from 'hexlet-pairs';

import generateRandomNumber from '../utils';

const isNumberEven = number => number % 2 === 0;

const upperLimit = 20;
const lowerLimit = 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const getQuestionAnswerPair = () => {
  const question = generateRandomNumber(lowerLimit, upperLimit);
  const answer = isNumberEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const gameRunner = () => {
  implementGameLogic(getQuestionAnswerPair, gameDescription);
};

export default gameRunner;
