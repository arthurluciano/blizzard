import Image from 'next/image'

import { ExclusiveGame } from '../../pages'
import { GridIcon } from '../icons/GridIcon'
import { NintendoIcon } from '../icons/NintendoIcon'
import { PlaystationIcon } from '../icons/PlaystationIcon'
import { WhiteBlizzardIcon } from '../icons/WhiteBlizzardIcon'
import { XboxIcon } from '../icons/XboxIcon'
import { Logo } from '../Logo'

interface ExclusiveGamesProps {
  data: ExclusiveGame[]
}

export function ExclusiveGames({ data }: ExclusiveGamesProps) {
  return (
    <main className="mx-auto max-w-7xl w-full flex flex-col gap-y-20 py-20">
      <section className="w-full flex justify-between">
        <div className="flex gap-x-[171px]">
          <span className="font-semibold text-sm text-[#8F9199] mt-4">GAMES</span>

          <h2 className="text-[32px] font-bold self-start">
            Jogos <br /> exclusivos
          </h2>
        </div>

        <div className="flex items-center gap-x-6 self-end">
          <a href="#">
            <WhiteBlizzardIcon />
          </a>
          <a href="#">
            <NintendoIcon />
          </a>
          <a href="#">
            <XboxIcon />
          </a>
          <a href="#">
            <PlaystationIcon />
          </a>
        </div>

        <a href="#" className="flex items-center gap-x-[10px] text-brand-500 self-end">
          <GridIcon />
          Ver todos os jogos
        </a>
      </section>

      <section className="grid grid-cols-4 gap-x-8 gap-y-11 ">
        {data.map((game, index) => (
          <div key={`game-${index}`} className="flex flex-col cursor-pointer">
            <div className="h-[412px] max-w-[300px] w-full overflow-hidden relative rounded">
              <div className="absolute h-full w-full bg-gradient-to-b from-[#00000040] to-transparent z-10 pointer-events-none"></div>

              <Image
                src={game.image}
                alt={game.name}
                className="transition scale-100 hover:scale-110 h-full w-full object-cover"
                width={300}
                height={412}
              />

              <Image
                src={game.logo}
                alt={game.name}
                className="absolute z-10 bottom-11 right-[50%] translate-x-[50%] pointer-events-none"
                width={159}
                height={105}
              />
            </div>

            <div className="flex flex-col justify-center gap-y-1 mt-4">
              <strong className="text-xl font-semibold">{game.name}</strong>
              <span className="text-base text-[#E5E5E5CC]">{game.category}</span>
            </div>
          </div>
        ))}
        <div className="flex flex-col cursor-pointer">
          <div className="h-[412px] max-w-[300px] w-full overflow-hidden relative rounded border border-solid border-[#212428] flex flex-col items-center justify-center gap-y-9">
            <Logo />

            <div className="flex items-center gap-x-3">
              <GridIcon color="#C4C4C4" />
              Ver todos os jogos
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
