export async function load({ fetch }) {
  const response = await fetch('/api/projects?highlight=true')
  const highlightedProjects = await response.json()

  return {
    highlightedProjects
  }
}
