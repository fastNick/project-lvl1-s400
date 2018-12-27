import readlineSync from 'readline-sync';
import {
  getQuestion, getAnswer, getPreviousLexicalUnit, getNextLexicalUnit, isLexicalPair,
} from './utils';

const countOfRounds = 6;

const getLexicalUnit = lexicalPair => (typeof (lexicalPair) === 'function' ? lexicalPair() : lexicalPair);

const getQuestionSentence = (lexicalPair, initialString = '') => {
  if (lexicalPair === null) {
    return initialString;
  }
  if (!isLexicalPair(lexicalPair)) {
    return `${initialString} ${getLexicalUnit(lexicalPair)}`;
  }
  const lexicalUnit = getLexicalUnit(getPreviousLexicalUnit(lexicalPair));

  return getQuestionSentence(getNextLexicalUnit(lexicalPair), `${initialString} ${lexicalUnit}`);
};

export const implementGameLogic = (questionAnswerPair, gameDescription) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(gameDescription);
  const userName = readlineSync.question('\nMay I have your name?');
  console.log(`Hello, ${userName}!\n`);
  for (let i = 0; i < countOfRounds; i += 1) {
    const questionPair = getQuestion(questionAnswerPair)();
    const question = getQuestionSentence(questionPair);
    console.log(question);
    const correctAnswer = getAnswer(questionAnswerPair)(question);
    const userAnswer = readlineSync.question('Your answer: ');
    const isAnswerCorrect = String(userAnswer) === String(correctAnswer);
    if (!isAnswerCorrect) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(` \nCongratulations, ${userName} `);
};

export default implementGameLogic;
