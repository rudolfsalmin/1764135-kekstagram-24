const getRandomNumber = (min,max) => {
  if (min <0 && max<0) {
    return undefined;
  }
  const low = min>0 ? min: 0;
  const random = Math.random();
  const res = low + Math.round(random* (max-low));
  return res;
};
getRandomNumber(-10, -60);
// взято с https://developer.mozilla.org/
const getCommentLength = (strng,maxLength) => strng.length <= maxLength;
getCommentLength('string',140);
// взято с https://www.cyberforum.ru/javascript/thread1165903.html

//функции по нажатию кнопки
const isEnterKey = (evt) => evt.key === 'Enter';

const isEscapeKey = (evt) => evt.key === 'Escape';

export {isEnterKey, isEscapeKey, getRandomNumber, getCommentLength};
