export const skills = {
  linguistic: ['English', 'Korean', 'Spanish'],
  technical: [
    {
      name: 'C',
      types: ['C++']
    },
    {
      name: 'Rust',
      types: []
    },
    {
      name: 'Python',
      types: ['Django']
    },
    {
      name: 'HTML',
      types: ['JSX']
    },
    {
      name: 'JS',
      types: ['TypeScript', 'React', 'Vue', 'Next', 'Inertia']
    },
    {
      name: 'CSS',
      types: ['Tailwind', 'Bootstrap']
    },
    {
      name: 'PHP',
      types: ['Laravel', 'Google Client']
    },
    {
      name: 'SQL',
      types: ['MySQL', 'PostgreSQL']
    },
    {
      name: 'Java',
      types: []
    },
    {
      name: 'LaTeX',
      types: []
    },
    {
      name: 'Tools',
      types: ['Docker', 'Firebase', 'Google Cloud', 'Digital Ocean', 'Figma']
    }
  ]
}

export const projects = [
  {
    name: 'hackharvard/portal',
    href: 'https://github.com/hackharvard/portal',
    stack: ['SvelteKit', 'Tailwind', 'Firebase'],
    content:
      'This app was built for the application and user management for the 2023 HackHarvard hackathon. This was my first app using SvelteKit for production, and I also experimented with lazy loaded Firebase and protected routes for a prerendered app. Additionally, there were various utilities that I created and extended as the app got more complex. I am definitely thinking about separating out some components and utilities as a package of their own.'
  },
  {
    name: 'tfa-calendar',
    href: 'https://github.com/dseum22/tfa-calendar',
    stack: ['React', 'Tailwind', 'Inertia', 'Laravel', 'MySQL', 'Docker'],
    content:
      'A non-profit originally used a complicated system of trading single calendar appointments between tutors and students. Instead, the organization needed a relatively cheap but scalable app to handle the scheduling. Using a monolithic approach, this app features administrive management, timezone considerations, and a simple deployment process with Docker.'
  },
  {
    name: 'impulse-utils',
    href: 'https://github.com/dseum22/impulse-utils',
    stack: ['JS'],
    content:
      'For React projects, I needed an easier way of universally maintaining my subcomponent and CSS classes structure. A few hours resulted in this JS package to manage these React utilities. As I dive deeper into SvelteKit, however, I am thinking more about dividing this project into two for both React and SvelteKit.'
  },
  {
    name: 'tfa-branding',
    href: 'https://github.com/dseum22/tfa-branding',
    description:
      'A frontend-focused project for a branding site. Helped the user find what they need. Made for a non-profit.',
    stack: ['React', 'Tailwind', 'Firebase'],
    content:
      'This was a frontend-focused project for the branding site of a non-profit. For that reason, I approached the design with friendliness in mind to reflect the mission of the organization and the target audience. Ease of access was prioritized, and it was an interesting creative problem on how to best construct the user experience to make the site inviting to a user.'
  },
  {
    name: 'denniseum',
    href: 'https://github.com/dseum22/denniseum',
    stack: ['Next', 'Tailwind', 'Firebase'],
    content:
      'There is not much complexity here. Simplicity was the goal in mind even as I sprinkled in some animations to make the experience fluid. This site is always a work in progress for my experiements.'
  },
  {
    name: 'citecreator',
    href: 'https://github.com/dseum22/citecreator',
    stack: ['Next', 'Tailwind', 'Google Apps Script', 'Google Spreadsheet'],
    content:
      'Our high school debate team used a Google spreadsheet to prevent duplicated research, but it was not always exciting to copy in all the necessary parameters for logging an article. As a result, combining Google Apps Script with some simple frontend, I automated not only the logging process but also the evidence citation creation.'
  },
  {
    name: 'ds-disease-data',
    href: '',
    stack: ['Mathematica'],
    content:
      'During my internship at Augment Software, this was one of my bigger projects to understand data science in the context of Mathematica. I had explored machine learning with animal recognition and wanted to see how machine learning could match geographical patterns for diseases like malaria. That resulted in a program that identified patterns of spread observing disease frequency by location.'
  }
]

export const cello = {
  awards: [
    {
      name: 'Jack Kent Cooke Young Artist Award (2021)',
      href: 'https://fromthetop.org/musician/dennis-eum/'
    },
    {
      name: 'Minnesota Orchestra Concerto Performing Invitation (2021)',
      href: 'https://minnesotaorchestra.org/about/partnerships/ypsca/concerto-competition/'
    },
    {
      name: 'YPSCA Edwin W. and Edith B. Norberg Trust Award (2021)',
      href: 'https://minnesotaorchestra.org/about/partnerships/ypsca/concerto-competition/'
    },
    {
      name: 'YPSCA Claire Givens Award (2021)',
      href: 'https://minnesotaorchestra.org/about/partnerships/ypsca/concerto-competition/'
    },
    {
      name: 'Thursday Musical Artist Series Concert Performing Invitation (2021)',
      href: 'https://thursdaymusical.org/calendar/2021/2/8/thursday-musical-artist-series'
    },
    {
      name: 'YPSCA Karen Lundmark Award (2020)',
      href: ''
    },
    {
      name: 'Thursday Musical High School Strings: 1st place (2020)',
      href: 'https://thursdaymusical.org/scholarship-winners-2020/'
    },
    {
      name: 'Salon Se Leve Solo Concerto Performing Invitation (2020)',
      href: ''
    },
    {
      name: 'Classical MPR Varsity: Semi-finalist (2020)',
      href: 'https://www.classicalmpr.org/story/2020/01/02/minnesota-varsity-dennis-eum/'
    },
    {
      name: 'Schubert Club Junior High Strings: 1st place (2019)',
      href: 'https://schubert.org/blog/2019/03/19/announcing-the-finalists-and-winners-from-the-2019-schubert-club-competition/'
    },
    {
      name: 'Thursday Musical Junior High Strings: 2nd place (2019)',
      href: 'https://thursdaymusical.org/scholarship-winners-2019/'
    },
    {
      name: 'GTCYS Cello Concerto Competition Finalist (2019)',
      href: ''
    },
    {
      name: 'Mary West High School Division: 1st place (2019)',
      href: ''
    },
    {
      name: 'Mary West Junior High Division: 1st place (2018)',
      href: ''
    }
  ],
  recordings: [
    {
      name: 'Bach Cello Suite No. 6, Courante',
      href: 'https://youtu.be/t__K9YZwyYY'
    },
    {
      name: 'Dvořák Cello Concerto in B Minor, Movement I',
      href: 'https://youtu.be/cirPLvVZNBY'
    },
    {
      name: 'Rachmaninoff Élégie Op. 3 No. 1',
      href: 'https://youtu.be/vKNX4oqtsP0'
    },
    {
      name: 'Elgar Concerto No. 1 in E minor, Movement IV',
      href: 'https://youtu.be/OUotKfMCwI0/'
    },
    {
      name: 'Bach Suite No. 6, Sarabande',
      href: 'https://youtu.be/KRCsM28UyKw/'
    },
    {
      name: 'Kabalevsky Concerto No. 1 in G minor, Movements I, II, III',
      href: 'https://youtu.be/aBuY__N0WyQ/'
    },
    {
      name: 'Bach Suite No. 3, Sarabande',
      href: 'https://youtu.be/BWT0aoD4GMg/'
    },
    {
      name: 'Saint-Saëns Concerto No. 1 in A minor, Movement I',
      href: 'https://youtu.be/g0yVZtesfM8/'
    }
  ]
}
