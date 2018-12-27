import {
  cons, car, cdr, isPair,
} from 'hexlet-pairs';

export const generateRandomNumber = (lowerLimit, upperLimit) => lowerLimit
+ Math.floor(Math.random() * (upperLimit - lowerLimit));

export const createQuestionAnswerPair = (question, answer) => cons(question, answer);

export const getQuestion = questionAnswerPair => car(questionAnswerPair);

export const getAnswer = questionAnswerPair => cdr(questionAnswerPair);

export const createLexicalPair = (previousLexicalUnit, nextLexicalUnit) => cons(previousLexicalUnit,
  nextLexicalUnit);

export const getPreviousLexicalUnit = lexicalPair => car(lexicalPair);

export const getNextLexicalUnit = lexicalPair => cdr(lexicalPair);

export const isLexicalPair = lexicalPair => isPair(lexicalPair);
