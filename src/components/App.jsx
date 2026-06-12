import '../styles/App.css';
import { useState } from 'react';
import { provideRandomOptions } from '../utils/provideRandomOptions.js';

import { Scoreboard } from './Scoreboard.jsx';
import { Gameboard } from './Gameboard.jsx';

const DEVMODE = true;

const POKE_CHOICES = [
  'surskit',
  'raltz',
  'latias',
  'morpeko',
  'leopard',
  'purloin',
  'zygard',
  'mega latios',
  'bulbasaur',
  'deoxys',
  'eevee',
  'cinderace',
  'pikachu',
  'umbreon',
  'jolteon',
  'alolan vulpix',
  'darkrai',
  'sawsbuck',
  'lugia',
  'latios',
];
const HIGHEST_SCORE = POKE_CHOICES.length;
const NUM_POKES_SHOWN = 6;

export default function App() {
  const [clickedPokes, setClickedPokes] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  const currentScore = clickedPokes.length;

  const data = {
    currentScore,
    bestScore,
  };

  const pokeArray = provideRandomOptions(POKE_CHOICES, true, NUM_POKES_SHOWN);

  if (currentScore === HIGHEST_SCORE) alert('YOU WIN!');

  // There is an edge case if only previously selected pokemon are shown.
  //
  // SOLUTION 1:
  // See if each poke in pokeArray is in clickedPokes
  // If all of them are, then redo pokeArray
  //
  // SOLUTION 2:
  // Store a remainingPokes in memory
  // Get a random poke from remainingPokes and put that in provideRandomOptions
  // In provideRandomOptions, splice a random poke from the array and put the guaranteedItem in its place

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
      <Gameboard
        pokeArray={pokeArray}
        handlePokeClick={handlePokeClick}
        clickedPokes={DEVMODE ? clickedPokes : null}
      />
    </div>
  );
}
