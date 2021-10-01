const randomNumber = (min,max) => {
  if (min <0 && max<0) {
    return undefined;
  }
  const low = min>0 ? min: 0;
  const random = Math.random();
  const res = low + Math.round(random* (max-low));
  return res;
};

randomNumber(-10, -60);
// взято с https://developer.mozilla.org/
const commentLength = (strng,maxLength) => strng.length <= maxLength;
commentLength('string',140);

// взято с https://www.cyberforum.ru/javascript/thread1165903.html
