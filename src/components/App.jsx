import '../styles/App.css';
import { useState, useEffect } from 'react';

import { POKE_CHOICES, createImgUrl } from '../constants/pokeData.js';
import { provideRandomOptions } from '../utils/provideRandomOptions.js';
import { getRandomItem } from '../utils/arrayRandomHelpers.js';

import { Scoreboard } from './Scoreboard.jsx';
import { Gameboard } from './Gameboard.jsx';

const DEVMODE = false;

const HIGHEST_SCORE = POKE_CHOICES.length;
const NUM_POKES_SHOWN = 6;

export default function App() {
  const [gameState, setGameState] = useState(
    JSON.parse(localStorage.getItem('gameState')) || {
      clickedPokes: [],
      remainingPokes: [...POKE_CHOICES],
      bestScore: 0,
      roundCount: 0,
    },
  );

  const [animationTurn, setAnimationTurn] = useState(0);

  const currentScore = gameState.clickedPokes.length;

  const guaranteedItem = getRandomItem(gameState.remainingPokes);
  const pokeArray = provideRandomOptions(
    POKE_CHOICES,
    guaranteedItem,
    true,
    NUM_POKES_SHOWN,
  );

  useEffect(() => {
    localStorage.setItem('gameState', JSON.stringify(gameState));
  }, [gameState]);

  function refreshCards() {
    setAnimationTurn((turn) => turn + 1);
  }

  function endRound(finalScore = currentScore) {
    const newBest =
      finalScore > gameState.bestScore ? finalScore : gameState.bestScore;

    setGameState({
      ...gameState,
      clickedPokes: [],
      remainingPokes: [...POKE_CHOICES],
      bestScore: newBest,
      roundCount: gameState.roundCount + 1,
    });
    refreshCards();
  }

  function handlePokeClick(poke) {
    const alreadyClicked = gameState.clickedPokes.includes(poke);

    if (alreadyClicked) {
      endRound();
      return;
    }

    const nextClickedPokes = [...gameState.clickedPokes, poke];
    const nextCurrentScore = nextClickedPokes.length;

    if (nextCurrentScore === HIGHEST_SCORE) {
      alert('YOU WIN!');
      endRound(nextCurrentScore);
      return;
    }

    setGameState({
      ...gameState,
      clickedPokes: nextClickedPokes,
      remainingPokes: gameState.remainingPokes.filter((p) => p !== poke),
    });
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
        <Scoreboard
          currentScore={currentScore}
          bestScore={gameState.bestScore}
          roundCount={gameState.roundCount}
        />
        <Gameboard
          pokeArray={pokeArray}
          createImgUrl={createImgUrl}
          handlePokeClick={handlePokeClick}
          clickedPokes={DEVMODE ? gameState.clickedPokes : null}
          animationTurn={animationTurn}
        />
      </div>
    </div>
  );
}
