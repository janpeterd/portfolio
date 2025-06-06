export async function load({ fetch, parentData }) {
  const technologies = await import('$lib/data/technologies.json')
  const response = await fetch('/api/projects')
  const posts = await response.json()

  return {
    posts,
    technologies: technologies.default
  }
}
