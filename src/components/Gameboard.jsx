import '../styles/Gameboard.css';

function createNameFromCamelCase(pokeName) {
  let output = pokeName.charAt(0).toUpperCase();
  for (let i = 1; i < pokeName.length; i++) {
    const char = pokeName.charAt(i);
    if (char === char.toUpperCase()) {
      output += ` ${char.toUpperCase()}`;
    } else {
      output += char;
    }
  }
  return output;
}

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
          {createNameFromCamelCase(poke)}
        </button>
      ))}
    </div>
  );
}
