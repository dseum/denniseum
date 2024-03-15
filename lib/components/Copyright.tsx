import Wrapper from '@/lib/components/Wrapper'
import useBreakpoint, { Breakpoint } from '@/lib/hooks'
import Link from 'next/link'

export default function Copyright() {
  const breakpoint = useBreakpoint()
  return (
    <Wrapper
      condition={breakpoint === Breakpoint.None}
      wrapper={({ children }) => <Link href="/">{children}</Link>}
    >
      &copy; {new Date().getFullYear()} Dennis Eum
    </Wrapper>
  )
}
