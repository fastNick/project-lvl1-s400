import readlineSync from 'readline-sync';

import { car, cdr } from 'hexlet-pairs';

const countOfRounds = 6;

export const implementGameLogic = (getQuestionAnswerPair, gameDescription) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(gameDescription);
  const userName = readlineSync.question('\nMay I have your name?');
  console.log(`Hello, ${userName}!\n`);
  for (let i = 0; i < countOfRounds; i += 1) {
    const questionAnswerPair = getQuestionAnswerPair();
    const question = car(questionAnswerPair);
    console.log(question);
    const correctAnswer = cdr(questionAnswerPair);
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
