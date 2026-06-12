export function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

export function getRandomItem(array) {
  return array[getRandomIndex(array)];
}
