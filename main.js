const getRandomInt = (min, max) => {
    const isArgumentsValid = (min >= 0 && max >= 0 && min < max);
    if (isArgumentsValid) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    }
      return RangeError('Параметры должены быть неотрицательными числами и min <= max');
  };

let getVeryfiMaxLength = (str, maxLength) => str.length <= maxLength;
const ALL_PHOTO_COUNT = 25;
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



const getRandomArrayElements = (elements) => {
  return elements[getRandomInt(0,elements.length - 1)];
};
let counterId = 0;
let getId = () => {
  counterId++;
  return counterId;
};

let counterPhotoId = 0;
let getPhotoId = () => {
  counterPhotoId++;
  return counterPhotoId;
};

let counterCommentsId = 0;
let getCommentsId = () => {
  counterCommentsId++;
  return counterCommentsId;
};
const createRandomComments = () => {
  return {
    id: getCommentsId(),
    avatar: 'img/avatar-' + getRandomInt(1,6) + '.svg',
    message: getRandomArrayElements(MESSAGES),
    name: getRandomArrayElements(NAMES)
  };
};

const createPublishedImage = () => {
  return {
    id: getId(),
    url: 'photos/' + getPhotoId() + '.jpg',
    description: getRandomArrayElements(DESCRIPTIONS),
    likes: getRandomInt(15, 200),
    comments: createRandomComments()
  };
};

const allPhotos = Array.from({length: ALL_PHOTO_COUNT}, createPublishedImage);
console.log(allPhotos);
