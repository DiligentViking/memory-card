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
        randomIndex = Math.floor(Math.random() * remainingOptions.length);
        randomItem = remainingOptions.splice(randomIndex, 1)[0];
      } while (outputArray.includes(randomItem));
    } else {
      randomIndex = Math.floor(Math.random() * array.length);
      randomItem = array[randomIndex];
    }

    outputArray.push(randomItem);
  }

  if (!outputArray.includes(guaranteedItem)) {
    outputArray.splice(
      Math.floor(Math.random() * outputArray.length),
      1,
      guaranteedItem,
    );
  }

  return outputArray;
}
