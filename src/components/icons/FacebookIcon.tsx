interface FacebookIconProps {
  className?: string
}

function FacebookIcon({ className }: FacebookIconProps) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2C9.2 2 2 9.2 2 18C2 26.8 9.2 34 18 34C26.8 34 34 26.8 34 18C34 9.2 26.8 2 18 2ZM20 24H17V19H15V16H17V14C17 12.3 18.3 11 20 11H23V14H21C20.4 14 20 14.4 20 15V16H23V19H20V24Z" fill="currentColor"/>
    </svg>
  )
}

export default FacebookIcon

