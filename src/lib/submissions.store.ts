import { writable } from 'svelte/store';

export const submissions = writable<string[]>([]);
