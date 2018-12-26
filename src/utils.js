import { cons, car, cdr } from 'hexlet-pairs';

export const generateRandomNumber = (lowerLimit, upperLimit) => lowerLimit
+ Math.floor(Math.random() * (upperLimit - lowerLimit));

export const createQuestionAnswerPair = (question, answer) => cons(question, answer);

export const getQuestion = questionAnswerPair => car(questionAnswerPair);

export const getAnswer = questionAnswerPair => cdr(questionAnswerPair);
