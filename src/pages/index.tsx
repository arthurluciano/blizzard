import { useState } from 'react'

import { GetServerSideProps } from 'next'
import Image from 'next/image'

import clsx from 'clsx'
import { CaretDown, Play, User } from 'phosphor-react'

import { OutlinedButton } from '../components/buttons/OutlinedButton'
import { PrimaryButton } from '../components/buttons/PrimaryButton'
import { Logo } from '../components/Logo'
import { GameData, GAME_DATA } from '../utils/auxiliar-game-data'

const NAVBAR_OPTIONS = ['Jogos', 'Esportes', 'Loja', 'Notícias', 'Suporte']

interface LandingPageProps {
  data: GameData[]
}

export default function LandingPage({ data: gameData }: LandingPageProps) {
  const [selectedGame, setSelectedGame] = useState<GameData>(gameData[0])

  const progress =
    (100 * gameData.findIndex(game => game.name === selectedGame.name) + 1) / gameData.length + 25

  return (
    <>
      <div
        className={`h-[46rem] w-full bg-no-repeat bg-cover bg-top flex flex-col transition-[background]`}
        style={{
          backgroundImage: `url('${selectedGame.images.banner}')`,
        }}
      >
        <header className="w-full border-b-2 border-[#FFFFFF0A]">
          <div className="mx-auto max-w-7xl w-full py-7 flex items-center justify-between relative">
            <Logo />
            <nav className="ml-28">
              <ul className="flex gap-x-8">
                {NAVBAR_OPTIONS.map((option, index) => (
                  <li
                    key={`option-${index}`}
                    className="text-sm flex items-center gap-x-3 font-medium cursor-pointer"
                  >
                    {option} <CaretDown size={12} weight="bold" color="#FFFFFF60" />
                  </li>
                ))}
              </ul>
            </nav>
            <div className="w-full flex justify-end gap-x-4">
              <OutlinedButton type="button" size="small">
                Criar conta
              </OutlinedButton>
              <PrimaryButton type="button" size="small">
                <User size={18} weight="bold" />
                Logar
              </PrimaryButton>
            </div>

            <div className="bg-brand-500 h-[2px] w-[42px] absolute left-0 -bottom-[2px]" />
          </div>
        </header>

        <section className="flex items-center justify-between h-[40rem] w-full max-w-7xl mx-auto">
          <div className="flex flex-col gap-y-5">
            {gameData.map((game, index) => (
              <button
                key={`game-{${index}}`}
                type="button"
                className={clsx(
                  'h-12 w-12 transition-all',
                  game.name !== selectedGame.name && 'grayscale brightness-125'
                )}
                onClick={() => setSelectedGame(game)}
              >
                <Image src={game.images.icon} alt="Game icon" width={48} height={48} />
              </button>
            ))}
          </div>

          <div className="flex flex-col max-w-xl gap-y-8 mb-9">
            <div className="flex flex-col gap-y-6">
              <h1 className="font-bold text-6xl">{selectedGame.texts.title}</h1>
              <span className="font-normal text-lg">{selectedGame.texts.description}</span>
            </div>

            <PrimaryButton type="button" size="medium">
              Jogue agora
            </PrimaryButton>
          </div>

          <div className="flex flex-col h-full justify-around">
            <div className="select-none">
              <Image src={selectedGame.images.logo} alt="Game logo" width={280} height={154} />
            </div>

            <div className="flex flex-col items-end gap-y-4">
              <span className="text-xs font-semibold uppercase">Assista o trailer</span>
              <div
                className="select-none cursor-pointer w-[280px] h-[158px] bg-cover bg-no-repeat bg-center flex items-center justify-center"
                style={{
                  backgroundImage: `url(${selectedGame.images.preview})`,
                }}
              >
                <div className="h-[51px] w-[51px] z-10 rounded-full bg-gradient-to-r from-[#07070adb] to-[#0f10167f] backdrop-blur-[1.5] flex items-center justify-center">
                  <Play size={20} weight="fill" color="#00AEFF" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="h-1 bg-brand-500 transition-all"
          style={{ width: `${progress > 100 ? 100 : progress}%` }}
        />
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<LandingPageProps> = async () => {
  return {
    props: {
      data: GAME_DATA,
    },
  }
}
