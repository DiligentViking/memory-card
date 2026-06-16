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

        <div className='score-row total-score'>
          <span>Total</span>
          <strong>{data.highestScore}</strong>
        </div>
      </div>

      <p className='scoreboard-tip'>
        Remember your picks. The board changes after every click.
      </p>
    </aside>
  );
}
