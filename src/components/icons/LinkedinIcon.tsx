interface LinkedinIconProps {
  className?: string
}

function LinkedinIcon({ className }: LinkedinIconProps) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="16" fill="currentColor"/>
      <path d="M13 14H11V24H13V14ZM12 12C12.8 12 13.5 11.3 13.5 10.5C13.5 9.7 12.8 9 12 9C11.2 9 10.5 9.7 10.5 10.5C10.5 11.3 11.2 12 12 12ZM24 14C22.3 14 21.2 14.7 20.5 15.4V14H18.5V24H20.5V19C20.5 17.8 21.2 17 22.2 17C23.2 17 24 17.7 24 19V24H26V18.5C26 16.1 24.5 14 24 14Z" fill="white"/>
    </svg>
  )
}

export default LinkedinIcon

