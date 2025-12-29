interface UserProps {
  className?: string
}

function User({ className }: UserProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M8 26C8 20 11 18 16 18C21 18 24 20 24 26" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  )
}

export default User

