import { implementGameLogic } from '..';
import { cons } from 'hexlet-pairs';

import { generateRandomNumber, createQuestionAnswerPair } from '../utils';

const isNumberEven = number => number % 2 === 0;

const upperLimit = 20;
const lowerLimit = 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const generateQuestion = () => generateRandomNumber(lowerLimit, upperLimit);

export const gameRunner = () => {
  const questionFunc = () => cons(generateQuestion, null);
  const answerFunc = question => (isNumberEven(question) ? 'yes' : 'no');
  const questionAnswerPair = createQuestionAnswerPair(questionFunc, answerFunc);
  implementGameLogic(questionAnswerPair, gameDescription);
};

export default gameRunner;
