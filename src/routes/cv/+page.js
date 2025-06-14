import { json } from '@sveltejs/kit'

export async function load() {
  let profiel = await import('../../content/cv/profiel.md')
  let cv_data = await import('$lib/data/cv.json')
  return {
    cv: cv_data,
    content: profiel.default,
    meta: profiel.metadata
  }
}
