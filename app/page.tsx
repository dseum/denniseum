import Square from '@/app/_components/Square'
import Native from '@/lib/components/Native'
import { Metadata } from 'next'

export const metadata: Metadata = {
  robots: 'all',
}

export default function RootPage() {
  return (
    <div className="px-6 pb-16 pt-6 sm:px-8 sm:pb-24 sm:pt-8">
      <div className="relative">
        <div className="flex w-full justify-center sm:py-8">
          <Square />
        </div>
        <div className="absolute left-3 top-3 font-neutral text-[16vw] leading-none sm:left-0 sm:top-0 lg:text-[12rem]">
          <h1 className="font-bold">Dennis</h1>
          <h1 className="font-bold">Eum</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          <Native.P>
            I&apos;m a Harvard student studying Computer Science, Statistics,
            and Psychology, and I currently chair the technology board at{' '}
            <Native.A href="https://thecrimson.com">
              The Harvard Crimson
            </Native.A>
            .
          </Native.P>
          <Native.P>
            I usually use TypeScript and Python for work, but I&apos;m also
            experienced with Rust, C, OCaml, and other languages. Though I will
            avoid Java whenever I can.
          </Native.P>
          <Native.P>
            To contact me about anything, please email{' '}
            <Native.A href="mailto:me@denniseum.com">me@denniseum.com</Native.A>
            . I&apos;ll try to get back to you as soon as possible!
          </Native.P>
        </div>
      </div>
    </div>
  )
}
