export async function getTechnologies() {
  return await import('$lib/data/technologies.json')
}
