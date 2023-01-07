interface ProgressBarProps {
  progress: number
}

export function ProgressBar({ progress }: ProgressBarProps) {
  const width = progress > 100 ? 100 : progress

  return <div className="h-1 bg-brand-500 transition-all" style={{ width: `${width}%` }} />
}
