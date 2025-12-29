interface CaretLeftProps {
  className?: string
}

function CaretLeft({ className }: CaretLeftProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 24L12 16L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default CaretLeft

