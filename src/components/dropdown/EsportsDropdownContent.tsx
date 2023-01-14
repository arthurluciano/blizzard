import Image from 'next/image'

export function EsportsDropdownContent() {
  return (
    <div className="w-full h-[354px] py-[55px] flex items-center justify-between gap-y-6">
      <a className="flex flex-col items-center max-w-[174px]" href="#">
        <Image src="/esports/hearthstone-masters.png" alt="esports" width={174} height={149} />

        <span className="text-sm font-medium text-[#9D9D9D] text-center">
          Hearthstone® <br />
          masters
        </span>
      </a>

      <a className="flex flex-col items-center max-w-[174px]" href="#">
        <Image src="/esports/wow-wc.png" alt="esports" width={174} height={149} />

        <span className="text-sm font-medium text-[#9D9D9D] text-center">
          Campeonato Mundial de Arena WoW®
        </span>
      </a>

      <a className="flex flex-col items-center max-w-[174px]" href="#">
        <Image src="/esports/sc-wc.png" alt="esports" width={174} height={149} />

        <span className="text-sm font-medium text-[#9D9D9D] text-center">StarCraft® II WCS</span>
      </a>

      <a className="flex flex-col items-center max-w-[174px]" href="#">
        <Image src="/esports/ow-wc.png" alt="esports" width={174} height={149} />

        <span className="text-sm font-medium text-[#9D9D9D] text-center">
          Copa Mundial de Overwatch®
        </span>
      </a>

      <a className="flex flex-col items-center max-w-[174px]" href="#">
        <Image src="/esports/ow-l.png" alt="esports" width={174} height={149} />

        <span className="text-sm font-medium text-[#9D9D9D] text-center">Liga de Overwatch®</span>
      </a>
    </div>
  )
}
