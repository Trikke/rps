export interface Shape {
    id: string;
    name: string;
    emoji: string;
    color: string;
  }
  
  export interface GameRule {
    winner: string;
    loser: string;
  }
  
  export interface Agent {
    id: string;
    x: number;
    y: number;
    vx: number;
    vy: number;
    shape: Shape;
    size: number;
  }
  
  export interface GameStats {
    shapeCounts: Record<string, number>;
    totalAgents: number;
    isGameOver: boolean;
    winningShape?: Shape;
  }
  
  export interface GameConfig {
    agentCount: number;
    shapes: Shape[];
    rules: GameRule[];
    agentSize: number;
    speed: number;
  }
  
  export interface GameMode {
  id: string;
  name: string;
  description: string;
  shapes: Shape[];
}

export const RPS_SHAPES: Shape[] = [
  { id: 'rock', name: 'Rock', emoji: '🗿', color: 'hsl(220, 15%, 60%)' },
  { id: 'paper', name: 'Paper', emoji: '📄', color: 'hsl(45, 85%, 70%)' },
  { id: 'scissors', name: 'Scissors', emoji: '✂️', color: 'hsl(0, 85%, 65%)' }
];

export const RPSLS_SHAPES: Shape[] = [
  { id: 'rock', name: 'Rock', emoji: '🗿', color: 'hsl(220, 15%, 60%)' },
  { id: 'spock', name: 'Spock', emoji: '🖖', color: 'hsl(200, 50%, 50%)' },
  { id: 'paper', name: 'Paper', emoji: '📄', color: 'hsl(45, 85%, 70%)' },
  { id: 'lizard', name: 'Lizard', emoji: '🦎', color: 'hsl(120, 40%, 60%)' },
  { id: 'scissors', name: 'Scissors', emoji: '✂️', color: 'hsl(0, 85%, 65%)' },
];

export const RPS15_SHAPES: Shape[] = [
  { id: 'rock', name: 'Rock', emoji: '🗿', color: 'hsl(60, 60%, 70%)' },
  { id: 'gun', name: 'Gun', emoji: '🔫', color: 'hsl(240, 15%, 60%)' },
  { id: 'lightning', name: 'Lightning', emoji: '⚡', color: 'hsl(300, 50%, 70%)' },
  { id: 'devil', name: 'Devil', emoji: '😈', color: 'hsl(270, 60%, 50%)' },
  { id: 'dragon', name: 'Dragon', emoji: '🐉', color: 'hsl(30, 60%, 60%)' },
  { id: 'water', name: 'Water', emoji: '🌊', color: 'hsl(210, 70%, 60%)' },
  { id: 'air', name: 'Air', emoji: '💨', color: 'hsl(180, 40%, 70%)' },
  { id: 'paper', name: 'Paper', emoji: '📄', color: 'hsl(40, 60%, 70%)' },
  { id: 'sponge', name: 'Sponge', emoji: '🧽', color: 'hsl(50, 80%, 50%)' },
  { id: 'wolf', name: 'Wolf', emoji: '🐺', color: 'hsl(20, 30%, 40%)' },
  { id: 'tree', name: 'Tree', emoji: '🌳', color: 'hsl(100, 40%, 40%)' },
  { id: 'human', name: 'Human', emoji: '👤', color: 'hsl(0, 0%, 50%)' },
  { id: 'snake', name: 'Snake', emoji: '🐍', color: 'hsl(120, 60%, 50%)' },
  { id: 'scissors', name: 'Scissors', emoji: '✂️', color: 'hsl(0, 0%, 80%)' },
  { id: 'fire', name: 'Fire', emoji: '🔥', color: 'hsl(10, 90%, 60%)' },
];

