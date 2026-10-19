export function Spotlight() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] overflow-hidden">
      <div className="spotlight absolute -top-24 left-1/2 h-[44rem] w-[56rem] -translate-x-1/2 opacity-0" />
    </div>
  )
}
