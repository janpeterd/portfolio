import { getExperience } from '$lib/experience'
import { json } from '@sveltejs/kit'

export async function GET() {
  const experience = await getExperience()
  return json(experience)
}
