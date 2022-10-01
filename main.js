// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomInt(min, max) {
    if (min < 0 || max < 0 || min > max) {
        return NaN;
    }
        return Math.floor(min + Math.random() * (max + 1 - min));
  };

//Функция для проверки максимальной длины строки
function getVeryfiMaxLength(str, maxLength) {
    if (str.length <= maxLength) {
        return true;
    }
        return false;

};