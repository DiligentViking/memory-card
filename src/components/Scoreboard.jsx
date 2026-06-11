import '../styles/Scoreboard.css';

export function Scoreboard({ data }) {
  return (
    <div className='scoreboard'>
      <h2>Scoreboard</h2>
      <br />
      <div className='current-score'>Score: {data.currentScore}</div>
      <div className='best-score'>Best: {data.bestScore}</div>
    </div>
  );
}
