import {createAllPhotos} from './data.js';

const otherUsersPhoto = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const otherPhotos = createAllPhotos();

const otherListFragment = document.createDocumentFragment();

otherPhotos.forEach((url, likes, comments) => {
  const photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments;
  otherListFragment.appendChild(photoElement);

});

otherUsersPhoto.appendChild(otherListFragment);
