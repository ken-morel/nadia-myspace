import { app } from '$lib/firebase.js';
import { getAnalytics } from 'firebase/analytics';

export const analytics = getAnalytics(app);
