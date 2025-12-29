interface HandbagProps {
  className?: string
}

function Handbag({ className }: HandbagProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12L8 26C8 27 9 28 10 28L22 28C23 28 24 27 24 26L24 12" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 12V8C12 6 13 5 15 5H17C19 5 20 6 20 8V12" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  )
}

export default Handbag

