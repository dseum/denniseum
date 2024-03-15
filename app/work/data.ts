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
  description: string
}

export const courses: Array<Course> = [
  {
    name: 'COMPSCI 145',
    year: 2023,
    description: 'Introduction to networks including data centers at scale.',
  },
  {
    name: 'COMPSCI 124',
    year: 2023,
    description: 'Data structures and algorithms.',
  },
  {
    name: 'MATH 55A',
    year: 2022,
    description: 'Studies in algebra and group theory.',
  },
  {
    name: 'COMPSCI 121',
    year: 2022,
    description: 'Introduction to theoretical computer science.',
  },
].sort((a, b) => a.year - b.year)

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
    description: 'Working on restructuring and creating modern tools.',
  },
  {
    role: 'Teaching Fellow for COMPSCI 124',
    for: 'Harvard University',
    location: {
      city: 'Cambridge',
      macro: 'MA',
    },
    year: {
      start: 2024,
      end: null,
    },
    description:
      'Topics cover graph, approximation, and randomized algorithms.',
  },
  {
    role: 'Teaching Fellow for COMPSCI 121',
    for: 'Harvard University',
    location: {
      city: 'Cambridge',
      macro: 'MA',
    },
    year: {
      start: 2023,
      end: 2023,
    },
    description:
      'Topics cover circuits, DFAs, Turing machines, complexity classes, halting, and cryptography.',
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
    description:
      'Led a team of 8 developers to implement a portal for hackathon event and hacker applications employing SvelteKit, TypeScript, and Firebase. Managed over 3,000 users.',
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
    description:
      'Leveraged React, TypeScript, and Firebase to create modular quiz system. Worked with Dr. Anshul Kumar to create apps for web, iOS, and Android.',
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
    description:
      'Worked on a team using Django and Vue to create a portal to automate transportation operations, supporting over 250 school districts across US and Canada.',
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
    description:
      'Devised and created scheduling app used by over 200 tutors and students. Monolithic service using Next.js, React, Laravel, and MySQL and deployed to DigitalOcean droplet.',
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
