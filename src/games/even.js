import { implementGameLogic } from '..';

import { generateRandomNumber, createQuestionAnswerPair } from '../utils';

const isNumberEven = number => number % 2 === 0;

const upperLimit = 20;
const lowerLimit = 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';


export const gameRunner = () => {
  const questionFunc = () => generateRandomNumber(lowerLimit, upperLimit);
  const answerFunc = question => (isNumberEven(question) ? 'yes' : 'no');
  const questionAnswerPair = createQuestionAnswerPair(questionFunc, answerFunc);
  implementGameLogic(questionAnswerPair, gameDescription);
};

export default gameRunner;
