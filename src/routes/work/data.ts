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
    role: 'Teaching Fellow for Theoretical Computer Science',
    for: 'Harvard University',
    location: {
      city: 'Cambridge',
      macro: 'MA',
    },
    period: {
      start: new Date(2023, 7),
      end: null,
    },
  },
  {
    role: 'Software Engineer',
    for: 'Harvard Undergraduate Quantitative Traders',
    location: {
      city: 'Cambridge',
      macro: 'MA',
    },
    period: {
      start: new Date(2025, 3),
      end: null,
    },
  },
  {
    role: 'Teaching Fellow for Programming Language Theory',
    for: 'Harvard University',
    location: {
      city: 'Cambridge',
      macro: 'MA',
    },
    period: {
      start: new Date(2025, 0),
      end: new Date(2025, 4),
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
      end: new Date(2025, 3),
    },
  },
  {
    role: 'Teaching Fellow for Data Structures and Algorithms',
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
