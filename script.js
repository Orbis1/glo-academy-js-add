'use strict';

const START = 1, END = 100;
const TRIES_COUNT = 5;
let playAgain = true;

const getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() *
   (max - min + 1)) + min; //Максимум и минимум включаются
};

const guesser = function(ans, num, count) {

  if (count === 0) return {
    msg: `${count} tries left. Do you want play again?`,
    gameover: true,
  };

  switch (true) {
  case ans === null:
    return { msg: 'Game Over', gameover: true };
  case isNaN(+ans):
    return { msg: 'Enter the number, please', gameover: false };
  case +ans > END || +ans < START:
    return {
      msg: `The number must be in the range from ${START} to ${END}`,
      gameover: false,
    };
  case +ans > num:
    return {
      msg: `The secret number is less then ${ans}. ${count} tries left`,
      gameover: false,
    };
  case +ans < num:
    return {
      msg: `The secret number is greater then ${ans}. ${count} tries left`,
      gameover: false,
    };
  case +ans === num:
    return {
      msg: `You guessed! It is ${ans}. Do you want play again?`,
      gameover: true,
    };
  default:
    return {
      msg: `You entered ${ans}. Please try again!`,
      gameover: false,
    };
  }
};

const game = secret => count => rules => {

  const answer = prompt(`Guess a number from ${START} to ${END}?`);
  const { msg, gameover } = rules(answer, secret, count);

  if (gameover) {
    playAgain = msg === 'Game Over' ? false : confirm(msg);
  } else {
    alert(msg);
    game(secret)(--count)(rules);
  }

};

for (let i = 1; playAgain; i++) {
  document.title = `Guesser. Round ${i}`;
  game(getRandomIntInclusive(START, END))(TRIES_COUNT)(guesser);
}
