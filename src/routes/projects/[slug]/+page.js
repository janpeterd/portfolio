import { getTechnologies } from '$lib/technologies'

export async function load({ params, fetch }) {
  try {
    const post = await import(`../../../content/projects/${params.slug}.md`)
    const other = await fetch('/api/projects')
      .then((response) => response.json())
      .then((projects) => projects.filter((entry) => entry.slug !== params.slug).slice(0, 4))
    const res = await fetch('/api/technologies', {
      method: 'POST',
      body: JSON.stringify({ technologyNames: post.metadata.technologies })
    })
    const technologies = await res.json()

    const allTechnologies = await getTechnologies()

    return {
      content: post.default,
      meta: post.metadata,
      technologies,
      allTechnologies: allTechnologies?.default,
      other
    }
  } catch (error) {
    console.error(error)
    throw error(404, `Could not find ${params.slug}`)
  }
}
