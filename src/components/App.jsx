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

const POKECHOICES = ['surskit', 'raltz', 'latias', 'morpeko'];

export default function App() {
  const [clickedPokes, setClickedPokes] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  const currentScore = clickedPokes.length;

  const data = {
    currentScore,
    bestScore,
  };

  const pokeArray = provideRandomOptions(POKECHOICES);

  function handlePokeClick(e) {
    const poke = e.target.dataset.pokeName;

    const alreadyClicked = clickedPokes.includes(poke);
    if (!alreadyClicked) {
      setClickedPokes([...clickedPokes, poke]);
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
      <Gameboard pokeArray={pokeArray} handlePokeClick={handlePokeClick} />
    </div>
  );
}
