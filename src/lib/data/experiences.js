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
      'Ontwikkeling quizplatform "Qurio" met Spring Boot REST-API, frontend in React, SCRUM',
    link: '/stage',
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
    dateString: 'Juni 2019, Augustus 2022',
    title: 'Jobstudent',
    company: 'R. Janssen & Zn nv',
    description: 'Magazijn en voorraadbeheer',
    link: 'https://janssenr.be/nl/',
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
      'Als vrijwilliger verantwoordelijk voor het onderhoud en de (door)ontwikkeling van de website, gebaseerd op Duda CMS. Tevens de migratie van de nieuwsbriefprovider van Mailchimp naar Laposta geleid.',
    link: 'https://www.zandhovennatuurlijk.be/',
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
    link: 'https://thomasmore.be/nl/opleidingen/professionele-bachelor/toegepaste-informatica/application-development/geel/basistraject',
    type: 'education'
  }
]

export default experiences
