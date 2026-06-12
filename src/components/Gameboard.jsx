import '../styles/Gameboard.css';

export function Gameboard({ pokeArray, handlePokeClick }) {
  return (
    <div className='gameboard'>
      <button onClick={handlePokeClick} data-poke-name={pokeArray[0]}>
        {pokeArray[0]}
      </button>
      <br />
      <br />
      <button onClick={handlePokeClick} data-poke-name={pokeArray[1]}>
        {pokeArray[1]}
      </button>
      <br />
      <br />
      <button onClick={handlePokeClick} data-poke-name={pokeArray[2]}>
        {pokeArray[2]}
      </button>
      <br />
      <br />
      <button onClick={handlePokeClick} data-poke-name={pokeArray[3]}>
        {pokeArray[3]}
      </button>
      <br />
      <br />
    </div>
  );
}
