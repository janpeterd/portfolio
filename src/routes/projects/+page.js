export async function load({ fetch }) {
    const response = await fetch('/api/projects')
    const posts = await response.json()
    return { posts }
}
