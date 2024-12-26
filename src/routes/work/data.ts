type Experience = {
  role: string
  for: string
  location: {
    city: string
    macro: string
  }
  period: {
    start: Date
    end: Date | null
  }
}

export const experiences: Experience[] = [
  {
    role: 'Technology Board Chair',
    for: 'The Harvard Crimson',
    location: {
      city: 'Cambridge',
      macro: 'MA',
    },
    period: {
      start: new Date(2023, 11),
      end: null,
    },
  },
  {
    role: 'Software Engineer (Contracted)',
    for: 'Center for Effective School Operations',
    location: {
      city: 'Minneapolis',
      macro: 'MN',
    },
    period: {
      start: new Date(2024, 4),
      end: null,
    },
  },
  {
    role: 'Teaching Fellow for CS 121',
    for: 'Harvard University',
    location: {
      city: 'Cambridge',
      macro: 'MA',
    },
    period: {
      start: new Date(2023, 7),
      end: new Date(2024, 11),
    },
  },
  {
    role: 'Teaching Fellow for CS 124',
    for: 'Harvard University',
    location: {
      city: 'Cambridge',
      macro: 'MA',
    },
    period: {
      start: new Date(2024, 0),
      end: new Date(2024, 4),
    },
  },
  {
    role: 'Software Engineer (Full-Time and Part-Time)',
    for: 'Center for Effective School Operations',
    location: {
      city: 'Minneapolis',
      macro: 'MN',
    },
    period: {
      start: new Date(2021, 7),
      end: new Date(2023, 8),
    },
  },
  {
    role: 'Technology Board Director',
    for: 'HackHarvard',
    location: {
      city: 'Cambridge',
      macro: 'MA',
    },
    period: {
      start: new Date(2022, 5),
      end: new Date(2024, 0),
    },
  },
]
