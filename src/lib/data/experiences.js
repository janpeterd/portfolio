/**
 * @typedef {'work' | 'project' | 'education'} ExperienceType
 */
/**
 * @typedef {Object} Experience
 * @property {Date} startDate
 * @property {Date} [endDate]
 * @property {string} dateString
 * @property {string} title
 * @property {string} company
 * @property {string} [description]
 * @property {string} [link]
 * @property {ExperienceType} type
 */
/** @type {Experience[]} */
export const experiences = [
  // Professional Experiences
  {
    startDate: new Date('2025-02-01'),
    endDate: null,
    dateString: 'Sinds februari 2025',
    title: 'Stage Full Stack Java developer',
    company: 'Lykios (Faros)',
    description:
      'Ontwikkeling Quiz platform "Qurio" met Java Spring REST API, React frontend, SCRUM',
    link: 'https://lykios.be/',
    type: 'work'
  },
  {
    startDate: new Date('2023-03-01'),
    endDate: new Date('2023-03-31'),
    dateString: 'Maart 2023',
    title: 'Computerbouw',
    company: 'Freelance',
    description: 'Computer samengesteld en geassembleerd naar de noden van de klant',
    type: 'work'
  },
  {
    startDate: new Date('2022-08-01'),
    endDate: new Date('2022-08-31'),
    dateString: 'Augustus 2022',
    title: 'Jobstudent',
    company: 'R. Janssen & Zn nv',
    description: 'Magazijn en voorraadbeheer',
    type: 'work'
  },
  {
    startDate: new Date('2019-06-01'),
    endDate: new Date('2019-06-30'),
    dateString: 'Juni 2019',
    title: 'Jobstudent',
    company: 'R. Janssen & Zn nv',
    description: 'Magazijn en voorraadbeheer',
    type: 'work'
  },

  // Volunteer and Associations
  {
    startDate: new Date('2022-01-01'),
    endDate: null,
    dateString: '2022-heden',
    title: 'Webmaster',
    company: 'Zandhoven Natuurlijk!',
    description:
      'Vrijwilliger en verantwoordelijk voor het onderhoud en de ontwikkeling van de website',
    type: 'work'
  },
  {
    startDate: new Date('2020-01-01'),
    endDate: null,
    dateString: '2020-heden',
    title: 'Violist, plaatsvervangend concertmeester',
    company: 'Vlaams Symfonisch Orkest',
    description: 'Orkestlid en plaatsvervangend concertmeester bij het Vlaams Symfonisch Orkest',
    type: 'work'
  },
  {
    startDate: new Date('2017-04-01'),
    endDate: new Date('2017-04-30'),
    dateString: 'April 2017',
    title: 'Vrijwilliger',
    company: 'Woonzorgcentrum Sint-Lucia',
    description: 'Animator bij activiteiten voor ouderen',
    type: 'work'
  },

  // Education
  {
    startDate: new Date('2022-09-01'),
    endDate: null,
    dateString: 'sinds september 2022',
    title: 'Professionele bachelor in de Toegepaste Informatica',
    company: 'Thomas More Campus Geel',
    description: 'Specialisatie Application development',
    type: 'education'
  },
  {
    startDate: new Date('2020-09-01'),
    endDate: new Date('2022-07-01'),
    dateString: 'september 2020- juli 2022',
    title: 'Industriële Ingenieurswetenschappen',
    company: 'Groep T, KU Leuven',
    description: 'niet afgerond',
    type: 'education'
  },
  {
    startDate: new Date('2014-09-01'),
    endDate: new Date('2020-06-30'),
    dateString: 'september 2014- juni 2020',
    title: 'Diploma secundair onderwijs, wetenschappen-wiskunde',
    company: 'Sint-Jozefcollege, Turnhout',
    type: 'education'
  },
  {
    startDate: new Date('2006-01-01'),
    endDate: new Date('2020-01-01'),
    dateString: '2006-2020',
    title: 'SAMWD Turnhout',
    company: null,
    description: 'Klassieke viool (Suzukimethode) — summa cum laude',
    type: 'education'
  }
]

export default experiences
