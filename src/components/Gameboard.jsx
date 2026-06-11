import '../styles/Gameboard.css';

export function Gameboard({ incrementScore }) {
  return (
    <div className='gameboard'>
      <button onClick={incrementScore}>Increment Score</button>
    </div>
  );
}
