
export default class Card {
  constructor(name, type_line, power, toughness, colors, color_identity, mana_cost, cmc) {
    this.name = name;
    this.type_line = type_line;
    this.power = power;
    this.toughness = toughness;
    this.colors = colors;
    this.color_identity = color_identity;
    this.mana_cost = mana_cost;
    this.cmc = cmc;
  }
}
