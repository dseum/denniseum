import { combined } from '@/app/music/data'
import ColListLayout from '@/lib/layouts/ColListLayout'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { Metadata } from 'next'

export const metadata: Metadata = {
  robots: 'noindex',
}

export default function MusicPage() {
  return (
    <ColListLayout>
      <ColListLayout.Col>
        I studied music as a cellist for 11 years and performed in an orchestra
        for 8 years. These are some of my previous competitions and
        scholarships.
      </ColListLayout.Col>
      <ColListLayout.List>
        {combined.map((item, i) => (
          <li
            className={cn(
              'mb-10 md:mb-16 md:border md:border-black',
              !item.href ? 'md:pb-1' : 'md:pb-4',
            )}
            key={i}
          >
            <div className="flex flex-col-reverse gap-1 md:flex-row md:justify-between md:gap-10">
              <div className="text-3xl leading-snug sm:text-[2.5rem] sm:leading-snug md:pl-4 md:text-5xl md:leading-snug">
                {item.href ? (
                  <a
                    className="border-b border-black transition-colors duration-300 hover:border-indigo-400 hover:text-indigo-400"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.name}
                  </a>
                ) : (
                  item.name
                )}
              </div>
              <div>
                <div className="text-xl italic sm:text-2xl md:border-b md:border-l md:border-black md:px-1 md:text-3xl md:not-italic">
                  <time className="md:whitespace-nowrap">
                    {format(item.date, 'yyyy.MM.dd')}
                  </time>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ColListLayout.List>
    </ColListLayout>
  )
}
