import { Star } from 'lucide-react';

const game = [
  {
    id: 'game1',
    name: 'Battle Clash',
    developer: 'EpicWar Inc.',
    rating: 4.5,
    description: 'Multiplayer shooter with realistic action and gear upgrades.',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg', // Counter-Strike
  },
  {
    id: 'game2',
    name: 'Racing Rush',
    developer: 'SpeedX Studio',
    rating: 4.3,
    description: 'High-speed racing game with customizable cars and tracks.',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg', // PUBG
  },
  {
    id: 'game3',
    name: 'Puzzle Kingdom',
    developer: 'LogicLab',
    rating: 4.8,
    description: 'Solve mysteries and unlock ancient secrets through puzzles.',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg', // Fall Guys
  },
  {
    id: 'game4',
    name: 'Zombie Siege',
    developer: 'ApocPlay',
    rating: 4.2,
    description: 'Survive zombie waves in this strategic tower defense game.',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg', // Apex Legends
  },
  {
    id: 'game5',
    name: 'Fantasy Quest',
    developer: 'Mythic Devs',
    rating: 4.6,
    description: 'Epic RPG journey with dragons, dungeons, and loot.',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1097150/header.jpg', // Destiny 2
  },
  {
    id: 'game6',
    name: 'Pixel Jump',
    developer: 'RetroStudios',
    rating: 4.1,
    description: 'Classic pixel-style platformer with crazy levels.',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/291550/header.jpg', // Brawlhalla
  },
  {
    id: 'game7',
    name: 'Sniper Elite',
    developer: 'ShotFire Games',
    rating: 4.4,
    description: 'Precision sniper missions with realistic ballistics.',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/444200/header.jpg', // Paladins
  },
  {
    id: 'game8',
    name: 'Sky Battle',
    developer: 'FlightWorks',
    rating: 4.3,
    description: 'Air combat simulation with jets and missiles.',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg', // Dark Souls III
  },
  {
    id: 'game9',
    name: 'Jungle Run',
    developer: 'DashStudio',
    rating: 4.0,
    description: 'Endless runner in the jungle with traps and rewards.',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg', // Red Dead Redemption 2
  },
  {
    id: 'game10',
    name: 'Mind Maze',
    developer: 'BrainBurst',
    rating: 4.7,
    description: 'Challenging brain games to test your logic.',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg', // GTA V
  },
  {
    id: 'game11',
    name: 'City Builder',
    developer: 'UrbanLogic',
    rating: 4.3,
    description: 'Create your dream city and manage its economy.',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/812140/header.jpg', // Assassin's Creed Odyssey
  },
  {
    id: 'game12',
    name: 'Alien Invasion',
    developer: 'SpaceXeno',
    rating: 4.1,
    description: 'Defend Earth from incoming alien waves.',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1328670/header.jpg', // Cyberpunk 2077
  },
  {
    id: 'game13',
    name: 'Speed Boat',
    developer: 'WaveRace',
    rating: 4.2,
    description: 'Speedboat races across rivers and oceans.',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/230410/header.jpg', // Warframe
  },
  {
    id: 'game14',
    name: 'Robot War',
    developer: 'MechX',
    rating: 4.5,
    description: 'Assemble robots and dominate in futuristic arenas.',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg', // Dead by Daylight
  },
  {
    id: 'game15',
    name: 'Desert Storm',
    developer: 'WarZoneX',
    rating: 4.3,
    description: 'Combat strategy set in harsh desert environments.',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/39210/header.jpg', // Final Fantasy XIV
  },
  {
    id: 'game16',
    name: 'Sky Jump',
    developer: 'CloudDash',
    rating: 4.0,
    description: 'Jump between clouds and avoid lightning!',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/359550/header.jpg', // Rainbow Six Siege
  },
  {
    id: 'game17',
    name: 'Underwater Hunt',
    developer: 'AquaPlay',
    rating: 4.6,
    description: 'Explore oceans, find treasures, and fight sharks.',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/582010/header.jpg', // Monster Hunter: World
  },
  {
    id: 'game18',
    name: 'Monster Smash',
    developer: 'SmashLab',
    rating: 4.4,
    description: 'Destroy monsters in this fast-paced arcade game.',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/236390/header.jpg', // War Thunder
  },
  {
    id: 'game19',
    name: 'Cyber Runner',
    developer: 'NeoArcade',
    rating: 4.7,
    description: 'A neon-glow futuristic parkour experience.',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg', // Hades
  },
  {
    id: 'game20',
    name: 'Alien Farm',
    developer: 'GalacticGrow',
    rating: 4.2,
    description: 'Grow space crops and trade with alien species.',
    thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1286680/header.jpg', // Phasmophobia
  },
];


const GamePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 py-10">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">🎮 Welcome to GameZone</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {game.map(app => (
                        <div
                            key={app.id}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <img
                                src={app.thumbnail}
                                alt={app.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 space-y-2">
                                <h2 className="text-lg font-bold text-gray-800">{app.name}</h2>
                                <p className="text-sm text-gray-500">{app.developer}</p>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <Star size={16} fill="currentColor" />
                                    <span className="font-semibold">{app.rating}</span>
                                    <span className="text-xs text-gray-500">/5</span>
                                </div>
                                <p className="text-sm text-gray-600 line-clamp-2">{app.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GamePage;
