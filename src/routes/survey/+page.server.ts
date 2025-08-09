import type { Actions } from './$types';
import { submissions } from '$lib/submissions.store';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const experience = data.get('experience') as string;
		if (experience) {
			submissions.update((current) => [...current, experience]);
		}
		throw redirect(303, '/survey/thank-you');
	}
} satisfies Actions;
