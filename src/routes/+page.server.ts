import type { PageServerLoad } from '$types';
import { submissions } from '$lib/submissions.store';
import { get } from 'svelte/store';

export const load: PageServerLoad = async () => {
	return {
		submissions: get(submissions)
	};
};
