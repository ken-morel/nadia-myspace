import { getSubmissions } from '$lib/submissions.js';

export async function load() {
	return {
		submissions: await getSubmissions()
	};
}
