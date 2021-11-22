const Alto_icon = 'http://localhost:3000/images/Alto_icon.png';
const Alto_0 = 'http://localhost:3000/images/Alto_0.png';
const Alto_1 = 'http://localhost:3000/images/Alto_1.png';
const Alto_2 = 'http://localhost:3000/images/Alto_2.png';

const Among_icon = 'http://localhost:3000/images/Among_icon.png';
const Among_0 = 'http://localhost:3000/images/Among_0.png';
const Among_1 = 'http://localhost:3000/images/Among_1.png';
const Among_2 = 'http://localhost:3000/images/Among_2.png';
const Among_3 = 'http://localhost:3000/images/Among_3.png';
const Among_4 = 'http://localhost:3000/images/Among_4.png';

const Pillar_icon = 'http://localhost:3000/images/Pillar_icon.png';
const Pillar_0 = 'http://localhost:3000/images/Pillar_0.png';
const Pillar_1 = 'http://localhost:3000/images/Pillar_1.png';
const Pillar_2 = 'http://localhost:3000/images/Pillar_2.png';
const Pillar_3 = 'http://localhost:3000/images/Pillar_3.png';
const Pillar_4 = 'http://localhost:3000/images/Pillar_4.png';

const Genshin_icon = 'http://localhost:3000/images/Genshin_icon.png';
const Genshin_0 = 'http://localhost:3000/images/Genshin_0.jpg';
const Genshin_1 = 'http://localhost:3000/images/Genshin_1.jpg';
const Genshin_2 = 'http://localhost:3000/images/Genshin_2.jpg';
const Genshin_3 = 'http://localhost:3000/images/Genshin_3.jpg';
const Genshin_4 = 'http://localhost:3000/images/Genshin_4.jpg';

const gameData = [
  {
    id: 0,
    title: "Alto's Odyssey",
    icon: Alto_icon,
    subTitle:
      'Just beyond the horizon sits a majestic desert, vast and unexplored.',
    description:
      'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
    age: '9+',
    rating: 4.4,
    preview: [Alto_0, Alto_1, Alto_2],
    backgroundColor: '#824671CC',
  },
  {
    id: 1,
    title: 'The Pillar',
    icon: Pillar_icon,
    subTitle: 'Dozens of challenging puzzles to solve!',
    description:
      'Play online or over local WiFi with 4-10 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone! Crewmates can win by completing all tasks or discovering and voting the impostor off the ship.',
    age: '4+',
    rating: 4.2,
    preview: [Pillar_0, Pillar_1, Pillar_2, Pillar_3, Pillar_4],
    backgroundColor: '#ab784fCC',
  },
  {
    id: 2,
    title: 'Genshin Impact',
    icon: Genshin_icon,
    subTitle:
      'Step into Teyvat, a vast world teeming with life and flowing with elemental energy',
    description:
      'You and your sibling arrived here from another world. Separated by an unknown god, stripped of your powers, and cast into a deep slumber, you now awake to a world very different from when you first arrived.',
    age: '9+',
    rating: 4.7,
    preview: [Genshin_0, Genshin_1, Genshin_2, Genshin_3, Genshin_4],
    backgroundColor: '#3e3024CC',
  },
  {
    id: 3,
    title: 'Among Us',
    icon: Among_icon,
    subTitle: 'Beware of the importer',
    description:
      'Cleverly mixing mystery an puzzle solving, the Pillar takes you deep into an faraway unknown world where you must pay attention to your surroundings in order to find the way to freedom. Exploration goes hand in hand with an open and clear mind as you try to break free from a mythical birdcage and escape.',
    age: '9+',
    rating: 4.7,
    preview: [Among_0, Among_1, Among_2, Among_3, Among_4],
    backgroundColor: '#ffde29CC',
  },
];

module.exports = gameData;