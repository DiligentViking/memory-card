import '../styles/Gameboard.css';

export function Gameboard({ handlePokeClick }) {
  return (
    <div className='gameboard'>
      <button onClick={handlePokeClick} data-poke-id='1'>
        Pokemon 1
      </button>
      <br />
      <br />
      <button onClick={handlePokeClick} data-poke-id='2'>
        Pokemon 2
      </button>
      <br />
      <br />
      <button onClick={handlePokeClick} data-poke-id='3'>
        Pokemon 3
      </button>
      <br />
      <br />
      <button onClick={handlePokeClick} data-poke-id='4'>
        Pokemon 4
      </button>
      <br />
      <br />
    </div>
  );
}
