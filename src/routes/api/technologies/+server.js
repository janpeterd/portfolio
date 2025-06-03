import { getTechnologies } from '$lib/technologies'
import { json } from '@sveltejs/kit'

export async function POST({ request, cookies }) {
  /**
   * @typedef {Object} RequestBody
   * @property {string[]} technologyNames
   */
  const { technologyNames } = /** @type {RequestBody} */ (await request.json())
  const technologies = await getTechnologies()
  // the goal of this endpoint is to return all technolgy objects where the name is in the technologyNames array, implement this AI!
  return json(technologies)
}
