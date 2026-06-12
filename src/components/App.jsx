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
  'furret',
];
const HIGHEST_SCORE = POKE_CHOICES.length;
const NUM_POKES_SHOWN = 6;

export default function App() {
  const [clickedPokes, setClickedPokes] = useState([]);
  const [remainingPokes, setRemainingPokes] = useState([...POKE_CHOICES]);
  const [bestScore, setBestScore] = useState(0);

  const currentScore = clickedPokes.length;

  const data = {
    currentScore,
    bestScore,
  };

  const guaranteedItem =
    remainingPokes[Math.floor(Math.random() * remainingPokes.length)]; // TODO: Make helper
  const pokeArray = provideRandomOptions(
    POKE_CHOICES,
    guaranteedItem,
    true,
    NUM_POKES_SHOWN,
  );

  if (currentScore === HIGHEST_SCORE) {
    alert('YOU WIN!');
    endRound();
  }

  function endRound() {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
    setClickedPokes([]);
    setRemainingPokes([...POKE_CHOICES]);
  }

  function handlePokeClick(e) {
    const poke = e.target.dataset.pokeName;
    const alreadyClicked = clickedPokes.includes(poke);
    if (!alreadyClicked) {
      setClickedPokes([...clickedPokes, poke]);
      setRemainingPokes(remainingPokes.filter((p) => p !== poke));
    } else {
      endRound();
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
