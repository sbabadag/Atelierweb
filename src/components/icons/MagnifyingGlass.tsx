interface MagnifyingGlassProps {
  className?: string
}

function MagnifyingGlass({ className }: MagnifyingGlassProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M20 20L26 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export default MagnifyingGlass

