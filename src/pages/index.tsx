import { ReactNode, useState } from 'react'

import { GetServerSideProps } from 'next'
import Image from 'next/image'

import clsx from 'clsx'
import { CaretDown, ChatCircleDots, Download, Play, User } from 'phosphor-react'

import { DownloadButton } from '../components/buttons/DownloadButton'
import { OutlinedButton } from '../components/buttons/OutlinedButton'
import { PrimaryButton } from '../components/buttons/PrimaryButton'
import { DropdownMenu, DropdownMenuLink } from '../components/dropdown/DropdownMenu'
import { EsportsDropdownContent } from '../components/dropdown/EsportsDropdownContent'
import { GamesDropdownContent } from '../components/dropdown/GamesDropdownContent'
import { BlizzardIcon } from '../components/icons/BlizzardIcon'
import { BuyIcon } from '../components/icons/BuyIcon'
import { ChatIcon } from '../components/icons/ChatIcon'
import { DownloadIcon } from '../components/icons/DownloadIcon'
import { GridIcon } from '../components/icons/GridIcon'
import { NintendoIcon } from '../components/icons/NintendoIcon'
import { PlaylistIcon } from '../components/icons/PlaylistIcon'
import { PlaystationIcon } from '../components/icons/PlaystationIcon'
import { SmartphoneIcon } from '../components/icons/SmartphoneIcon'
import { ThreeDotsIcon } from '../components/icons/ThreeDotsIcon'
import { TrophyIcon } from '../components/icons/TrophyIcon'
import { WhiteBlizzardIcon } from '../components/icons/WhiteBlizzardIcon'
import { XboxIcon } from '../components/icons/XboxIcon'
import { Logo } from '../components/Logo'
import { ProgressBar } from '../components/ProgressBar'
import { GameData, GAME_DATA } from '../utils/auxiliar-game-data'

export interface NavbarOption {
  name: string
  dropdown?: {
    content: ReactNode
    links: DropdownMenuLink[]
  }
}

const NAVBAR_OPTIONS: NavbarOption[] = [
  {
    name: 'Jogos',
    dropdown: {
      content: <GamesDropdownContent />,
      links: [
        {
          icon: <GridIcon />,
          label: 'Ver todos os jogos',
        },
        {
          icon: <BlizzardIcon />,
          label: 'Aplicativo Battle.net',
        },
        {
          icon: <DownloadIcon />,
          label: 'Downloads',
        },
        {
          icon: <ChatIcon />,
          label: 'Fóruns dos jogos',
        },
      ],
    },
  },
  {
    name: 'Esportes',
    dropdown: {
      content: <EsportsDropdownContent />,
      links: [{ icon: <TrophyIcon />, label: 'Torneios da comunidade' }],
    },
  },
  {
    name: 'Loja',
  },
  {
    name: 'Notícias',
  },
  {
    name: 'Suporte',
  },
]

interface BrChallengesResponse {
  data: {
    name: string
    category: string
    image: string
    logo: string
  }[]
}

