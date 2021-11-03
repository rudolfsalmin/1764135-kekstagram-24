import { photos, MIN_LIKES, MAX_LIKES, getComments } from "./data.js";
import { getRandomNumber, isEnterKey } from "./utils.js";
const userPictureItem = photos();
const picturesContainer = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();
userPictureItem.forEach(({ url, like, comments}) =>{
  pictureElement = picturesTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = like.toString();
  pictureElement.querySelector('.picture__comments').textContent = comments.length.toString();
  pictureFragment.appendChild(pictureElement);
});
picturesContainer.appendChild(pictureFragment);
export {userPictureItem};