export const RPS101_SHAPES: Shape[] = [
  { id: 'dynamite-1', name: 'Dynamite', emoji: '🧨', color: 'hsl(30, 80%, 50%)' },
  { id: 'nuke-2', name: 'Nuke', emoji: '☢️', color: 'hsl(0, 0%, 30%)' },
  { id: 'lightning-3', name: 'Lightning', emoji: '⚡', color: 'hsl(300, 50%, 70%)' },
  { id: 'devil-4', name: 'Devil', emoji: '😈', color: 'hsl(270, 60%, 50%)' },
  { id: 'dragon-5', name: 'Dragon', emoji: '🐉', color: 'hsl(30, 60%, 60%)' },
  { id: 'alien-6', name: 'Alien', emoji: '👽', color: 'hsl(150, 50%, 60%)' },
  { id: 'water-7', name: 'Water', emoji: '🌊', color: 'hsl(210, 70%, 60%)' },
  { id: 'bowl-8', name: 'Bowl', emoji: '🥣', color: 'hsl(200, 30%, 70%)' },
  { id: 'air-9', name: 'Air', emoji: '💨', color: 'hsl(180, 40%, 70%)' },
  { id: 'moon-10', name: 'Moon', emoji: '🌕', color: 'hsl(40, 10%, 80%)' },
  { id: 'paper-11', name: 'Paper', emoji: '📄', color: 'hsl(40, 60%, 70%)' },
  { id: 'sponge-12', name: 'Sponge', emoji: '🧽', color: 'hsl(50, 80%, 50%)' },
  { id: 'wolf-13', name: 'Wolf', emoji: '🐺', color: 'hsl(20, 30%, 40%)' },
  { id: 'cockroach-14', name: 'Cockroach', emoji: '🪳', color: 'hsl(10, 20%, 20%)' },
  { id: 'tree-15', name: 'Tree', emoji: '🌳', color: 'hsl(100, 40%, 40%)' },
  { id: 'man-16', name: 'Man', emoji: '👨', color: 'hsl(200, 10%, 40%)' },
  { id: 'woman-17', name: 'Woman', emoji: '👩', color: 'hsl(340, 50%, 70%)' },
  { id: 'monkey-18', name: 'Monkey', emoji: '🐒', color: 'hsl(30, 40%, 50%)' },
  { id: 'snake-19', name: 'Snake', emoji: '🐍', color: 'hsl(120, 60%, 50%)' },
  { id: 'axe-20', name: 'Axe', emoji: '🪓', color: 'hsl(0, 0%, 40%)' },
  { id: 'scissors-21', name: 'Scissors', emoji: '✂️', color: 'hsl(0, 0%, 80%)' },
  { id: 'fire-22', name: 'Fire', emoji: '🔥', color: 'hsl(10, 90%, 60%)' },
  { id: 'sun-23', name: 'Sun', emoji: '☀️', color: 'hsl(40, 100%, 70%)' },
  { id: 'camera-24', name: 'Camera', emoji: '📸', color: 'hsl(0, 0%, 60%)' },
  { id: 'chainsaw-25', name: 'Chainsaw', emoji: '🪚', color: 'hsl(20, 50%, 40%)' },
  { id: 'school-26', name: 'School', emoji: '🏫', color: 'hsl(220, 30%, 70%)' },
  { id: 'poison-27', name: 'Poison', emoji: '🧪', color: 'hsl(120, 70%, 40%)' },
  { id: 'cage-28', name: 'Cage', emoji: '⛓️', color: 'hsl(0, 0%, 45%)' },
  { id: 'peace-29', name: 'Peace', emoji: '☮️', color: 'hsl(180, 50%, 70%)' },
  { id: 'computer-30', name: 'Computer', emoji: '💻', color: 'hsl(240, 10%, 20%)' },
  { id: 'porcupine-31', name: 'Porcupine', emoji: '🦔', color: 'hsl(40, 20%, 50%)' },
  { id: 'vulture-32', name: 'Vulture', emoji: '🦅', color: 'hsl(0, 0%, 35%)' },
  { id: 'king-33', name: 'King', emoji: '👑', color: 'hsl(40, 100%, 60%)' },
  { id: 'queen-34', name: 'Queen', emoji: '👸', color: 'hsl(300, 70%, 80%)' },
  { id: 'prince-35', name: 'Prince', emoji: '🤴', color: 'hsl(220, 50%, 70%)' },
  { id: 'princess-36', name: 'Princess', emoji: '👸🏽', color: 'hsl(330, 60%, 75%)' },
  { id: 'police-37', name: 'Police', emoji: '👮', color: 'hsl(240, 40%, 30%)' },
  { id: 'baby-38', name: 'Baby', emoji: '👶', color: 'hsl(10, 50%, 80%)' },
  { id: 'home-39', name: 'Home', emoji: '🏠', color: 'hsl(40, 30%, 50%)' },
  { id: 'train-40', name: 'Train', emoji: '🚂', color: 'hsl(10, 20%, 30%)' },
  { id: 'car-41', name: 'Car', emoji: '🚗', color: 'hsl(0, 70%, 60%)' },
  { id: 'noise-42', name: 'Noise', emoji: '🔊', color: 'hsl(0, 0%, 70%)' },
  { id: 'bicycle-43', name: 'Bicycle', emoji: '🚲', color: 'hsl(120, 10%, 50%)' },
  { id: 'turnip-44', name: 'Turnip', emoji: '🧅', color: 'hsl(270, 30%, 70%)' },
  { id: 'duck-45', name: 'Duck', emoji: '🦆', color: 'hsl(40, 80%, 70%)' },
  { id: 'cat-46', name: 'Cat', emoji: '🐱', color: 'hsl(20, 20%, 60%)' },
  { id: 'bird-47', name: 'Bird', emoji: '🐦', color: 'hsl(200, 60%, 70%)' },
  { id: 'fish-48', name: 'Fish', emoji: '🐠', color: 'hsl(180, 70%, 60%)' },
  { id: 'spider-49', name: 'Spider', emoji: '🕷️', color: 'hsl(0, 0%, 15%)' },
  { id: 'brain-50', name: 'Brain', emoji: '🧠', color: 'hsl(0, 60%, 70%)' },
  { id: 'community-51', name: 'Community', emoji: '🏘️', color: 'hsl(120, 20%, 50%)' },
  { id: 'cross-52', name: 'Cross', emoji: '✝️', color: 'hsl(0, 0%, 25%)' },
  { id: 'money-53', name: 'Money', emoji: '💸', color: 'hsl(100, 70%, 50%)' },
  { id: 'vampire-54', name: 'Vampire', emoji: '🧛', color: 'hsl(340, 80%, 30%)' },
  { id: 'church-55', name: 'Church', emoji: '⛪', color: 'hsl(40, 10%, 40%)' },
  { id: 'butter-56', name: 'Butter', emoji: '🧈', color: 'hsl(50, 90%, 80%)' },
  { id: 'book-57', name: 'Book', emoji: '📚', color: 'hsl(220, 20%, 40%)' },
  { id: 'cloud-58', name: 'Cloud', emoji: '☁️', color: 'hsl(200, 10%, 90%)' },
  { id: 'airplane-59', name: 'Airplane', emoji: '✈️', color: 'hsl(200, 5%, 70%)' },
  { id: 'grass-60', name: 'Grass', emoji: '🌿', color: 'hsl(90, 40%, 50%)' },
  { id: 'film-61', name: 'Film', emoji: '🎞️', color: 'hsl(0, 0%, 10%)' },
  { id: 'toilet-62', name: 'Toilet', emoji: '🚽', color: 'hsl(200, 5%, 95%)' },
  { id: 'planet-63', name: 'Planet', emoji: '🪐', color: 'hsl(120, 30%, 40%)' },
  { id: 'guitar-64', name: 'Guitar', emoji: '🎸', color: 'hsl(30, 40%, 30%)' },
  { id: 'cup-65', name: 'Cup', emoji: '☕', color: 'hsl(40, 20%, 70%)' },
  { id: 'beer-66', name: 'Beer', emoji: '🍺', color: 'hsl(40, 80%, 50%)' },
  { id: 'rain-67', name: 'Rain', emoji: '🌧️', color: 'hsl(210, 30%, 60%)' },
  { id: 'tv-68', name: 'TV', emoji: '📺', color: 'hsl(0, 0%, 20%)' },
  { id: 'rainbow-69', name: 'Rainbow', emoji: '🌈', color: 'hsl(280, 80%, 70%)' },
  { id: 'ufo-70', name: 'UFO', emoji: '🛸', color: 'hsl(270, 50%, 60%)' },
  { id: 'prayer-71', name: 'Prayer', emoji: '🙏', color: 'hsl(40, 60%, 80%)' },
  { id: 'mountain-72', name: 'Mountain', emoji: '🏔️', color: 'hsl(120, 10%, 30%)' },
  { id: 'satan-73', name: 'Satan', emoji: '👹', color: 'hsl(0, 80%, 40%)' },
  { id: 'diamond-74', name: 'Diamond', emoji: '💎', color: 'hsl(180, 100%, 70%)' },
  { id: 'platinum-75', name: 'Platinum', emoji: '💍', color: 'hsl(0, 0%, 85%)' },
  { id: 'gold-76', name: 'Gold', emoji: '🥇', color: 'hsl(50, 100%, 50%)' },
  { id: 'fence-77', name: 'Fence', emoji: '🚧', color: 'hsl(30, 20%, 40%)' },
  { id: 'video-game-78', name: 'Video Game', emoji: '🎮', color: 'hsl(240, 50%, 30%)' },
  { id: 'math-79', name: 'Math', emoji: '➕', color: 'hsl(200, 20%, 50%)' },
  { id: 'robot-80', name: 'Robot', emoji: '🤖', color: 'hsl(200, 10%, 60%)' },
  { id: 'heart-81', name: 'Heart', emoji: '❤️', color: 'hsl(0, 80%, 60%)' },
  { id: 'electricity-82', name: 'Electricity', emoji: '🔌', color: 'hsl(40, 100%, 60%)' },
  { id: 'medusa-83', name: 'Medusa', emoji: '⚕️', color: 'hsl(100, 40%, 30%)' },
  { id: 'power-84', name: 'Power', emoji: '🔋', color: 'hsl(120, 60%, 40%)' },
  { id: 'laser-85', name: 'Laser', emoji: '💥', color: 'hsl(0, 100%, 50%)' },
  { id: 'sky-86', name: 'Sky', emoji: '☁️', color: 'hsl(210, 50%, 80%)' },
  { id: 'tank-87', name: 'Tank', emoji: ' Panzer', color: 'hsl(80, 20%, 30%)' },
  { id: 'helicopter-88', name: 'Helicopter', emoji: '🚁', color: 'hsl(280, 10%, 40%)' },
  { id: 'tornado-89', name: 'Tornado', emoji: '🌪️', color: 'hsl(240, 30%, 50%)' },
  { id: 'quicksand-90', name: 'Quicksand', emoji: '⏳', color: 'hsl(30, 40%, 30%)' },
  { id: 'pit-91', name: 'Pit', emoji: '🕳️', color: 'hsl(0, 0%, 10%)' },
  { id: 'chain-92', name: 'Chain', emoji: '⛓️', color: 'hsl(0, 0%, 50%)' },
  { id: 'law-93', name: 'Law', emoji: '⚖️', color: 'hsl(220, 40%, 50%)' },
  { id: 'whip-94', name: 'Whip', emoji: '📏', color: 'hsl(40, 50%, 40%)' },
  { id: 'sword-95', name: 'Sword', emoji: '🗡️', color: 'hsl(0, 0%, 60%)' },
  { id: 'rock-96', name: 'Rock', emoji: '🗿', color: 'hsl(60, 60%, 70%)' },
  { id: 'death-97', name: 'Death', emoji: '💀', color: 'hsl(0, 0%, 20%)' },
  { id: 'wall-98', name: 'Wall', emoji: '🧱', color: 'hsl(30, 20%, 50%)' },
  { id: 'human-99', name: 'Human', emoji: '👤', color: 'hsl(0, 0%, 50%)' },
  { id: 'wolf-100', name: 'Wolf', emoji: '🐺', color: 'hsl(20, 30%, 40%)' },
  { id: 'snake-101', name: 'Snake', emoji: '🐍', color: 'hsl(120, 60%, 50%)' },
];

