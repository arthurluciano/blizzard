import { ReactNode, useState } from 'react'

import { GetServerSideProps, GetStaticProps } from 'next'
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
import { ExclusiveGames } from '../components/sections/ExclusiveGames'
import { Footer } from '../components/sections/Footer'
import { Header } from '../components/sections/Header'
import { GameData, GAME_DATA } from '../utils/auxiliar-game-data'

export interface ExclusiveGame {
  name: string
  category: string
  image: string
  logo: string
}

interface BrChallengesResponse {
  data: ExclusiveGame[]
}

export default function LandingPage({ data }: BrChallengesResponse) {
  return (
    <>
      <Header />
      <ExclusiveGames data={data} />
      <Footer />
    </>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.brchallenges.com/api/blizzard/games')

  const data = await response.json()

  return {
    revalidate: false,
    props: {
      data,
    },
  }
}
