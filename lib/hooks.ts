import { useEffect, useRef, useState } from 'react'

export enum Breakpoint {
  None,
  Sm,
  Md,
  Lg,
}

export default function useBreakpoint() {
  const [breakpoint, _setBreakpoint] = useState<Breakpoint>()
  let timer = useRef<number>()
  const setBreakpoint = (_breakpoint: Breakpoint) => {
    clearTimeout(timer.current)
    timer.current = window.setTimeout(() => _setBreakpoint(_breakpoint), 100)
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setBreakpoint(Breakpoint.Lg)
      else if (window.innerWidth >= 768) setBreakpoint(Breakpoint.Md)
      else if (window.innerWidth >= 640) setBreakpoint(Breakpoint.Sm)
      else setBreakpoint(Breakpoint.None)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  useEffect(() => {
    console.log(breakpoint)
  }, [breakpoint])
  return breakpoint
}
