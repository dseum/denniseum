type Award = {
  name: string
  date: Date
  href: string | null
}

export const awards: Award[] = [
  {
    name: 'Minnesota Orchestra Concerto Performing Invitation',
    date: new Date(2022, 10),
    href: 'https://minnesotaorchestra.org/about/partnerships/ypsca/concerto-competition/',
  },
  {
    name: 'YPSCA Edwin W. and Edith B. Norberg Trust Award',
    date: new Date(2021, 9),
    href: 'https://minnesotaorchestra.org/about/partnerships/ypsca/concerto-competition/',
  },
  {
    name: 'YPSCA Claire Givens Award',
    date: new Date(2021, 9),
    href: 'https://minnesotaorchestra.org/about/partnerships/ypsca/concerto-competition/',
  },
  {
    name: 'Thursday Musical Artist Series Concert Performing Invitation',
    date: new Date(2021, 1),
    href: 'https://thursdaymusical.org/calendar/2021/2/8/thursday-musical-artist-series',
  },
  {
    name: 'YPSCA Karen Lundmark Award',
    date: new Date(2020, 2),
    href: null,
  },
  {
    name: 'Thursday Musical High School Strings: 1st place',
    date: new Date(2020, 1),
    href: 'https://thursdaymusical.org/scholarship-winners-2020/',
  },
  {
    name: 'Salon Se Leve Solo Concerto Performing Invitation',
    date: new Date(2020, 1),
    href: null,
  },
  {
    name: 'Classical MPR Varsity: Semi-finalist',
    date: new Date(2020, 0),
    href: 'https://www.classicalmpr.org/story/2020/01/02/minnesota-varsity-dennis-eum/',
  },
  {
    name: 'Schubert Club Junior High Strings: 1st place',
    date: new Date(2019, 2),
    href: 'https://schubert.org/blog/2019/03/19/announcing-the-finalists-and-winners-from-the-2019-schubert-club-competition/',
  },
  {
    name: 'Thursday Musical Junior High Strings: 2nd place',
    date: new Date(2019, 2),
    href: 'https://thursdaymusical.org/scholarship-winners-2019/',
  },
  {
    name: 'GTCYS Strings Concerto Competition Finalist',
    date: new Date(2019, 10),
    href: null,
  },
  {
    name: 'Mary West High School Division: 1st place',
    date: new Date(2019, 10),
    href: null,
  },
  {
    name: 'Mary West Junior High Division: 1st place',
    date: new Date(2018, 10),
    href: null,
  },
]
