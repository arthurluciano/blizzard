import { ButtonHTMLAttributes, ReactNode } from 'react'

import clsx from 'clsx'

type ButtonProps = {
  children: ReactNode
  size?: 'small' | 'medium' | 'full'
} & ButtonHTMLAttributes<HTMLButtonElement>

export function PrimaryButton({ children, size = 'full', ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={clsx(
        'bg-brand-500 w-full h-10 rounded-[4px] font-semibold flex items-center justify-center gap-x-[6px]',
        size === 'small' && 'max-w-[116px] text-sm font-medium',
        size === 'medium' && 'max-w-[167px] text-sm'
      )}
    >
      {children}
    </button>
  )
}