export const RPS25_SHAPES: Shape[] = [
  { id: 'rock', name: 'Rock', emoji: '🗿', color: 'hsl(60, 60%, 70%)' },
  { id: 'gun', name: 'Gun', emoji: '🔫', color: 'hsl(240, 15%, 60%)' },
  { id: 'dynamite', name: 'Dynamite', emoji: '🧨', color: 'hsl(30, 80%, 50%)' },
  { id: 'nuke', name: 'Nuke', emoji: '☢️', color: 'hsl(0, 0%, 30%)' },
  { id: 'lightning', name: 'Lightning', emoji: '⚡', color: 'hsl(300, 50%, 70%)' },
  { id: 'devil', name: 'Devil', emoji: '😈', color: 'hsl(270, 60%, 50%)' },
  { id: 'dragon', name: 'Dragon', emoji: '🐉', color: 'hsl(30, 60%, 60%)' },
  { id: 'alien', name: 'Alien', emoji: '👽', color: 'hsl(150, 50%, 60%)' },
  { id: 'water', name: 'Water', emoji: '🌊', color: 'hsl(210, 70%, 60%)' },
  { id: 'bowl', name: 'Bowl', emoji: '🥣', color: 'hsl(200, 30%, 70%)' },
  { id: 'air', name: 'Air', emoji: '💨', color: 'hsl(180, 40%, 70%)' },
  { id: 'moon', name: 'Moon', emoji: '🌕', color: 'hsl(40, 10%, 80%)' },
  { id: 'paper', name: 'Paper', emoji: '📄', color: 'hsl(40, 60%, 70%)' },
  { id: 'sponge', name: 'Sponge', emoji: '🧽', color: 'hsl(50, 80%, 50%)' },
  { id: 'wolf', name: 'Wolf', emoji: '🐺', color: 'hsl(20, 30%, 40%)' },
  { id: 'cockroach', name: 'Cockroach', emoji: '🪳', color: 'hsl(10, 20%, 20%)' },
  { id: 'tree', name: 'Tree', emoji: '🌳', color: 'hsl(100, 40%, 40%)' },
  { id: 'man', name: 'Man', emoji: '👨', color: 'hsl(200, 10%, 40%)' },
  { id: 'woman', name: 'Woman', emoji: '👩', color: 'hsl(340, 50%, 70%)' },
  { id: 'monkey', name: 'Monkey', emoji: '🐒', color: 'hsl(30, 40%, 50%)' },
  { id: 'snake', name: 'Snake', emoji: '🐍', color: 'hsl(120, 60%, 50%)' },
  { id: 'axe', name: 'Axe', emoji: '🪓', color: 'hsl(0, 0%, 40%)' },
  { id: 'scissors', name: 'Scissors', emoji: '✂️', color: 'hsl(0, 0%, 80%)' },
  { id: 'fire', name: 'Fire', emoji: '🔥', color: 'hsl(10, 90%, 60%)' },
  { id: 'sun', name: 'Sun', emoji: '☀️', color: 'hsl(40, 100%, 70%)' },
];

