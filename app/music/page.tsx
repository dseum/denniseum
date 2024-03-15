import { combined } from '@/app/music/data'
import ColListLayout from '@/lib/layouts/ColListLayout'
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
          <ColListLayout.ListItem key={i}>
            <ColListLayout.ListItem.Title>
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
            </ColListLayout.ListItem.Title>
            <ColListLayout.ListItem.Date>
              {format(item.date, 'yyyy.MM.dd')}
            </ColListLayout.ListItem.Date>
          </ColListLayout.ListItem>
        ))}
      </ColListLayout.List>
    </ColListLayout>
  )
}
