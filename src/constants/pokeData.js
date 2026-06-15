import { toCapitalCase } from '../utils/stringHelpers.js';

const pokeData = {};

addPoke('surskit', 283);
addPoke('ralts', 280);
addPoke('latias', 380);
addPoke('latios', 381);
addPoke('megaLatios', 10063, 'Mega Latios');
addPoke('morpeko', 10187);
addPoke('liepard', 510);
addPoke('purrloin', 509);
addPoke('zygarde', 10120);
addPoke('bulbasaur', 1);
addPoke('deoxys', 10001);
addPoke('eevee', 133);
addPoke('cinderace', 815);
addPoke('umbreon', 197);
addPoke('jolteon', 135);
addPoke('alolanVulpix', 10103, 'Alolan Vulpix');
addPoke('darkrai', 491);
addPoke('sawsbuck', 586);
addPoke('furret', 162);
addPoke('lugia', 249);

console.log(pokeData);

function addPoke(name, id, displayName = null) {
  pokeData[name] = {
    id,
    displayName: displayName ?? toCapitalCase(name), // Can abstract further, turn camel case into separate words
  };
}

export function createImgUrl(pokeName) {
  const pokeId = pokeData[pokeName].id;
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`;
}

export const POKE_CHOICES = Object.keys(pokeData);
