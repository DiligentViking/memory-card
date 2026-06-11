import '../styles/App.css';
import { useState } from 'react';

import { Scoreboard } from './Scoreboard.jsx';
import { Gameboard } from './Gameboard.jsx';

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
