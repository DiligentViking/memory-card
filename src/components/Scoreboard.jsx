import '../styles/Scoreboard.css';

export function Scoreboard({ data }) {
  return (
    <aside className='scoreboard'>
      <div className='scoreboard-light' />

      <h2>Trainer Stats</h2>

      <div className='score-list'>
        <div className='score-row current-score'>
          <span>Score</span>
          <strong>{data.currentScore}</strong>
        </div>

        <div className='score-row best-score'>
          <span>Best</span>
          <strong>{data.bestScore}</strong>
        </div>
      </div>

      <p className='scoreboard-tip'>
        There are 19 Pokémon in total. Can you make the very best score?
      </p>
    </aside>
  );
}
