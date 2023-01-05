import { ButtonHTMLAttributes, ReactNode } from 'react'

import clsx from 'clsx'

type ButtonProps = {
  children: ReactNode
  size?: 'small' | 'medium' | 'full'
} & ButtonHTMLAttributes<HTMLButtonElement>

export function OutlinedButton({ children, size = 'full', ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={clsx(
        'bg-transparent border border-solid border-white w-full h-10 rounded-[4px] font-medium flex items-center justify-center gap-x-[6px]',
        size === 'small' && 'w-[116px] text-sm'
      )}
    >
      {children}
    </button>
  )
}
