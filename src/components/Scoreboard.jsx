import '../styles/Scoreboard.css';

export function Scoreboard({ currentScore, bestScore, roundCount }) {
  return (
    <aside className='scoreboard'>
      <div className='scoreboard-light' />

      <h2>Trainer Stats</h2>

      <div className='score-list'>
        <div className='score-row current-score'>
          <span>Score</span>
          <strong>{currentScore}</strong>
        </div>

        <div className='score-row best-score'>
          <span>Best</span>
          <strong>{bestScore}</strong>
        </div>

        <div className='score-row round-count'>
          <span>Rounds</span>
          <strong>{roundCount}</strong>
        </div>
      </div>

      <p className='scoreboard-tip'>
        There are 19 Pokémon in total. Can you make the very best score?
      </p>
    </aside>
  );
}
