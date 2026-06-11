import '../styles/App.css';
import { useState } from 'react';

import { Scoreboard } from './Scoreboard.jsx';
import { Gameboard } from './Gameboard.jsx';

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const data = {
    currentScore,
    bestScore,
  };

  function incrementScore() {
    setCurrentScore(currentScore + 1);
  }

  return (
    <div className='app'>
      <Scoreboard data={data} />
      <Gameboard incrementScore={incrementScore} />
    </div>
  );
}
