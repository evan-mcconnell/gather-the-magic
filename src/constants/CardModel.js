
export default class Card {
  constructor(id, name, type_line, power, toughness, colors, color_identity, mana_cost, cmc, oracle_text, image, imageSm) {
    this.id = id;
    this.name = name;
    this.type_line = type_line;
    this.power = power;
    this.toughness = toughness;
    this.colors = colors;
    this.color_identity = color_identity;
    this.mana_cost = mana_cost;
    this.cmc = cmc;
    this.text = oracle_text;
    this.image = image;
    this.imageSm = imageSm;
  }
}
