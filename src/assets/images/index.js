import blackSym from './black_symbol.svg';
import blueSym from './blue_symbol.svg';
import greenSym from './green_symbol.svg';
import whiteSym from './white_symbol.svg';
import redSym from './red_symbol.svg';
import land from './land_symbol.svg';
import artifact from './artifact_symbol.svg';
import creature from './creature_symbol.svg';
import enchantment from './enchantment_symbol.svg';
import instant from './instant_symbol.svg';
import planeswalker from './planeswalker_symbol.svg';
import sorcery from './sorcery_symbol.svg';
import searchIcon from './search_icon.svg';


const colorSym = {
  black: blackSym,
  blue: blueSym,
  green: greenSym,
  white: whiteSym,
  red: redSym
}

const typeSym = {
  artifact: artifact,
  creature: creature,
  enchantment: enchantment,
  instant: instant,
  planeswalker: planeswalker,
  sorcery: sorcery,
}

export default {
  colorSym: colorSym,
  typeSym: typeSym,
  land: land,
  searchIcon: searchIcon,
}