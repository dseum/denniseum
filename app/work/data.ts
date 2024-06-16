type Course = {
  name: string
  year: number
  description: string
}

type Experience = {
  role: string
  for: string
  location: {
    city: string
    macro: string
  }
  year: {
    start: number
    end: number | null
  }
}

export const experiences: Array<Experience> = [
  {
    role: 'Technology Board Chair',
    for: 'The Harvard Crimson',
    location: {
      city: 'Cambridge',
      macro: 'MA',
    },
    year: {
      start: 2023,
      end: null,
    },
  },
  {
    role: 'Teaching Fellow for CS 124',
    for: 'Harvard University',
    location: {
      city: 'Cambridge',
      macro: 'MA',
    },
    year: {
      start: 2024,
      end: 2024,
    },
  },
  {
    role: 'Teaching Fellow for CS 121',
    for: 'Harvard University',
    location: {
      city: 'Cambridge',
      macro: 'MA',
    },
    year: {
      start: 2023,
      end: null,
    },
  },
  {
    role: 'Technology Board Director',
    for: 'HackHarvard',
    location: {
      city: 'Cambridge',
      macro: 'MA',
    },
    year: {
      start: 2022,
      end: 2024,
    },
  },
  {
    role: 'Software Engineer',
    for: 'Massachusetts General Hospital IHP',
    location: {
      city: 'Boston',
      macro: 'MA',
    },
    year: {
      start: 2022,
      end: 2023,
    },
  },
  {
    role: 'Software Engineer',
    for: 'CESO',
    location: {
      city: 'Minneapolis',
      macro: 'MN',
    },
    year: {
      start: 2021,
      end: 2023,
    },
  },
  {
    role: 'Lead Software Engineer',
    for: 'Robotics for All',
    location: {
      city: 'Palo Alto',
      macro: 'CA',
    },
    year: {
      start: 2020,
      end: 2022,
    },
  },
].sort((a, b) => {
  if (a.year.end === null && b.year.end === null) {
    return b.year.start - a.year.start
  } else if (a.year.end === null) {
    return -1
  } else if (b.year.end === null) {
    return 1
  }
  const delta = b.year.end - a.year.end
  if (delta === 0) {
    if (a.year.start === a.year.end) {
      return 1
    } else if (b.year.start === b.year.end) {
      return 1
    }
    return a.year.start - b.year.start
  } else {
    return delta
  }
})
