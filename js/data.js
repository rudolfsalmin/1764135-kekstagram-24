import {getRandomNumber} from './utils.js';
const NAMES = [
  'Иван',
  'Артём',
  'Виктор',
  'Елена',
  'Дарья',
  'Кирилл',
  'Дмитрий',
  'Семён',
  'Наталья',
  'Григорий',
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.' ,
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS = [
  'Норвегия!',
  'Мой Кот',
  'Нв концерте',
  'В Штатах',
  'Турция',
  'Наконец-то лето',
  'На горнолыжке',
];
const POST_COUNT = 25;
const OBJECT_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const COMMENT_COUNT = 8;
const comments = Array.from({length: POST_COUNT}, (element,index) => ({
  id: index + 1,
  avatar: `img/avatar-${getRandomNumber(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: COMMENTS[getRandomNumber(0,COMMENTS.length - 1)],
  name: NAMES[getRandomNumber(0,NAMES.length - 1)],
}));
function getRandomComments () {
  const arrComments = Array.from({length: getRandomNumber(1, COMMENT_COUNT)});
  const uniqCommentList = arrComments.map((item) => {
    item = comments[getRandomNumber(0, comments.length - 1)];
    return item;
  });
  return uniqCommentList;
}
const createNewPhotos = Array.from({length: OBJECT_COUNT}, (item, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length - 1)],
  likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
  comments: getRandomComments(),
}));
console.log(createNewPhotos)
export {createNewPhotos,getRandomComments};
