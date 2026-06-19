import '../styles/App.css';
import { useState } from 'react';

import { POKE_CHOICES, createImgUrl } from '../constants/pokeData.js';
import { provideRandomOptions } from '../utils/provideRandomOptions.js';
import { getRandomItem } from '../utils/arrayRandomHelpers.js';

import { Scoreboard } from './Scoreboard.jsx';
import { Gameboard } from './Gameboard.jsx';

const DEVMODE = true;

const HIGHEST_SCORE = POKE_CHOICES.length;
const NUM_POKES_SHOWN = 6;

export default function App() {
  const [clickedPokes, setClickedPokes] = useState([]);
  const [remainingPokes, setRemainingPokes] = useState([...POKE_CHOICES]);
  const [bestScore, setBestScore] = useState(0);
  const [animationTurn, setAnimationTurn] = useState(0);

  const currentScore = clickedPokes.length;

  const data = {
    currentScore,
    bestScore,
    highestScore: HIGHEST_SCORE,
  };

  const guaranteedItem = getRandomItem(remainingPokes);
  const pokeArray = provideRandomOptions(
    POKE_CHOICES,
    guaranteedItem,
    true,
    NUM_POKES_SHOWN,
  );

  function refreshCards() {
    setAnimationTurn((turn) => turn + 1);
  }

  function endRound(finalScore = currentScore) {
    if (finalScore > bestScore) {
      setBestScore(finalScore);
    }

    setClickedPokes([]);
    setRemainingPokes([...POKE_CHOICES]);
    refreshCards();
  }

  function handlePokeClick(poke) {
    const alreadyClicked = clickedPokes.includes(poke);

    if (alreadyClicked) {
      endRound();
      return;
    }

    const nextClickedPokes = [...clickedPokes, poke];
    const nextCurrentScore = nextClickedPokes.length;

    if (nextCurrentScore === HIGHEST_SCORE) {
      alert('YOU WIN!');
      endRound(nextCurrentScore);
      return;
    }

    setClickedPokes(nextClickedPokes);
    setRemainingPokes(remainingPokes.filter((p) => p !== poke));
    refreshCards();
  }

  return (
    <div className='app'>
      <header className='app-header'>
        {/* <p className='eyebrow'>Pokédex Memory Challenge</p> */}
        <h1>Gotta click 'em all – once!</h1>
        <p className='game-instructions'>
          Remember your picks. The board changes after every click.
        </p>
      </header>

      <div className='game-container'>
        <Scoreboard data={data} />
        <Gameboard
          pokeArray={pokeArray}
          createImgUrl={createImgUrl}
          handlePokeClick={handlePokeClick}
          clickedPokes={DEVMODE ? clickedPokes : null}
          animationTurn={animationTurn}
        />
      </div>
    </div>
  );
}
