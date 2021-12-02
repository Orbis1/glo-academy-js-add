'use strict';

const START = 1, END = 100;

const getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() *
   (max - min + 1)) + min; //Максимум и минимум включаются
};

const secret = getRandomIntInclusive(START, END);
console.log(secret);

const dialog = function(num) {

  const answer = prompt(`Guess a number from ${START} to ${END}?`);

  const responseTo = function(ans) {
    switch (true) {
    case ans === null:
      return { msg: 'Game Over', gameover: true };
    case isNaN(+ans):
      return { msg: 'Enter the number, please', gameover: false };
    case +ans > END || +ans < START:
      return {
        msg: `The number must be in the range from ${START} to ${END}`,
        gameover: false
      };
    case +ans > num:
      return {
        msg: `The secret number is less then ${ans}`,
        gameover: false
      };
    case +ans < num:
      return {
        msg: `The secret number is greater then ${ans}`,
        gameover: false
      };
    case +ans === num:
      return {
        msg: `You guessed! It is ${ans}`,
        gameover: true
      };
    default:
      return {
        msg: `You entered ${ans}. Please try again!`,
        gameover: true
      };
    }
  };

  const { msg, gameover } = responseTo(answer);
  alert(msg);
  if (!gameover) dialog(num);
};

dialog(secret);
