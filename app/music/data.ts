type Award = {
  name: string
  date: Date
  href: string | null
}

type Performance = {
  name: string
  date: Date
  href: string
}

const awards: Award[] = [
  {
    name: 'Minnesota Orchestra Concerto Performing Invitation',
    date: new Date(2022, 10, 30),
    href: 'https://minnesotaorchestra.org/about/partnerships/ypsca/concerto-competition/',
  },
  {
    name: 'From the Top: Jack Kent Cooke Young Artist Award',
    date: new Date(2022, 2, 7),
    href: 'https://fromthetop.org/musician/dennis-eum/',
  },
  {
    name: 'YPSCA Performing Invitation',
    date: new Date(2021, 9, 22),
    href: null,
  },
  {
    name: 'YPSCA Edwin W. and Edith B. Norberg Trust Award',
    date: new Date(2020, 2, 8),
    href: 'https://minnesotaorchestra.org/about/partnerships/ypsca/concerto-competition/',
  },
  {
    name: 'YPSCA Claire Givens Award',
    date: new Date(2020, 2, 8),
    href: 'https://minnesotaorchestra.org/about/partnerships/ypsca/concerto-competition/',
  },
  {
    name: 'Thursday Musical Artist Series Concert Performing Invitation',
    date: new Date(2021, 1, 15),
    href: 'https://thursdaymusical.org/calendar/2021/2/8/thursday-musical-artist-series',
  },
  {
    name: 'YPSCA Karen Lundmark Award',
    date: new Date(2020, 2, 8),
    href: null,
  },
  {
    name: 'Thursday Musical High School Strings: 1st place',
    date: new Date(2020, 1, 29),
    href: 'https://thursdaymusical.org/scholarship-winners-2020/',
  },
  {
    name: 'Salon Se Leve Solo Concerto Performing Invitation',
    date: new Date(2020, 1, 16),
    href: null,
  },
  {
    name: 'Classical MPR Varsity: Semi-finalist',
    date: new Date(2020, 0, 2),
    href: 'https://www.classicalmpr.org/story/2020/01/02/minnesota-varsity-dennis-eum/',
  },
  {
    name: 'Schubert Club Junior High Strings: 1st place',
    date: new Date(2019, 2, 19),
    href: 'https://schubert.org/blog/2019/03/19/announcing-the-finalists-and-winners-from-the-2019-schubert-club-competition/',
  },
  {
    name: 'Thursday Musical Junior High Strings: 2nd place',
    date: new Date(2019, 2, 4),
    href: 'https://thursdaymusical.org/scholarship-winners-2019/',
  },
  {
    name: 'GTCYS Strings Concerto Competition Finalist',
    date: new Date(2019, 10, 10),
    href: null,
  },
  {
    name: 'Mary West High School Division: 1st place',
    date: new Date(2019, 10, 10),
    href: null,
  },
  {
    name: 'Mary West Junior High Division: 1st place',
    date: new Date(2018, 10, 11),
    href: null,
  },
]

const recordings: Performance[] = [
  {
    name: 'Bach Cello Suite No. 6, Courante',
    date: new Date(2022, 2, 30),
    href: 'https://youtu.be/t__K9YZwyYY',
  },
  {
    name: 'Dvořák Cello Concerto in B Minor, Movement I',
    date: new Date(2022, 2, 30),
    href: 'https://youtu.be/cirPLvVZNBY',
  },
  {
    name: 'Rachmaninoff Élégie Op. 3 No. 1',
    date: new Date(2021, 9, 24),
    href: 'https://youtu.be/vKNX4oqtsP0',
  },
  {
    name: 'Elgar Concerto No. 1 in E minor, Movement IV',
    date: new Date(2021, 9, 10),
    href: 'https://youtu.be/OUotKfMCwI0/',
  },
  {
    name: 'Bach Suite No. 6, Sarabande',
    date: new Date(2021, 9, 10),
    href: 'https://youtu.be/KRCsM28UyKw/',
  },
  {
    name: 'Kabalevsky Concerto No. 1 in G minor, Movements I, II, III',
    date: new Date(2020, 1, 28),
    href: 'https://youtu.be/aBuY__N0WyQ/',
  },
  {
    name: 'Bach Suite No. 3, Sarabande',
    date: new Date(2020, 1, 28),
    href: 'https://youtu.be/BWT0aoD4GMg/',
  },
  {
    name: 'Saint-Saëns Concerto No. 1 in A minor, Movement I',
    date: new Date(2018),
    href: 'https://youtu.be/g0yVZtesfM8/',
  },
]

export const combined = [
  ...awards.map((award) => ({
    ...award,
    type: 'award',
  })),
].sort((a, b) => b.date.valueOf() - a.date.valueOf())
