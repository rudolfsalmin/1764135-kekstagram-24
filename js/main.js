const randomNumber = (min,max) => {
  if (min < max || min >= 0)
  {return Math.floor(Math.random() * (max - min + 1)) + min;}
};
randomNumber(-30,50);
// взято с https://developer.mozilla.org/
const commentLength = (strng,maxLength) => {
  if (strng.length >= maxLength) {
    return false;
  }
  return true;
};
commentLength('string',140);

// взято с https://www.cyberforum.ru/javascript/thread1165903.html
