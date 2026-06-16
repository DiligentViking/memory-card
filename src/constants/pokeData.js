const POKE_DATA = {
  surskit: 283,
  ralts: 280,
  latias: 380,
  latios: 381,
  megaLatios: 10063,
  morpeko: 10187,
  liepard: 510,
  purrloin: 509,
  zygarde: 10120,
  bulbasaur: 1,
  eevee: 133,
  cinderace: 815,
  umbreon: 197,
  jolteon: 135,
  alolanVulpix: 10103,
  darkrai: 491,
  sawsbuck: 586,
  furret: 162,
  lugia: 249,
};

export function createImgUrl(pokeName) {
  const pokeId = POKE_DATA[pokeName];
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`;
}

export const POKE_CHOICES = Object.keys(POKE_DATA);
