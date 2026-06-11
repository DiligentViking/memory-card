import '../styles/App.css';
import { useState } from 'react';

import { Scoreboard } from './Scoreboard.jsx';
import { Gameboard } from './Gameboard.jsx';

function provideRandomOptions(
  array,
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

  return outputArray;
}

export default function App() {
  const [clickedPokes, setClickedPokes] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  const currentScore = clickedPokes.length;

  const data = {
    currentScore,
    bestScore,
  };

  function handlePokeClick(e) {
    const pokeId = e.target.dataset.pokeId;

    const alreadyClicked = clickedPokes.includes(pokeId);
    if (!alreadyClicked) {
      setClickedPokes([...clickedPokes, pokeId]);
    } else {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setClickedPokes([]);
    }
  }

  return (
    <div className='app'>
      <Scoreboard data={data} />
      <Gameboard handlePokeClick={handlePokeClick} />
    </div>
  );
}
