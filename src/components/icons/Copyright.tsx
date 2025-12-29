interface CopyrightProps {
  className?: string
}

function Copyright({ className }: CopyrightProps) {
  return (
    <svg className={className} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M5.5 3.5C4.5 3.5 3.5 4.5 3.5 5.5C3.5 6.5 4.5 7.5 5.5 7.5" stroke="currentColor" strokeWidth="1" fill="none"/>
    </svg>
  )
}

export default Copyright

