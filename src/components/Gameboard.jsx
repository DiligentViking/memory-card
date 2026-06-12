import '../styles/Gameboard.css';

export function Gameboard({ pokeArray, handlePokeClick, clickedPokes }) {
  return (
    <div className='gameboard'>
      {pokeArray.map((poke) => (
        <button
          key={poke}
          className='poke-card'
          onClick={handlePokeClick}
          data-poke-name={poke}
          data-dev-highlight={clickedPokes && clickedPokes.includes(poke)}
        >
          {poke}
        </button>
      ))}
    </div>
  );
}