export default function LandingPage({ data }: BrChallengesResponse) {
  const [selectedGame, setSelectedGame] = useState<GameData>(GAME_DATA[0])

  const [openedMenu, setOpenedMenu] = useState<NavbarOption | null>(null)

  const progress =
    (100 * GAME_DATA.findIndex(game => game.name === selectedGame.name) + 1) / GAME_DATA.length + 25

  function handleSelectGame(game: GameData, index: number) {
    if (index > 2) return

    setSelectedGame(game)
  }

  function handleClickNavbarOption(option: NavbarOption) {
    if (!option.dropdown) {
      return
    }

    if (option.name === openedMenu?.name) {
      setOpenedMenu(null)
      return
    }

    setOpenedMenu(option)
  }

  return (
    <>
      <div
        className={`h-[46rem] w-full bg-no-repeat bg-cover bg-top flex flex-col transition-[background] relative`}
        style={{
          backgroundImage: `url('${selectedGame.images.banner}')`,
        }}
      >
        <DropdownMenu opened={openedMenu} setOpened={setOpenedMenu} />

        <header className="w-full border-b-2 border-[#FFFFFF0A] z-30">
          <div className="mx-auto max-w-7xl w-full py-7 flex items-center justify-between relative">
            <Logo />
            <nav className="ml-28">
              <ul className="flex gap-x-8">
                {NAVBAR_OPTIONS.map((option, index) => (
                  <li
                    key={`option-${index}`}
                    className="text-sm flex items-center gap-x-3 font-medium cursor-pointer"
                    onClick={() => handleClickNavbarOption(option)}
                  >
                    {option.name}
                    {option.dropdown && (
                      <CaretDown
                        size={12}
                        weight="bold"
                        color={option.name === openedMenu?.name ? '#00AEFF' : '#FFFFFF60'}
                        className={clsx(
                          'rotate-0 transition-transform',
                          option.name === openedMenu?.name && 'rotate-180'
                        )}
                      />
                    )}
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
            {GAME_DATA.map((game, index) => (
              <button
                key={`game-{${index}}`}
                type="button"
                className={clsx(
                  'h-12 w-12 transition-all',
                  game.name !== selectedGame.name && 'grayscale brightness-125'
                )}
                onClick={() => handleSelectGame(game, index)}
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

            <PrimaryButton type="button" size={selectedGame.released ? 'medium' : 'large'}>
              {selectedGame.released ? (
                'Jogue agora'
              ) : (
                <>
                  <User size={18} weight="bold" /> Reserve agora na pré-venda
                </>
              )}
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
                <div className="h-[51px] w-[51px] z-[1] rounded-full bg-gradient-to-r from-[#07070adb] to-[#0f10167f] backdrop-blur-[1.5] flex items-center justify-center">
                  <Play size={20} weight="fill" color="#00AEFF" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProgressBar progress={progress} />
      </div>
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
      <footer className="h-[852px] w-full bg-[url('/footer-background.png')] bg-center bg-cover overflow-hidden">
        <div className="h-full w-full mx-auto max-w-7xl flex relative">
          <section className="flex flex-col gap-y-[30px] mt-[132px]">
            <a href="#">
              <Image src="/logo-battle-net.png" alt="Battle.net logo" width={133.22} height={16} />
            </a>

            <h1 className="text-[32px] font-bold">Baixe agora o battle.net</h1>

            <div className="flex flex-col gap-y-6">
              <div className="flex gap-x-4">
                <PlaylistIcon />
                <span className="text-[#828792] font-normal text-lg">
                  Seus jogos em um só lugar
                </span>
              </div>
              <div className="flex gap-x-4">
                <ThreeDotsIcon />
                <span className="text-[#828792] font-normal text-lg">
                  Conecte-se aos seus amigos
                </span>
              </div>
              <div className="flex gap-x-4">
                <BuyIcon />
                <span className="text-[#828792] font-normal text-lg">
                  Compre jogos e itens digitais
                </span>
              </div>
            </div>

            <div className="mt-3">
              <DownloadButton size="large" />
            </div>

            <div className="mt-3 flex items-center gap-x-[18px]">
              <SmartphoneIcon />
              <span className="text-sm font-semibold">
                Também disponível como <br />
                <span className="underline">aplicativo móvel</span>
              </span>
            </div>
          </section>
          <Image
            src="/illustrations/app.png"
            alt="App view"
            width={1053.33}
            height={593.96}
            className="absolute -right-60"
          />
          <Image
            src="/illustrations/app-mini.png"
            alt="App mini view"
            width={562.86}
            height={346.19}
            className="absolute -right-4 top-[26rem]"
          />
        </div>
      </footer>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://api.brchallenges.com/api/blizzard/games')

  const data = await response.json()

  return {
    props: {
      data,
    },
  }
}
