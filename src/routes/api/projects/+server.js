import { getProjects } from '$lib/projects'
import { json } from '@sveltejs/kit'

export async function GET({ url }) {
  let projects = await getProjects()

  const highlightedOnly = url.searchParams.get('highlight') === 'true'

  if (highlightedOnly) {
    projects = projects
      .filter((p) => p.highlight)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }

  return json(projects)
}