export const GAME_MODES: GameMode[] = [
  {
    id: 'classic',
    name: 'Classic',
    description: 'Rock, Paper, Scissors - The original battle',
    shapes: RPS_SHAPES
  },
  {
    id: 'extended',
    name: 'Extended',
    description: 'Rock, Paper, Scissors, Lizard, Spock - The great battle',
    shapes: RPSLS_SHAPES
  },
  {
    id: 'rps15',
    name: 'RPS15',
    description: '15-way battle - The greatest battle',
    shapes: RPS15_SHAPES
  },
  {
    id: 'rps25',
    name: 'RPS25',
    description: '25-way battle - The ultimate battle',
    shapes: RPS25_SHAPES
  },
  {
    id: 'rps101',
    name: 'RPS101',
    description: '101-way battle - Just unoptimised ridiculousness',
    shapes: RPS101_SHAPES
  }
];

export function determineWinner(
  check: Shape,
  against: Shape,
  allShapes: Shape[]
): boolean {
  const numShapes = allShapes.length;
  
  if (numShapes % 2 === 0) {
    throw new Error("Error: The total number of shapes must be an odd number for this game logic.");
  }

  const playerIndex = allShapes.findIndex(s => s.id === check.id);
  const computerIndex = allShapes.findIndex(s => s.id === against.id);

  if (playerIndex === -1 || computerIndex === -1) {
    throw new Error("Error: One or both chosen shapes were not found in the provided 'allShapes' array.");
  }

  if (playerIndex === computerIndex) {
    return false;
  }

  const beatsCount = (numShapes - 1) / 2;
  const distance = (computerIndex - playerIndex + numShapes) % numShapes;


  if (distance > 0 && distance <= beatsCount) {
    return false;
  }

  return true;
}