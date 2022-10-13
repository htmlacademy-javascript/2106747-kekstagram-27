import {getRandomArrayElements} from './until.js';
import {getRandomInt} from './until.js';

const ALL_PHOTO_COUNT = 25;
const COMMENTS_COUNT = 15;
const AVATAR_COUNT = 6;

const LIKES_COUNT = {
  MAX: 200,
  MIN: 15
};

const DESCRIPTIONS = [
  'Вессений день',
  'Осень',
  'Прогулка на свежем воздухе',
  'Дальняя дорога',
  'Идём на дело',
  'Газ в пол',
  'Огненное шоу',
  'Приятные встречи',
  'Как-то так',
  'Всем спасибо!'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артём',
  'Анастасия',
  'Владислав',
  'Михаил',
  'Ксения',
  'Полина',
  'Константин',
  'Екатерина',
  'Виктор',
  'Ирина'
];

const createMessage = () => {
  Array.from({length:getRandomInt(1,2)}, () => getRandomArrayElements(MESSAGES)).join(' ');
};

const createRandomComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInt(1,AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElements(NAMES)
});

const createPublishedImage = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElements(DESCRIPTIONS),
  likes: getRandomInt(LIKES_COUNT.MIN, LIKES_COUNT.MAX),
  comments: Array.from({length: getRandomInt(1, COMMENTS_COUNT) },(_, commentId) => createRandomComment(commentId + 1))
});

const createAllPhotos = () => {
  Array.from({length: ALL_PHOTO_COUNT}, (_, photoIndex) => createPublishedImage(photoIndex + 1));
};

export {createAllPhotos};
