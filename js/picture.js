import { createNewPhotos } from './data.js';
import { getRandomNumber, isEnterKey, isEscapeKey } from './utils.js';
const userPictureItem = createNewPhotos;
const picturesContainer = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();
userPictureItem.forEach(({ url, like, comments}) =>{
const pictureElement = picturesTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = like;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureFragment.appendChild(pictureElement);
picturesContainer.appendChild(pictureFragment);
});
console.log(userPictureItem)
export { picturesContainer, userPictureItem};
