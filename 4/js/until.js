const getRandomInt = (min, max) => {
  const isArgumentsValid = min >= 0 && max >= 0 && min < max;
  if (isArgumentsValid) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
    return RangeError('Параметры должены быть неотрицательными числами и min <= max');
};

const getVeryfiMaxLength = (str, maxLength) => str.length <= maxLength;

const getRandomArrayElements = (elements) => {
return elements[getRandomInt(0,elements.length - 1)];
};

export {getRandomArrayElements, getRandomInt};

console.log(getVeryfiMaxLength);
