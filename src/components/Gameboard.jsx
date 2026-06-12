import '../styles/Gameboard.css';

export function Gameboard({ pokeArray, handlePokeClick }) {
  return (
    <div className='gameboard'>
      {pokeArray.map((poke) => (
        <button
          key={poke}
          className='poke-card'
          onClick={handlePokeClick}
          data-poke-name={poke}
        >
          {poke}
        </button>
      ))}
    </div>
  );
}
