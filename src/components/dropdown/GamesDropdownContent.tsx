import Image from 'next/image'

const GAMES_DROPDOWN = [
  {
    name: 'Diablo® II ressurected',
    src: 'diablo-refor.png',
  },
  {
    name: 'Overwatch® 2',
    src: 'ow2-icon.png',
  },
  {
    name: 'World of Warcraft®',
    src: 'wow-icon.png',
  },
  {
    name: 'Hearthstone®',
    src: 'hearthstone-icon.png',
  },
  {
    name: 'Heroes of the storm®',
    src: 'heroes-icon.png',
  },
  {
    name: 'Warcraft® III Reforged',
    src: 'warcraft3-icon.png',
  },
  {
    name: 'Diablo® IV',
    src: 'diablo4-icon.png',
  },
  {
    name: 'Diablo® Immortal',
    src: 'diablo-imt-icon.png',
  },
  {
    name: 'Diablo® III',
    src: 'diablo3-icon.png',
  },
  {
    name: 'StarCraft® II',
    src: 'sc2-icon.png',
  },
  {
    name: 'StarCraft® Remastered',
    src: 'sc-remas-icon.png',
  },
  {
    name: 'Arcade da Blizzard®',
    src: 'arcade-icon.png',
  },
]

export function GamesDropdownContent() {
  return (
    <div className="w-full h-[474px] py-[72px] flex gap-6 justify-between flex-wrap">
      {GAMES_DROPDOWN.map((game, index) => (
        <a
          key={`game-dp-${index}`}
          href="#"
          className="flex flex-col items-center w-[176px] h-[176px] gap-y-2"
        >
          <Image src={`/games/${game.src}`} alt="" width={70} height={70} />

          <span className="text-sm font-medium text-[#9D9D9D] text-center">{game.name}</span>
        </a>
      ))}
    </div>
  )
}
