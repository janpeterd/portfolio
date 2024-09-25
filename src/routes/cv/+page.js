export async function load() {
  let profiel = await import('./profiel.md')
  return {
    content: profiel.default,
    meta: profiel.metadata
  }
}
