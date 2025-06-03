import { getTechnologies } from '$lib/technologies'
import { json } from '@sveltejs/kit'

export async function POST({ request, cookies }) {
  /**
   * @typedef {Object} RequestBody
   * @property {string[]} technologyNames
   */
  const { technologyNames } = /** @type {RequestBody} */ (await request.json())
  const technologies = await getTechnologies()
  const requestedNames = new Set(technologyNames.map(name => name.toLowerCase()))
  const filteredTechnologies = technologies.filter(tech => 
    tech?.name && requestedNames.has(tech.name.toLowerCase())
  )
  return json(filteredTechnologies)
}
