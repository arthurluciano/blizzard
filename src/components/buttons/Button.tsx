import { ButtonHTMLAttributes, ReactNode } from 'react'

import clsx, { ClassValue } from 'clsx'

export type ButtonProps = {
  children: ReactNode
  additionalClasses?: ClassValue[]
  size?: 'small' | 'medium' | 'large' | 'full'
} & ButtonHTMLAttributes<HTMLButtonElement>

export const BUTTON_SIZES_CLASSES = {
  small: 'max-w-[116px] h-10 text-sm font-medium',
  medium: 'max-w-[167px] text-base',
  large: 'max-w-[331px] text-base',
  full: '',
}

export function Button({ children, additionalClasses, size = 'full', ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={clsx(
        'w-full h-12 rounded-[4px] font-semibold flex items-center justify-center gap-x-[6px]',
        additionalClasses,
        BUTTON_SIZES_CLASSES[size]
      )}
    >
      {children}
    </button>
  )
}
