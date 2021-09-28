function randomNumber(min,max) {
  if(min < max || min >= 0) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
  } else{
    console.log('значения минимум и максимум не корректны')
  }
randomNumber(20,70);
// взято с https://developer.mozilla.org/
function commentLength(strng,maxLength) {
  if (strng.length >= maxLength) {
    return false;
  } else{
    return true;
  }
};
commentLength('string',140);
// взято с https://www.cyberforum.ru/javascript/thread1165903.html
