import { ReactNode, useEffect, useState } from 'react'

import { AppleLogo, LinuxLogo, WindowsLogo } from 'phosphor-react'

import { getUserOS } from '../utils/get-user-os'

type OS = {
  osName: 'Windows' | 'MacOS' | 'Linux' | 'Unknown'
  logo: ReactNode | null
}

const listOS: OS[] = [
  {
    osName: 'Windows',
    logo: <WindowsLogo size={24} weight="fill" />,
  },
  {
    osName: 'MacOS',
    logo: <AppleLogo size={24} weight="fill" />,
  },
  {
    osName: 'Linux',
    logo: <LinuxLogo size={24} weight="fill" />,
  },
  {
    osName: 'Unknown',
    logo: null,
  },
]

export function useOS() {
  const [os, setOS] = useState<OS>({
    osName: 'Unknown',
    logo: null,
  })

  useEffect(() => {
    const userOS = listOS.find(value => value.osName.toLowerCase() === getUserOS().toLowerCase())!

    setOS(userOS)
  }, [])

  return os
}
