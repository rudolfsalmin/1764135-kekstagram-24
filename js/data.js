import {getRandomNumber} from '/utils.js';

const NAMES_LIST = [
'Иван',
'Артём',
'Виктор',
'Елена',
'Дарья',
'Кирилл',
'Дмитрий',
'Семён',
'Наталья',
'Григорий'
];
const COMMENT_LIST = [
'Всё отлично!',
'В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.' ,
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTION_LIST = [
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

const commentList = Array.from({length: POST_COUNT}, (element,index) => ({
  id: index + 1,
  avatar: 'img/avatar-${getRandomNumber(MIN_AVATAR,MAX_AVATAR)}.svg',
  message: COMMENT_LIST[getRandomNumber(0,COMMENT_LIST.length - 1)],
  name: NAMES_LIST[getRandomNumber(0,NAMES_LIST.lenth - 1)]
}));

function getCommentList () {
  const arrList = Array.from({length: getRandomNumber(1, COMMENT_COUNT)});
  const uniqCommentList = arrList.map((item) => {
    item = commentList[getRandomNumber(0, commentList.length - 1)];
    return item;
  });
  return uniqCommentList;
}
const createPhotos = Array.from({length: OBJECT_COUNT}), (item, index) => ({
  id: index + 1,
  url: 'photos/${index + 1}.jpg',
  description: DESCRIPTION_LIST[getRandomNumber(0, DESCRIPTION_LIST.length - 1)],
  likes: getRandomNumber(MIN_LIKES,MAX_LIKES)
  comments: getCommentList(),
});
export {createPhotos};
