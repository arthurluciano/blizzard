import { ButtonHTMLAttributes, ReactNode } from 'react'

import clsx from 'clsx'

import { Button, ButtonProps, BUTTON_SIZES_CLASSES } from './Button'

export function PrimaryButton({ children, ...rest }: ButtonProps) {
  return (
    <Button type="button" {...rest} additionalClasses={['bg-brand-500']}>
      {children}
    </Button>
  )
}
