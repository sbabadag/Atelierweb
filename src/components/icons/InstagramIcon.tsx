interface InstagramIconProps {
  className?: string
}

function InstagramIcon({ className }: InstagramIconProps) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="16" fill="currentColor"/>
      <circle cx="18" cy="18" r="5" stroke="white" strokeWidth="2" fill="none"/>
      <circle cx="22" cy="14" r="1.5" fill="white"/>
      <rect x="12" y="12" width="12" height="12" rx="3" stroke="white" strokeWidth="2" fill="none"/>
    </svg>
  )
}

export default InstagramIcon

