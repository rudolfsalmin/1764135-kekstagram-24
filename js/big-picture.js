import {createNewPhotos} from './data.js';
import {picturesContainer} from './picture.js';
import {isEnterKey, isEscapeKey} from './utils.js';

let currentVisibleComments = 0;
//блок с открытой фотографией
const bigPictureWindow = document.querySelector('.big-picture');
//колличество комментариев
const socialCommentCount = document.querySelector('.social__comment-count');
//кнопка загрузки комментариев
const commentLoadButton = document.querySelector('.social__comments-loader');
// body
const bodyList = document.querySelector('body');
// кнопка закрытия фото
const closePhotoButton = bigPictureWindow.querySelector('.big-picture__cancel');
const socialCommentsListFragment = document.createDocumentFragment();

//блок со всеми комментариями
const socialCommentsContainer = document.querySelector('.social__comments');
//блок с клмментарием
const socialComment = document.querySelector('.social__comment');
// функция закрывает изображение с кнопки и esc
function closeFullPic () {
  commentLoadButton.classList.remove('hidden');
  bodyList.classList.remove('modal-open');
  bigPictureWindow.classList.add('hidden');
  document.removeEventListener ('keydown', closePopupEscapeKeydown);
  closePhotoButton.removeEventListener('click', closeFullPic);
}

function closePopupEscapeKeydown(evt) {
  if (isEscapeKey(evt)) {
    closeFullPic();
  }
}


function renderCommentsList (currentUrl) {
  createNewPhotos.forEach( (item) => {
    const currentClickedPhoto = currentUrl.querySelector('.picture__img').src;
    const currentItemUrl = item.url;
    if (currentClickedPhoto.includes(currentItemUrl)) {
      const comments = item.comments;
      comments.forEach( (itemComments) => {
        const elementSocialComment = socialComment.cloneNode(true);
        elementSocialComment.querySelector('.social__picture').setAttribute('src', itemComments.avatar);
        elementSocialComment.querySelector('.social__picture').setAttribute('alt' , itemComments.name);
        elementSocialComment.querySelector('.social__text').textContent = itemComments.message;
        socialCommentsListFragment.appendChild(elementSocialComment);
      });
    }
  });
  socialCommentsContainer.textContent = '';
  socialCommentsContainer.appendChild(socialCommentsListFragment);
}

function renderFullPhoto (currentClickedPhoto) {
  const bigPicture = document.querySelector('.big-picture__img');
  const counterLikes = document.querySelector('.likes-count');
  const pictureDescription = document.querySelector('.social__caption');

  bigPicture.querySelector('img').src = currentClickedPhoto.querySelector('.picture__img').src;
  bigPicture.querySelector('img').alt = currentClickedPhoto.querySelector('.picture__img').alt;
  counterLikes.textContent = currentClickedPhoto.querySelector('.picture__likes').textContent;
  pictureDescription.textContent = currentClickedPhoto.description;
  renderCommentsList(currentClickedPhoto);
}

function openBigPicture () {
  bodyList.classList.add('modal-open');
  bigPictureWindow.classList.remove('hidden');
  document.addEventListener ('keydown', closePopupEscapeKeydown);
  closePhotoButton.addEventListener('click', closeFullPic);
}

function getAllSocialCommentsForClickedPhoto () {
  const allSocialComments = document.querySelectorAll('.social__comment');
  return allSocialComments;
}

function getSocialCommentCountTextContent (currentsVisibleComments, allSocialComments) {
  socialCommentCount.textContent = `${currentsVisibleComments} из ${allSocialComments.length} комментариев`;
}

function renderShowCommentsList () {
  if (getAllSocialCommentsForClickedPhoto().length > 5) {
    commentLoadButton.classList.remove('hidden');
    currentVisibleComments = 5;
    getSocialCommentCountTextContent(currentVisibleComments, getAllSocialCommentsForClickedPhoto());
    getAllSocialCommentsForClickedPhoto().forEach( (item, index) => {
      if (index >= 5) {
        item.classList.add('hidden');
      }
    });
  } else if (getAllSocialCommentsForClickedPhoto().length <= 5) {
    commentLoadButton.classList.add('hidden');
    currentVisibleComments = getAllSocialCommentsForClickedPhoto().length;
    getSocialCommentCountTextContent(currentVisibleComments, getAllSocialCommentsForClickedPhoto());
  }
}

commentLoadButton.addEventListener('click', () => {
  const specificClassFromListComments = document.querySelectorAll('.social__comment.hidden');
  specificClassFromListComments.forEach( (item, index) => {
    if (index < 5) {
      item.classList.remove('hidden');
    }
  });
  const refreshListComments = document.querySelectorAll('.social__comment.hidden');
  if (refreshListComments.length === 0) {
    commentLoadButton.classList.add('hidden');
    currentVisibleComments = getAllSocialCommentsForClickedPhoto().length;
    getSocialCommentCountTextContent(currentVisibleComments, getAllSocialCommentsForClickedPhoto());
  } else {
    currentVisibleComments += 5;
    getSocialCommentCountTextContent(currentVisibleComments, getAllSocialCommentsForClickedPhoto());
  }
});
picturesContainer.addEventListener('click', (evt) => {
  const currentPhoto = evt.target.closest('a[class="picture"]');
  if (currentPhoto) {
    renderFullPhoto(currentPhoto);
    openBigPicture();
    renderShowCommentsList();
  }
});


picturesContainer.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    const currentPhoto = evt.target.closest('a[class="picture"]');
    if (currentPhoto) {
      renderFullPhoto(currentPhoto);
      openBigPicture();
    }
  }
});

export {bodyList};
