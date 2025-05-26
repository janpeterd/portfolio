export async function load({ params, fetch }) {
  const post = await import('../../content/stage/stage.md')
  return {
    content: post.default,
    meta: post.metadata
  }
}
