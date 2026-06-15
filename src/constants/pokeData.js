import { toCapitalCase } from '../utils/stringHelpers.js';

const pokeData = {};

addPoke('surskit');
addPoke('raltz');
addPoke('latias');
addPoke('latios');
addPoke('megaLatios', 'Mega Latios', 'latios-mega');
addPoke('morpeko', null, 'morpeko-hangry');
addPoke('leopard');
addPoke('purloin');
addPoke('zygarde', null, 'zygarde-complete');
addPoke('bulbasaur');
addPoke('deoxys');
addPoke('eevee');
addPoke('cinderace');
addPoke('umbreon');
addPoke('jolteon');
addPoke('alolanVulpix', 'Alolan Vulpix', 'vulpix-alola');
addPoke('darkrai');
addPoke('sawsbuck');
addPoke('furret');
addPoke('lugia');

console.log(pokeData);

function addPoke(name, displayName = null, urlName = null) {
  pokeData[name] = {
    displayName: displayName ?? toCapitalCase(name),
    urlName: urlName ?? name, // May use in future for pokeapi.co calls
  };
}

export const POKE_CHOICES = Object.keys(pokeData);
