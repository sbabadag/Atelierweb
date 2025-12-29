interface HeartProps {
  className?: string
}

function Heart({ className }: HeartProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 26C16 26 6 18 6 12C6 8 9 6 12 6C14 6 16 7 16 9C16 7 18 6 20 6C23 6 26 8 26 12C26 18 16 26 16 26Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  )
}

export default Heart

