import { getTechnologies } from '$lib/technologies'
import { json } from '@sveltejs/kit'

export async function POST({ request, cookies }) {
  // this technologyNames is a string[] can you type it with jsdoc AI!
  const { technologyNames } = await request.json()
  const technologies = await getTechnologies()
  return json(technologies)
}
