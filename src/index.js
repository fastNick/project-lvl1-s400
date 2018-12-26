import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './utils';

const countOfRounds = 6;

export const introduceUser = () => {
  const userName = readlineSync.question('\nMay I have your name?');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const outputForWrongAnswer = (userAnswer, correctAnswer, userName) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n`
+ `Let's try again, ${userName}!`);

export const implementGameLogic = (questionAnswerPair, gameDescription) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(gameDescription);
  const userName = introduceUser();
  for (let i = 0; i < countOfRounds; i += 1) {
    const question = getQuestion(questionAnswerPair)();
    const correctAnswer = getAnswer(questionAnswerPair)(question);
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    const isAnswerCorrect = String(userAnswer) === String(correctAnswer);
    if (!isAnswerCorrect) {
      outputForWrongAnswer(userAnswer, correctAnswer, userName);
      return;
    }
    console.log('Correct!');
  }
  console.log(` \nCongratulations, ${userName} `);
};
