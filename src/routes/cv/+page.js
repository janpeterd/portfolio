export async function load() {
  let profiel = await import('../../content/cv/profiel.md')
  return {
    content: profiel.default,
    meta: profiel.metadata
  }
}
