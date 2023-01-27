import { ReactNode, useState } from 'react'

import { AppleLogo, LinuxLogo, WindowsLogo } from 'phosphor-react'

import { useOS } from '../../hooks/useOS'
import { getUserOS } from '../../utils/get-user-os'
import { Button, ButtonProps } from './Button'

export function DownloadButton({ ...rest }: ButtonProps) {
  const { osName, logo } = useOS()

  return (
    <Button type="button" {...rest} additionalClasses={['bg-brand-500']}>
      {logo} Baixar para {osName}
    </Button>
  )
}
