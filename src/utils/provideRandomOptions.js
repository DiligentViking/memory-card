import { getRandomIndex } from '../utils/arrayRandomHelpers.js';

export function provideRandomOptions(
  array,
  guaranteedItem,
  onlyUnique = true,
  outputLength = array.length,
) {
  const outputArray = [];
  const remainingOptions = [...array];

  for (let i = 0; i < outputLength; i++) {
    let randomIndex;
    let randomItem;

    if (onlyUnique) {
      do {
        if (!remainingOptions.length && outputLength - i) {
          console.error(
            'Error: Out of unique options. Do not make outputLength higher than number of unique elements in input array.',
          );
          return;
        }
        randomIndex = getRandomIndex(remainingOptions);
        randomItem = remainingOptions.splice(randomIndex, 1)[0];
      } while (outputArray.includes(randomItem));
    } else {
      randomIndex = getRandomIndex(array);
      randomItem = array[randomIndex];
    }

    outputArray.push(randomItem);
  }

  if (!outputArray.includes(guaranteedItem)) {
    outputArray.splice(getRandomIndex(outputArray), 1, guaranteedItem);
  }

  return outputArray;
}
