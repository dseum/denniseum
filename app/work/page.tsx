import { experiences } from '@/app/work/data'
import Native from '@/lib/components/Native'
import ColListLayout from '@/lib/layouts/ColListLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  robots: 'noindex',
}

export default function WorkPage() {
  return (
    <ColListLayout>
      <ColListLayout.Col>
        I&apos;ve done a mix of software engineering, teaching, and leadership.
        Here are some of my roles.
      </ColListLayout.Col>
      <ColListLayout.List>
        {experiences
          .filter((experience) => experience.year.end === null)
          .map((experience, i) => (
            <ColListLayout.ListItem key={i}>
              <ColListLayout.ListItem.Title className="font-bold md:font-normal">
                {experience.role}
              </ColListLayout.ListItem.Title>
              <ColListLayout.ListItem.Date>
                Since {experience.year.start}
              </ColListLayout.ListItem.Date>
              <ColListLayout.ListItem.Description>
                <span className="font-bold italic">{experience.for}.</span>{' '}
                {experience.description}
              </ColListLayout.ListItem.Description>
            </ColListLayout.ListItem>
          ))}
        {experiences
          .filter((experience) => experience.year.end !== null)
          .map((experience, i) => (
            <ColListLayout.ListItem key={i}>
              <ColListLayout.ListItem.Title className="font-bold md:font-normal">
                {experience.role}
              </ColListLayout.ListItem.Title>
              <ColListLayout.ListItem.Date>
                {experience.year.start === experience.year.end ? (
                  <>{experience.year.start}</>
                ) : (
                  <>
                    {experience.year.start}–{experience.year.end}
                  </>
                )}
              </ColListLayout.ListItem.Date>
              <ColListLayout.ListItem.Description>
                <span className="font-bold italic">{experience.for}.</span>{' '}
                {experience.description}
              </ColListLayout.ListItem.Description>
            </ColListLayout.ListItem>
          ))}
      </ColListLayout.List>
    </ColListLayout>
  )
}
