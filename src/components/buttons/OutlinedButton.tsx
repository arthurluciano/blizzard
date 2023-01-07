import { ButtonHTMLAttributes, ReactNode } from 'react'

import clsx from 'clsx'

import { Button, ButtonProps } from './Button'

export function OutlinedButton({ children, ...rest }: ButtonProps) {
  return (
    <Button
      type="button"
      {...rest}
      additionalClasses={['bg-transparent border border-solid border-white']}
    >
      {children}
    </Button>
  )
}
