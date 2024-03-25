import { getProjects } from '$lib/projects'
import { json } from '@sveltejs/kit'

export async function GET() {
	const projects = await getProjects()
	return json(projects)
}
