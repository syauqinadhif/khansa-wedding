export function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-8 ${className}`}>
      <div className="h-px w-12 bg-gold/40" />
      <div className="w-1.5 h-1.5 rotate-45 bg-gold/60" />
      <div className="h-px w-12 bg-gold/40" />
    </div>
  )
}
