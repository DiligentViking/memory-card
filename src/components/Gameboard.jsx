import '../styles/Gameboard.css';

export function Gameboard({
  pokeArray,
  createImgUrl,
  handlePokeClick,
  clickedPokes,
}) {
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
          <img src={createImgUrl(poke)} alt='' />
          {poke}
        </button>
      ))}
    </div>
  );
}
