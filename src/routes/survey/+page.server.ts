import type { Actions } from './$types.ts';
import { redirect } from '@sveltejs/kit';
import { submit } from '$lib/submissions.js';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const content = data.get('content') as string;
		const username = data.get('username') as string;
		submit({
			content,
			username
		});
		throw redirect(303, '/survey/thank-you');
	}
} satisfies Actions;
