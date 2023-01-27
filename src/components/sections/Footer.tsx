import Image from 'next/image'

import { DownloadButton } from '../buttons/DownloadButton'
import { BuyIcon } from '../icons/BuyIcon'
import { PlaylistIcon } from '../icons/PlaylistIcon'
import { SmartphoneIcon } from '../icons/SmartphoneIcon'
import { ThreeDotsIcon } from '../icons/ThreeDotsIcon'

export function Footer() {
  return (
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
              <span className="text-[#828792] font-normal text-lg">Seus jogos em um só lugar</span>
            </div>
            <div className="flex gap-x-4">
              <ThreeDotsIcon />
              <span className="text-[#828792] font-normal text-lg">Conecte-se aos seus amigos</span>
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
  )
}
