import constants from '../constants';
const { c } = constants;

export function cardSearch(params) {
  return {
    type: c.CARD_SEARCH,
    params
  }
}