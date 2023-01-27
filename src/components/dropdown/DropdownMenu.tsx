import { ReactNode, useEffect, useRef } from 'react'

import clsx from 'clsx'

import { NavbarOption } from '../sections/Header'

export interface DropdownMenuProps {
  opened: NavbarOption | null
  setOpened: (opened: NavbarOption | null) => void
}

export interface DropdownMenuLink {
  icon: ReactNode
  label: string
}

export function DropdownMenu({ opened, setOpened }: DropdownMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutsideDropdown(event: MouseEvent) {
      if (overlayRef.current !== event.target) return

      setOpened(null)
    }

    function onScrollPage() {
      if (!opened) return

      setOpened(null)
    }

    document.addEventListener('click', onClickOutsideDropdown)

    document.addEventListener('scroll', onScrollPage)

    return () => {
      document.removeEventListener('click', onClickOutsideDropdown)
      document.removeEventListener('scroll', onScrollPage)
    }
  }, [setOpened, opened])

  return (
    <div
      className={clsx(
        'w-full min-h-screen absolute z-20 -translate-y-full opacity-0 transition-all duration-200',
        opened && 'translate-y-0 opacity-100'
      )}
      ref={overlayRef}
    >
      <div
        className={clsx(
          'w-full bg-gradient-to-b from-[#0e1117ea] to-[#0e1117e5] backdrop-blur-sm pt-24 pb-[70px] opacity-0 transition-all duration-300',
          opened && 'opacity-100'
        )}
      >
        <div className="mx-auto max-w-7xl w-full transition-all">{opened?.dropdown!.content}</div>

        <div className="bg-[#15171B] w-full h-[70px] absolute bottom-0 font-semibold text-base flex items-center justify-center gap-x-16">
          {opened?.dropdown?.links.map((link, index) => (
            <a key={`link-${index}`} className="flex items-center gap-x-2" href="#">
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
