import { getTechnologies } from '$lib/technologies'
import { json } from '@sveltejs/kit'

export async function POST({ request, cookies }) {
  /** @type {{ technologyNames: string[] }} */
  const { technologyNames } = await request.json()
  const technologies = await getTechnologies()
  return json(technologies)
}
