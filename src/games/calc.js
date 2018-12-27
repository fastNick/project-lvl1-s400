import { implementGameLogic } from '..';

import { generateRandomNumber, createQuestionAnswerPair, createLexicalPair } from '../utils';

const gameDescription = '\nWhat is the result of the expression?';

const upperLimit = 20;
const lowerLimit = 0;

const operationsArray = ['+', '-', '*'];

const questionRegex = /Question:\s+(\d+)\s+([+\-*])\s+(\d+)/i;

const generateMathSign = () => operationsArray[generateRandomNumber(0,
  operationsArray.length)];

const generateFirstNumber = () => generateRandomNumber(lowerLimit, upperLimit);
const generateSecondNumber = () => generateRandomNumber(lowerLimit, upperLimit);

const questionPair = createLexicalPair('Question:',
  createLexicalPair(generateFirstNumber,
    createLexicalPair(generateMathSign, generateSecondNumber)));

const getAnswer = (questionSentence) => {
  const matchedQuestionReg = questionSentence.match(questionRegex);
  const firstNumber = Number(matchedQuestionReg[1]);
  const mathSign = matchedQuestionReg[2];
  const secondNumber = Number(matchedQuestionReg[3]);
  let mathResult;
  switch (mathSign) {
    case '+':
      mathResult = firstNumber + secondNumber;
      break;
    case '-':
      mathResult = firstNumber - secondNumber;
      break;
    default:
      mathResult = firstNumber * secondNumber;
  }
  return mathResult;
};

export const gameRunner = () => {
  const questionFunc = () => questionPair;
  const answerFunc = question => getAnswer(question);
  const questionAnswerPair = createQuestionAnswerPair(questionFunc, answerFunc);
  implementGameLogic(questionAnswerPair, gameDescription);
};


export default gameRunner;
