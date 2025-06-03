import { getTechnologies } from '$lib/technologies'
import { json } from '@sveltejs/kit'

export async function POST({ request, cookies }) {
  /**
   * @typedef {Object} RequestBody
   * @property {string[]} technologyNames
   */
  const { technologyNames } = /** @type {RequestBody} */ (await request.json())
  const technologies = await getTechnologies()
  return json(technologies)
}
