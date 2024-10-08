// Generate a random name

const FRUITS = [
  'Mango',
  'Orange',
  'Apple',
  'Banana',
  'Strawberry',
  'Kiwi',
  'Grape',
  'Pineapple',
  'Melon',
  'Papaya',
  'Peach',
  'Cherry',
  'Raspberry',
  'Blackberry',
  'Lemon',
  'Lime',
  'Passionfruit',
  'Pear',
  'Plum',
  'Coconut',
  'Guava',
  'Tangerine',
  'Blueberry',
  'Fig',
  'Chestnut',
  'Grapefruit',
  'Nectarine',
  'Kiwano',
  'Rambutan',
  'Cherimoya',
  'Acerola',
  'Dragonfruit',
  'Jackfruit',
  'Date',
  'Tamarind',
  'Watermelon',
  'Currant',
  'Lychee',
  'Jabuticaba',
  'Longan',
  'Starfruit',
  'Soursop',
  'Kumquat',
  'Cabeludinha',
  'Physalis',
  'Salak',
  'Mangosteen',
  'Nance',
  'Sapote',
  'Cabeludinha'
];

const ADJECTIVES = [
  'Cut',
  'Peel',
  'Mix',
  'Blend',
  'Squeeze',
  'Juice',
  'Cook',
  'Boil',
  'Roast',
  'Marinate',
  'Salad',
  'Smoothie',
  'Puree',
  'Jam',
  'Preserve',
  'Dehydrate',
  'Freeze',
  'Garnish',
  'Serve',
  'Dress',
  'Infuse',
  'Marinade',
  'Grate',
  'Crush',
  'Drain',
  'Wrap',
  'Slice',
  'Season',
  'Grill',
  'Caramelize',
  'Bake',
  'Chop',
  'Whip',
  'Package',
  'Present',
  'Flavor',
  'Whipped',
  'Sorbet',
  'Compote',
  'Gelato',
  'Sauce',
  'Tart',
  'Muffin',
  'Crumble',
  'Tartlet',
  'Flan',
  'Cookie',
  'Creamy',
  'Pudding',
  'Confit'
];

export const getRandomName = () => {
  const randomAdjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)].toLowerCase();
  const randomFruit = FRUITS[Math.floor(Math.random() * FRUITS.length)].toLowerCase();
  return `${randomAdjective}-${randomFruit}`;
};
