import { experiences } from '@/app/work/data'
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
        Here are some of my past and present roles.
      </ColListLayout.Col>
      <ColListLayout.List>
        {experiences
          .filter((experience) => experience.year.end === null)
          .map((experience, i) => (
            <li className="mb-10 md:mb-16 md:border md:border-black" key={i}>
              <div className="flex flex-col-reverse gap-1 md:flex-row md:justify-between md:gap-10">
                <div className="text-3xl leading-snug sm:text-[2.5rem] sm:leading-snug md:pl-4 md:text-5xl md:leading-snug">
                  {experience.role}
                </div>
                <div>
                  <div className="text-xl italic sm:text-2xl md:border-b md:border-l md:border-black md:px-1 md:text-3xl md:not-italic">
                    <time className="md:whitespace-nowrap">
                      Since {experience.year.start}
                    </time>{' '}
                    <span className="md:hidden">at {experience.for}</span>
                  </div>
                </div>
              </div>
              <p className="hidden px-4 pb-3 italic md:block">
                {experience.for}
              </p>
            </li>
          ))}
        {experiences
          .filter((experience) => experience.year.end !== null)
          .map((experience, i) => (
            <li className="mb-10 md:mb-16 md:border md:border-black" key={i}>
              <div className="flex flex-col-reverse gap-1 md:flex-row md:justify-between md:gap-10">
                <div className="text-3xl leading-snug sm:text-[2.5rem] sm:leading-snug md:pl-4 md:text-5xl md:leading-snug">
                  {experience.role}
                </div>
                <div>
                  <div className="text-xl italic sm:text-2xl md:border-b md:border-l md:border-black md:px-1 md:text-3xl md:not-italic">
                    <time className="md:whitespace-nowrap">
                      {experience.year.start === experience.year.end ? (
                        <>{experience.year.start}</>
                      ) : (
                        <>
                          {experience.year.start}–{experience.year.end}
                        </>
                      )}
                    </time>{' '}
                    <span className="md:hidden">at {experience.for}</span>
                  </div>
                </div>
              </div>
              <p className="hidden px-4 pb-3 italic md:block">
                {experience.for}
              </p>
            </li>
          ))}
      </ColListLayout.List>
    </ColListLayout>
  )
}
